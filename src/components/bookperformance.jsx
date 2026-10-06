import { useState } from "react";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";

export default function BookPerformance() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    eventTime: "",
    location: "",
    guests: "",
    package: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Booking request:", formData);

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#fffaf5]">

        <div className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-5">

          <div className="w-full rounded-3xl bg-white p-8 text-center shadow-xl md:p-12">

            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#f8ddd5] text-2xl">
              ✓
            </div>

            <h1 className="mt-6 text-4xl">
              Request Received
            </h1>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-black/60">
              Thank you for your interest in Nritya Dance Collective.
              We received your performance request and will contact you
              shortly to discuss availability and pricing.
            </p>

            <a
              href="/"
              className="btn-primary mt-7 inline-flex items-center gap-2"
            >
              Return Home
              <ArrowRight size={14} />
            </a>

          </div>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f0e8]">

      {/* Header */}

      <div className="bg-[#180907] px-5 py-5 text-white">

        <div className="mx-auto flex max-w-6xl items-center justify-between">

          <a
            href="/"
            className="flex items-center gap-2"
          >
            <div className="grid h-10 w-10 place-items-center rounded-full border border-[#c79b5c] text-[#c79b5c]">
              ✦
            </div>

            <div>
              <div className="font-serif text-xl tracking-[.18em]">
                NRITYA
              </div>

              <div className="text-[8px] uppercase tracking-[.28em] text-white/70">
                Dance Collective
              </div>
            </div>
          </a>

          <a
            href="/"
            className="flex items-center gap-2 text-xs text-white/70 hover:text-white"
          >
            <ArrowLeft size={14} />
            Back Home
          </a>

        </div>

      </div>

      {/* Page Header */}

      <section className="px-5 pb-10 pt-16 text-center">

        <p className="section-kicker">
          Let's Create Something Beautiful
        </p>

        <h1 className="mt-3 text-5xl md:text-6xl">
          Book a Performance
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-black/60">
          Tell us about your event and we'll work with you to
          create a memorable cultural performance for your celebration.
        </p>

      </section>

      {/* Form */}

      <section className="px-5 pb-20">

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-5xl rounded-3xl bg-white p-6 shadow-xl md:p-10"
        >

          {/* Contact Information */}

          <div>

            <h2 className="text-3xl">
              Your Information
            </h2>

            <p className="mt-1 text-sm text-black/50">
              How can we contact you?
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">

              <Input
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />

              <Input
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />

              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <Input
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          <div className="my-10 border-t border-black/10" />

          {/* Event Information */}

          <div>

            <h2 className="text-3xl">
              Event Information
            </h2>

            <p className="mt-1 text-sm text-black/50">
              Tell us about your celebration.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">

              <Field label="Event Type">
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="">
                    Select event type
                  </option>

                  <option value="Wedding">
                    Wedding
                  </option>

                  <option value="Cultural Event">
                    Cultural Event
                  </option>

                  <option value="Birthday">
                    Birthday
                  </option>

                  <option value="Private Celebration">
                    Private Celebration
                  </option>

                  <option value="Corporate Event">
                    Corporate Event
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>
              </Field>

              <Field label="Number of Guests">
                <input
                  name="guests"
                  type="number"
                  min="1"
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder="Approximate number"
                  required
                  className="form-input"
                />
              </Field>

              <Field label="Event Date">
                <div className="relative">

                  <CalendarDays
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40"
                  />

                  <input
                    name="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="form-input pl-11"
                  />

                </div>
              </Field>

              <Field label="Preferred Time">
                <input
                  name="eventTime"
                  type="time"
                  value={formData.eventTime}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </Field>

              <div className="md:col-span-2">

                <Input
                  label="Event Location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Venue, city, state"
                  required
                />

              </div>

            </div>

          </div>

          <div className="my-10 border-t border-black/10" />

          {/* Package */}

          <div>

            <h2 className="text-3xl">
              Performance
            </h2>

            <p className="mt-1 text-sm text-black/50">
              Choose the type of performance you're interested in.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">

              <Package
                title="Solo"
                description="One dancer performance"
                value="Solo"
                selected={formData.package === "Solo"}
                onClick={() =>
                  setFormData({
                    ...formData,
                    package: "Solo",
                  })
                }
              />

              <Package
                title="Duo"
                description="Two dancer performance"
                value="Duo"
                selected={formData.package === "Duo"}
                onClick={() =>
                  setFormData({
                    ...formData,
                    package: "Duo",
                  })
                }
              />

              <Package
                title="Group"
                description="Full group performance"
                value="Group"
                selected={formData.package === "Group"}
                onClick={() =>
                  setFormData({
                    ...formData,
                    package: "Group",
                  })
                }
              />

            </div>

          </div>

          <div className="my-10 border-t border-black/10" />

          {/* Additional Information */}

          <Field label="Tell us more about your event">

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="Tell us about your event, performance ideas, cultural traditions you'd like included, etc."
              className="form-input resize-none"
            />

          </Field>

          {/* Submit */}

          <div className="mt-8 flex justify-end">

            <button
              type="submit"
              className="btn-primary inline-flex items-center gap-2"
            >
              Submit Booking Request
              <ArrowRight size={15} />
            </button>

          </div>

        </form>

      </section>

    </div>
  );
}


/* Input */

function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}) {
  return (
    <Field label={label}>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="form-input"
      />
    </Field>
  );
}


/* Field */

function Field({ label, children }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-black/60">
        {label}
      </label>

      {children}
    </div>
  );
}


/* Package */

function Package({
  title,
  description,
  selected,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border p-5 text-left transition ${
        selected
          ? "border-[#b86c60] bg-[#fdf0ec]"
          : "border-black/10 hover:border-[#b86c60]"
      }`}
    >
      <div className="flex items-center justify-between">

        <h3 className="font-serif text-2xl">
          {title}
        </h3>

        <div
          className={`h-4 w-4 rounded-full border ${
            selected
              ? "border-[#b86c60] bg-[#b86c60]"
              : "border-black/20"
          }`}
        />

      </div>

      <p className="mt-2 text-xs text-black/50">
        {description}
      </p>

    </button>
  );
}