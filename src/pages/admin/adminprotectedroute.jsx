
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { supabase } from "../../services/supabase.js";

export default function AdminProtectedRoute() {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    let mounted = true;

    const checkAdmin = async (session) => {
      if (!session?.user) {
        if (mounted) setStatus("signedOut");
        return;
      }

      const { data, error } = await supabase
        .from("admin_users")
        .select("user_id")
        .eq("user_id", session.user.id)
        .maybeSingle();

      if (!mounted) return;

      if (error) {
        console.error("Admin verification failed:", error);
        setStatus("error");
      } else if (data) {
        setStatus("admin");
      } else {
        setStatus("unauthorized");
      }
    };

    supabase.auth.getSession().then(({ data, error }) => {
      if (error) {
        if (mounted) setStatus("error");
        return;
      }

      return checkAdmin(data.session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      // Defer the database query until the auth callback finishes.
      setTimeout(() => {
        if (mounted) checkAdmin(session);
      }, 0);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  if (status === "checking") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f0e8]">
        Checking administrator access...
      </div>
    );
  }

  if (status === "signedOut") {
    return <Navigate to="/admin/login" replace />;
  }

  if (status === "unauthorized") {
    return <Navigate to="/" replace />;
  }

  if (status === "error") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f0e8] p-6">
        <p role="alert">
          Unable to verify administrator access. Please try signing in again.
        </p>
      </div>
    );
  }

  return <Outlet />;
}
