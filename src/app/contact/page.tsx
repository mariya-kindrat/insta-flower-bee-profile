"use client";

import { CalendarIcon, MapPinIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    city: "",
    inquiryType: "Wedding",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    if (formData.phone && formData.phone.trim()) {
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          eventDate: "",
          city: "",
          inquiryType: "Wedding",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-ivory text-graphite">
      <section className="px-6 md:px-10 lg:px-20 py-14">
        <div className="mx-auto max-w-5xl">
          <header className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight">Contact Me</h1>
            <p className="mt-3 text-graphite/70 max-w-2xl mx-auto">
              I&apos;d love to hear from you. Share a few details about your event and I&apos;ll get back to you with availability and next steps.
            </p>
          </header>

          <div className="mt-10 rounded-2xl border border-line bg-white/70 shadow-sm">
            <form className="p-6 md:p-10" onSubmit={handleSubmit}>
              {submitStatus.type && (
                <div
                  className={`mb-6 p-4 rounded-xl ${submitStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name <span className="text-red-600" aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full rounded-xl border bg-white px-4 py-3 outline-none focus:ring-2 transition-colors ${errors.name
                      ? "border-red-500 focus:ring-red-500/20"
                      : "border-line focus:ring-graphite/20"
                      }`}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email <span className="text-red-600" aria-label="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@email.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full rounded-xl border bg-white px-4 py-3 outline-none focus:ring-2 transition-colors ${errors.email
                      ? "border-red-500 focus:ring-red-500/20"
                      : "border-line focus:ring-graphite/20"
                      }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone <span className="text-graphite/60 text-xs">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (___) ___-____"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={`w-full rounded-xl border bg-white px-4 py-3 outline-none focus:ring-2 transition-colors ${errors.phone
                      ? "border-red-500 focus:ring-red-500/20"
                      : "border-line focus:ring-graphite/20"
                      }`}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4" aria-hidden="true" /> Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-graphite/20 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <MapPinIcon className="h-4 w-4" aria-hidden="true" /> City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City / Venue"
                    className="w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-graphite/20 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-graphite/20 transition-colors"
                  >
                    <option value="Wedding">Wedding</option>
                    <option value="Bouquet / Arrangement">Bouquet / Arrangement</option>
                    <option value="Event">Event</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message <span className="text-red-600" aria-label="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your vision, palette, and any details you already have…"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full rounded-xl border bg-white px-4 py-3 outline-none focus:ring-2 transition-colors ${errors.message
                      ? "border-red-500 focus:ring-red-500/20"
                      : "border-line focus:ring-graphite/20"
                      }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 hr-hairline" />

              <div className="mt-6 flex items-center justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative rounded-full px-8 py-3.5 bg-graphite text-ivory font-medium tracking-wide border-2 border-graphite hover:bg-ivory hover:text-graphite transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-graphite disabled:hover:text-ivory flex items-center gap-2.5 shadow-md hover:shadow-lg"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <PaperAirplaneIcon
                    className={`h-5 w-5 transition-transform duration-300 ${isSubmitting ? "animate-pulse" : "group-hover:translate-x-1 group-hover:-translate-y-1"}`}
                    aria-hidden="true"
                  />
                </button>
              </div>

              <p className="mt-4 text-center text-xs text-graphite/60">
                By sending this form you agree to be contacted regarding your inquiry. Your details are kept private.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}