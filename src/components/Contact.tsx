"use client";

import React, { useState } from "react";
import { Icons } from "./Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate backend response
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#030712] border-t border-white/5">
      {/* Background glow orb */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-wider text-primary uppercase mb-3">Get in Touch</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Let's Collaborate On Your Vision
          </h3>
          <p className="text-gray-400 text-base sm:text-lg">
            Have a project in mind or want to discuss a partnership? Send us a message and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Contact Information (Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-2xl glass-panel flex flex-col gap-8 h-full justify-between">
              <div className="flex flex-col gap-6">
                <h4 className="text-2xl font-bold text-white tracking-tight">Contact Info</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We are headquartered in the tech sector, but we operate globally. Drop us an email, give us a call, or fill out the form.
                </p>
              </div>

              {/* Items */}
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                    <Icons.Mail size={22} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Email Us</span>
                    <a href="mailto:hello@auradynamics.com" className="text-white hover:text-primary transition-colors font-medium">
                      hello@auradynamics.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0">
                    <Icons.Phone size={22} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Call Us</span>
                    <a href="tel:+1234567890" className="text-white hover:text-accent transition-colors font-medium">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary shrink-0">
                    <Icons.MapPin size={22} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">HQ Location</span>
                    <span className="text-white font-medium">
                      San Francisco, California
                    </span>
                  </div>
                </div>
              </div>

              {/* Social mock elements */}
              <div className="border-t border-white/5 pt-6 flex gap-4">
                <span className="text-xs text-gray-500 font-medium">Follow our journey:</span>
                <div className="flex gap-3">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-semibold">LinkedIn</a>
                  <span className="text-gray-700">•</span>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-semibold">Twitter</a>
                  <span className="text-gray-700">•</span>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs font-semibold">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form (Col Span 7) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl glass-panel relative overflow-hidden h-full">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center text-center h-full min-h-[350px] gap-6 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-secondary/15 border border-secondary/30 flex items-center justify-center text-secondary shadow-lg shadow-secondary/10">
                    <Icons.Check size={32} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-2xl font-bold text-white tracking-tight">Message Received!</h4>
                    <p className="text-gray-400 text-sm max-w-sm mx-auto">
                      Thank you for reaching out. A partner from Aura Dynamics will review your message and reach out shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold rounded-xl transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-bold text-gray-300 uppercase tracking-wider">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-bold text-gray-300 uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-xs font-bold text-gray-300 uppercase tracking-wider">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200"
                      placeholder="Project Inquiries, Custom Dev..."
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-bold text-gray-300 uppercase tracking-wider">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200 resize-none"
                      placeholder="Describe your project goals, timelines, or requirements..."
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/45 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {status === "submitting" ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Icons.Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
