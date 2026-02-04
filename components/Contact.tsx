"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const iconMap = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
} as const;

type IconKeys = keyof typeof iconMap;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

interface SocialData {
  [key: string]: string;
}

export default function Contact({ socialData }: { socialData: SocialData }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const socialLinks = Object.entries(socialData).filter(([key]) => key !== 'email');

  return (
    <section id="contact" className="relative py-32 md:py-40 overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/20 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-full border border-gray-200/50 dark:border-gray-700/50 mb-6"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Get In Touch
              </span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Have a project in mind? I&apos;d love to hear from you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <motion.input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="peer w-full px-4 pt-6 pb-2 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-2 border-gray-200/50 dark:border-gray-800/50 rounded-2xl text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors"
                    placeholder=" "
                    whileFocus={{ scale: 1.02 }}
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-2 text-xs font-medium text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-emerald-600 dark:peer-focus:text-emerald-400"
                  >
                    Name
                  </label>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <motion.input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="peer w-full px-4 pt-6 pb-2 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-2 border-gray-200/50 dark:border-gray-800/50 rounded-2xl text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors"
                    placeholder=" "
                    whileFocus={{ scale: 1.02 }}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-2 text-xs font-medium text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-emerald-600 dark:peer-focus:text-emerald-400"
                  >
                    Email
                  </label>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <motion.textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="peer w-full px-4 pt-6 pb-2 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-2 border-gray-200/50 dark:border-gray-800/50 rounded-2xl text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors resize-none"
                    placeholder=" "
                    whileFocus={{ scale: 1.02 }}
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-2 text-xs font-medium text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-emerald-600 dark:peer-focus:text-emerald-400"
                  >
                    Message
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full px-6 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Or reach out directly
                </h3>
                <motion.a
                  href={`mailto:${socialData.email}`}
                  className="group flex items-center gap-4 p-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-800/50 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 transition-all"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {socialData.email}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Email me anytime
                    </div>
                  </div>
                </motion.a>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Connect on social
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map(([key, value]) => {
                    const Icon = iconMap[key as IconKeys];
                    if (!Icon) return null;
                    return (
                      <motion.a
                        key={key}
                        href={value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-800/50 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 transition-all text-center"
                        whileHover={{ y: -4, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-6 h-6 mx-auto mb-2 text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                          {key}
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
