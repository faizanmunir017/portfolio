"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import type { ContactFormData } from "@/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MagneticButton } from "@/components/ui/MagneticButton";

type FormStatus = "idle" | "submitting" | "success" | "error";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch {
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
      setStatus("success");
      setFormData(initialFormData);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-glass-border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-muted/50 transition-colors duration-200 focus:border-cyber-cyan/50 focus:outline-none focus:ring-1 focus:ring-cyber-cyan/30";

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Contact"
          title="Let's Build Something Intelligent"
          description="Have a project in mind or want to discuss AI-driven solutions? I'd love to hear from you."
          align="center"
        />

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="flex flex-col justify-center gap-6 lg:col-span-2">
            <div className="glass rounded-2xl p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Get in touch
              </h3>
              <div className="flex flex-col gap-4 text-sm text-muted">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-cyber-cyan">
                    Email
                  </p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="mt-1 block text-white transition-colors hover:text-cyber-cyan"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-cyber-cyan">
                    Location
                  </p>
                  <p className="mt-1 text-white">{personalInfo.location}</p>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-cyber-cyan">
                    Status
                  </p>
                  <p className="mt-1 flex items-center gap-2 text-white">
                    <span className="inline-flex h-2 w-2 rounded-full bg-green-500" />
                    Open to opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 md:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="mb-2 block text-sm text-muted">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Project inquiry"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <div className="mt-6 flex items-center gap-4">
                <MagneticButton
                  type="submit"
                  disabled={status === "submitting"}
                  className="bg-gradient-to-r from-cyber-cyan-dim to-electric-violet-dim text-white"
                >
                  <span className="flex items-center gap-2">
                    {status === "submitting" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </span>
                </MagneticButton>

                {status === "success" && (
                  <span className="flex items-center gap-1 text-sm text-green-400">
                    <CheckCircle className="h-4 w-4" />
                    Message sent!
                  </span>
                )}

                {status === "error" && (
                  <span className="flex items-center gap-1 text-sm text-red-400">
                    <AlertCircle className="h-4 w-4" />
                    Something went wrong
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
