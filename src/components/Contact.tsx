import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Share2,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Send,
  RotateCcw,
} from "lucide-react";
import { COMPANY_INFO, SERVICE_DROPDOWN_OPTIONS } from "../data/content";

interface ContactProps {
  preselectedService?: string;
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        service: preselectedService,
      }));
    }
  }, [preselectedService]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!/^[0-9+ ]{7,16}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.service) {
      newErrors.service = "Please select a required service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
      setErrors({});
    }, 600);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-[#151515] text-white scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#809618] inline-block" />
            <span className="text-[#809618] font-bold text-xs sm:text-sm tracking-widest uppercase">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Ready To Transform Your Garden?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            Get in touch with C&J Fencing Gardening to discuss your next garden,
            fencing or outdoor project.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT SIDE: Contact Information & Direct Action */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-6 pb-4 border-b border-white/10">
                Get In Touch
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed mb-8">
                Whether you need a full garden makeover, replacement fence panels,
                stump removal or regular maintenance, give us a call or send a
                message.
              </p>

              {/* Direct Info List */}
              <div className="space-y-6 mb-10">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#809618]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block">
                      Direct Phone
                    </span>
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="text-lg sm:text-xl font-extrabold text-white hover:text-[#809618] transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#809618]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block">
                      Email Address
                    </span>
                    <a
                      href={COMPANY_INFO.emailHref}
                      className="text-sm sm:text-base font-bold text-white hover:text-[#809618] transition-colors break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Share2 className="w-5 h-5 text-[#809618]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block">
                      Facebook Page
                    </span>
                    <a
                      href={COMPANY_INFO.facebookHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-white hover:text-[#809618] transition-colors"
                    >
                      {COMPANY_INFO.facebookName}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4">
              <a
                href={COMPANY_INFO.phoneHref}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#809618] hover:bg-[#718514] active:bg-[#627410] text-white py-4 px-6 text-sm font-bold tracking-wide transition-all shadow-md text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>

              <a
                href={COMPANY_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#151515] py-4 px-6 text-sm font-bold tracking-wide transition-all shadow-md text-center"
              >
                <MessageSquare className="w-4 h-4 text-[#809618]" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Quote / Enquiry Form */}
          <div className="lg:col-span-7 bg-[#1c1c1c] p-6 sm:p-10 border border-white/10 relative">
            <div className="absolute top-0 left-0 w-16 h-1 bg-[#809618]" />

            {isSubmitted ? (
              /* Polished Success State */
              <div className="py-8 text-center sm:text-left">
                <div className="w-14 h-14 bg-[#809618]/20 border border-[#809618] flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#809618]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                  Quote Request Received
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  Thank you,{" "}
                  <strong className="text-white">{submittedData?.name}</strong>.
                  We have received your enquiry regarding{" "}
                  <span className="text-[#809618] font-bold">
                    {submittedData?.service}
                  </span>
                  . A member of the C&J team will get in touch shortly via{" "}
                  <span className="text-white font-medium">
                    {submittedData?.phone}
                  </span>
                  .
                </p>

                <div className="p-4 bg-white/5 border border-white/10 text-xs text-gray-400 mb-8 space-y-1">
                  <div>
                    <span className="font-semibold text-gray-300">Name:</span>{" "}
                    {submittedData?.name}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">Phone:</span>{" "}
                    {submittedData?.phone}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">Email:</span>{" "}
                    {submittedData?.email}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">Service:</span>{" "}
                    {submittedData?.service}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="inline-flex items-center justify-center gap-2 bg-[#809618] hover:bg-[#718514] text-white px-6 py-3.5 text-sm font-bold tracking-wide transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now ({COMPANY_INFO.phone})</span>
                  </a>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-gray-300 hover:text-white border border-white/20 px-6 py-3.5 text-sm font-bold tracking-wide transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Submit Another Enquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Quote Form */
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Request A Quote
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    Fill out the form below and we will contact you to discuss
                    your requirements.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-xs uppercase tracking-wider font-bold text-gray-300 mb-1.5"
                    >
                      Your Name <span className="text-[#809618]">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. David Miller"
                      className={`w-full bg-[#151515] border px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#809618] transition-colors ${
                        errors.name
                          ? "border-red-500"
                          : "border-white/20 hover:border-white/40 focus:border-[#809618]"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1 font-medium">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="form-phone"
                        className="block text-xs uppercase tracking-wider font-bold text-gray-300 mb-1.5"
                      >
                        Phone Number <span className="text-[#809618]">*</span>
                      </label>
                      <input
                        id="form-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="e.g. 07123 456789"
                        className={`w-full bg-[#151515] border px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#809618] transition-colors ${
                          errors.phone
                            ? "border-red-500"
                            : "border-white/20 hover:border-white/40 focus:border-[#809618]"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-400 mt-1 font-medium">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="form-email"
                        className="block text-xs uppercase tracking-wider font-bold text-gray-300 mb-1.5"
                      >
                        Email Address <span className="text-[#809618]">*</span>
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. david@example.co.uk"
                        className={`w-full bg-[#151515] border px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#809618] transition-colors ${
                          errors.email
                            ? "border-red-500"
                            : "border-white/20 hover:border-white/40 focus:border-[#809618]"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1 font-medium">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Required Dropdown */}
                  <div>
                    <label
                      htmlFor="form-service"
                      className="block text-xs uppercase tracking-wider font-bold text-gray-300 mb-1.5"
                    >
                      Service Required <span className="text-[#809618]">*</span>
                    </label>
                    <select
                      id="form-service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className={`w-full bg-[#151515] border px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#809618] transition-colors ${
                        errors.service
                          ? "border-red-500"
                          : "border-white/20 hover:border-white/40 focus:border-[#809618]"
                      }`}
                    >
                      <option value="" disabled>
                        Select a service...
                      </option>
                      {SERVICE_DROPDOWN_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#151515] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-xs text-red-400 mt-1 font-medium">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="form-message"
                      className="block text-xs uppercase tracking-wider font-bold text-gray-300 mb-1.5"
                    >
                      Project Details / Message
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about the size of your garden, current condition, or what you'd like done..."
                      className="w-full bg-[#151515] border border-white/20 hover:border-white/40 focus:border-[#809618] px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#809618] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-3 bg-[#809618] hover:bg-[#718514] active:bg-[#627410] disabled:bg-[#809618]/50 text-white py-4 px-6 text-sm font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <span>Request A Quote</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-gray-400 text-center pt-1">
                    No spam. We use your details solely to contact you regarding your quote.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
