"use client";

import { EnvelopeIcon, PhoneIcon, CameraIcon, CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-ivory text-graphite">
      <section className="px-6 md:px-10 lg:px-20 py-14">
        <div className="mx-auto max-w-5xl">
          <header className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight">Contact Me</h1>
            <p className="mt-3 text-graphite/70 max-w-2xl mx-auto">
              I’d love to hear from you. Share a few details about your event and I’ll get back to you with availability and next steps.
            </p>
          </header>

          <div className="mt-10 rounded-2xl border border-line bg-white/70 shadow-sm">
            <form className="p-6 md:p-10">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="block text-sm mb-2">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-graphite/20"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    className="w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-graphite/20"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Phone (optional)</label>
                  <input
                    type="tel"
                    placeholder="+1 (___) ___-____"
                    className="w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-graphite/20"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4" /> Event Date
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-graphite/20"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 flex items-center gap-2">
                    <MapPinIcon className="h-4 w-4" /> City
                  </label>
                  <input
                    type="text"
                    placeholder="City / Venue"
                    className="w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-graphite/20"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Inquiry Type</label>
                  <select
                    className="w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-graphite/20"
                    defaultValue="Wedding"
                  >
                    <option>Wedding</option>
                    <option>Bouquet / Arrangement</option>
                    <option>Event</option>
                    <option>Workshop</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm mb-2">Message</label>
                  <textarea
                    rows={6}
                    placeholder="Tell me about your vision, palette, and any details you already have…"
                    className="w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-graphite/20"
                  />
                </div>
              </div>

              <div className="mt-6 hr-hairline" />

              <div className="mt-6 flex items-center justify-center">
                <button
                  type="submit"
                  className="rounded-full px-7 py-3 bg-graphite text-ivory font-medium tracking-wide hover:bg-graphite/90 transition"
                >
                  Send Message
                </button>
              </div>

              <p className="mt-4 text-center text-xs text-graphite/60">
                By sending this form you agree to be contacted regarding your inquiry. Your details are kept private.
              </p>
            </form>

            <div className="px-6 md:px-10 pb-8">
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <a
                  href="mailto:irynamelnyk339@gmail.com"
                  className="group flex items-center justify-center gap-2 rounded-xl border border-line bg-white/60 px-4 py-3 hover:bg-white transition"
                >
                  <EnvelopeIcon className="h-5 w-5" />
                  <span className="font-medium">irynamelnyk339@gmail.com</span>
                </a>

                <a
                  href="tel:+14756554646"
                  className="group flex items-center justify-center gap-2 rounded-xl border border-line bg-white/60 px-4 py-3 hover:bg-white transition"
                >
                  <PhoneIcon className="h-5 w-5" />
                  <span className="font-medium">+1 (475) 655-4646</span>
                </a>

                <Link
                  href="https://www.instagram.com/instaflowerbee"
                  target="_blank"
                  className="group flex items-center justify-center gap-2 rounded-xl border border-line bg-white/60 px-4 py-3 hover:bg-white transition"
                >
                  <CameraIcon className="h-5 w-5" />
                  <span className="font-medium">@instaflowerbee</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}