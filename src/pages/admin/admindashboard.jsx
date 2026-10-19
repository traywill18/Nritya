import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabase.js";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout failed:", error);
      setError("Unable to log out. Please try again.");
      return;
    }

    navigate("/admin/login", { replace: true });
  };

  // Retrieve booking records from Supabase.
  const loadBookings = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const { data, error: fetchError } = await supabase
        .from("bookings")
        .select("*")
        .order("created_at", { ascending: false });

      if (fetchError) throw fetchError;

      setBookings(data ?? []);
    } catch (err) {
      console.error("Unable to load bookings:", err);
      setError(
        "Unable to load booking requests. Check your connection and administrator permissions, then try refreshing."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  // Load bookings when the dashboard opens.
  useEffect(() => {
    loadBookings();
  }, [loadBookings]);

  // Update a booking's status in Supabase.
  const updateBookingStatus = async (bookingId, newStatus) => {
    setUpdatingId(bookingId);
    setError("");

    try {
      const { error: updateError } = await supabase
        .from("bookings")
        .update({ status: newStatus })
        .eq("id", bookingId);

      if (updateError) throw updateError;

      await loadBookings();
    } catch (err) {
      console.error("Unable to update booking:", err);
      setError(
        "Unable to update this booking. Please check your permissions and try again."
      );
    } finally {
      setUpdatingId(null);
    }
  };

  // Dashboard statistics use all bookings, not the filtered list.
  const today = new Date();
  const todayString = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const pendingBookings = bookings.filter(
    (booking) => booking.status === "pending"
  ).length;

  const approvedBookings = bookings.filter(
    (booking) => booking.status === "approved"
  ).length;

  const upcomingPerformances = bookings.filter(
    (booking) =>
      booking.status === "approved" &&
      booking.event_date >= todayString
  ).length;

  // Filter bookings by customer, email, event, location, and status.
  const filteredBookings = bookings.filter((booking) => {
    const search = searchTerm.trim().toLowerCase();

    const customerName =
      `${booking.first_name ?? ""} ${booking.last_name ?? ""}`.toLowerCase();

    const matchesSearch =
      customerName.includes(search) ||
      (booking.email ?? "").toLowerCase().includes(search) ||
      (booking.event_type ?? "").toLowerCase().includes(search) ||
      (booking.location ?? "").toLowerCase().includes(search);

    const matchesStatus =
      statusFilter === "all" || booking.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const formatDate = (dateString) => {
    if (!dateString) return "Date not provided";

    return new Date(`${dateString}T12:00:00`).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (timeString) => {
    if (!timeString) return "Time not provided";

    const [hours, minutes] = timeString.split(":");
    const date = new Date();
    date.setHours(Number(hours), Number(minutes), 0, 0);

    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const statusStyle = {
    pending: "bg-yellow-100 text-yellow-800",
    approved: "bg-green-100 text-green-800",
    declined: "bg-red-100 text-red-800",
    completed: "bg-gray-100 text-gray-700",
  };

  return (
    <div className="min-h-screen bg-[#f8f0e8]">
      <header className="bg-[#120807] px-6 py-5 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <h1 className="text-2xl font-bold">Nritya Admin</h1>

          <button
            type="button"
            onClick={handleLogout}
            className="text-sm hover:opacity-70"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[#120807]">Dashboard</h2>
            <p className="mt-2 text-gray-600">
              Manage Nritya performances and booking requests.
            </p>
          </div>

          <button
            type="button"
            onClick={loadBookings}
            disabled={loading}
            className="rounded-lg border border-[#120807] px-4 py-2 text-sm font-medium text-[#120807] hover:bg-white disabled:opacity-50"
          >
            {loading ? "Loading..." : "Refresh"}
          </button>
        </div>

        {error && (
          <div
            role="alert"
            className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
          >
            {error}
          </div>
        )}

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <StatCard
            label="Pending Bookings"
            count={loading ? "—" : pendingBookings}
          />
          <StatCard
            label="Approved Bookings"
            count={loading ? "—" : approvedBookings}
          />
          <StatCard
            label="Upcoming Performances"
            count={loading ? "—" : upcomingPerformances}
          />
        </div>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#120807]">
            Booking Requests
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Review customer requests and manage their status.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="booking-search"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Search bookings
              </label>
              <input
                id="booking-search"
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Name, email, event, or location..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#c79b5c] focus:ring-1 focus:ring-[#c79b5c]"
              />
            </div>

            <div>
              <label
                htmlFor="booking-status"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Filter by status
              </label>
              <select
                id="booking-status"
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#c79b5c] focus:ring-1 focus:ring-[#c79b5c]"
              >
                <option value="all">All bookings</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="declined">Declined</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          <p className="mt-3 text-sm text-gray-500">
            Showing {filteredBookings.length} of {bookings.length} bookings
          </p>

          {loading ? (
            <p className="py-10 text-center text-gray-500">
              Loading booking requests...
            </p>
          ) : bookings.length === 0 ? (
            <p className="py-10 text-center text-gray-500">
              No booking requests found.
            </p>
          ) : filteredBookings.length === 0 ? (
            <p className="py-10 text-center text-gray-500">
              No bookings match your search or selected status.
            </p>
          ) : (
            <div className="mt-6 space-y-5">
              {filteredBookings.map((booking) => (
                <article
                  key={booking.id}
                  className="rounded-xl border border-gray-200 p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h4 className="text-lg font-semibold text-[#120807]">
                        {booking.first_name} {booking.last_name}
                      </h4>
                      <p className="mt-1 break-all text-sm text-gray-600">
                        {booking.email}
                      </p>
                      <p className="text-sm text-gray-600">{booking.phone}</p>
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                        statusStyle[booking.status] ??
                        "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2 lg:grid-cols-3">
                    <Detail label="Event" value={booking.event_type} />
                    <Detail
                      label="Date"
                      value={formatDate(booking.event_date)}
                    />
                    <Detail
                      label="Time"
                      value={formatTime(booking.event_time)}
                    />
                    <Detail label="Location" value={booking.location} />
                    <Detail label="Guests" value={booking.guests} />
                    <Detail
                      label="Performance Package"
                      value={booking.performance_package}
                    />
                  </div>

                  {booking.message && (
                    <div className="mt-4 rounded-lg bg-[#f8f0e8] p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Customer Message
                      </p>
                      <p className="mt-2 whitespace-pre-wrap text-sm text-gray-700">
                        {booking.message}
                      </p>
                    </div>
                  )}

                  <div className="mt-5 flex flex-wrap gap-3">
                    {booking.status === "pending" && (
                      <>
                        <button
                          type="button"
                          disabled={updatingId === booking.id}
                          onClick={() =>
                            updateBookingStatus(booking.id, "approved")
                          }
                          className="rounded-lg bg-[#120807] px-4 py-2 text-sm font-medium text-white hover:opacity-80 disabled:opacity-50"
                        >
                          {updatingId === booking.id
                            ? "Updating..."
                            : "Approve"}
                        </button>

                        <button
                          type="button"
                          disabled={updatingId === booking.id}
                          onClick={() =>
                            updateBookingStatus(booking.id, "declined")
                          }
                          className="rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-50 disabled:opacity-50"
                        >
                          Decline
                        </button>
                      </>
                    )}

                    {booking.status === "approved" && (
                      <button
                        type="button"
                        disabled={updatingId === booking.id}
                        onClick={() =>
                          updateBookingStatus(booking.id, "completed")
                        }
                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                      >
                        Mark Completed
                      </button>
                    )}

                    {booking.status === "declined" && (
                      <button
                        type="button"
                        disabled={updatingId === booking.id}
                        onClick={() =>
                          updateBookingStatus(booking.id, "pending")
                        }
                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                      >
                        Reopen Request
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

function StatCard({ label, count }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-2 text-4xl font-bold text-[#120807]">{count}</p>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
        {label}
      </p>
      <p className="mt-1 break-words font-medium text-gray-800">
        {value ?? "—"}
      </p>
    </div>
  );
}
