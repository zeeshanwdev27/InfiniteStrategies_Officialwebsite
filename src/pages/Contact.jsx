import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, Mail, Building, Send } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setFormData({ name: "", phone: "", email: "", company: "", message: "" });
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      borderColor: "#f59e0b",
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      backgroundColor: "#ffffff",
      color: "#000000",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.98 }
  };

  return (
    <>
      <section
      id="contact"
        className=" bg-linear-to-br from-gray-900 to-black text-white pt-8 sm:pt-12 md:pt-16 lg:pt-20 overflow-hidden relative"
        aria-labelledby="contact-heading"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 sm:-top-32 sm:-right-32 lg:-top-40 lg:-right-40 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-amber-400/10 rounded-full blur-2xl lg:blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 sm:-bottom-32 sm:-left-32 lg:-bottom-40 lg:-left-40 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-blue-400/10 rounded-full blur-2xl lg:blur-3xl"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 w-[90%] max-w-7xl mx-auto relative z-10 py-8">
          {/* Left Section - Modern Hero */}
          <div className="relative flex flex-col justify-center items-center space-y-6 sm:space-y-8">
            {/* Animated Orbital System */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-white/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Middle Ring */}
              <motion.div
                className="absolute inset-4 sm:inset-6 lg:inset-8 rounded-full border border-amber-400/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner Ring with Floating Elements */}
              <motion.div
                className="absolute inset-8 sm:inset-12 lg:inset-16 rounded-full border border-white/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <motion.div
                  className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2"
                  animate={{
                    rotate: -360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-amber-400" />
                </motion.div>
              </motion.div>

              {/* Central Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="mb-4 sm:mb-6"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-linear-to-br from-amber-400 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-amber-400/25">
                      <Send className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                  </motion.div>
                  
                  <h1
                    id="contact-heading"
                    className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-2 sm:mb-4"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="block bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent"
                    >
                      Let's Create
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="block bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"
                    >
                      Together
                    </motion.span>
                  </h1>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-gray-300 text-sm sm:text-base lg:text-lg mt-4 sm:mt-6 max-w-xs sm:max-w-sm lg:max-w-md px-2 sm:px-0"
                  >
                    Ready to bring your vision to life? Let's start the conversation and build something amazing.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section - Modernized */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 sm:gap-6 w-full max-w-lg mx-auto lg:mx-0 px-2 sm:px-0"
            noValidate
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <motion.div variants={inputVariants} whileFocus="focus">
                <div className="relative">
                  <User className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-700 bg-gray-900/50 p-3 sm:p-4 pl-10 sm:pl-12 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 placeholder-gray-500 transition-all duration-300 text-sm sm:text-base"
                    required
                  />
                </div>
              </motion.div>

              <motion.div variants={inputVariants} whileFocus="focus">
                <div className="relative">
                  <Phone className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-700 bg-gray-900/50 p-3 sm:p-4 pl-10 sm:pl-12 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 placeholder-gray-500 transition-all duration-300 text-sm sm:text-base"
                    required
                  />
                </div>
              </motion.div>
            </div>

            {/* Email & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <motion.div variants={inputVariants} whileFocus="focus">
                <div className="relative">
                  <Mail className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-700 bg-gray-900/50 p-3 sm:p-4 pl-10 sm:pl-12 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 placeholder-gray-500 transition-all duration-300 text-sm sm:text-base"
                    required
                  />
                </div>
              </motion.div>

              <motion.div variants={inputVariants} whileFocus="focus">
                <div className="relative">
                  <Building className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company (Optional)"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border border-gray-700 bg-gray-900/50 p-3 sm:p-4 pl-10 sm:pl-12 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 placeholder-gray-500 transition-all duration-300 text-sm sm:text-base"
                  />
                </div>
              </motion.div>
            </div>

            {/* Message */}
            <motion.div variants={inputVariants} whileFocus="focus">
              <textarea
                rows={4}
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-700 bg-gray-900/50 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 placeholder-gray-500 resize-vertical min-h-[100px] sm:min-h-[120px] lg:min-h-[140px] transition-all duration-300 text-sm sm:text-base"
                required
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="cursor-pointer w-full bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 mt-1 sm:mt-2"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  <span className="text-sm sm:text-base">Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Get Started</span>
                </>
              )}
            </motion.button>
          </motion.form>
        </div>

        {/* Footer */}
        <div className="py-5 text-white text-center w-full bg-gray-900/50 backdrop-blur-sm mt-8 sm:mt-12 mb-0">
          <p className="text-sm sm:text-base">Infinite Strategies - All Rights Reserved</p>
        </div>

      </section>
    </>
  );
}

export default Contact;