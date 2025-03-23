import { useState, useEffect } from "react";
import { CheckCircle, AlertCircle, Send } from "react-feather";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    if (formStatus?.success) {
      const timer = setTimeout(() => {
        setFormStatus(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real application, you would send this data to your backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormStatus({
        success: true,
        message: "Your message has been sent successfully!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        success: false,
        message: "There was an error sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent neon-text">
          Get In Touch
        </h2>

        <div className="max-w-md mx-auto">
          <div className="frosted-glass rounded-2xl shadow-xl transform transition-all duration-300 hover:shadow-2xl card-3d">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Contact Me
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>
            </div>
            <div className="p-6">
              {formStatus && (
                <div
                  className={`mb-6 p-4 rounded-md ${
                    formStatus.success
                      ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300 border-l-4 border-green-500"
                      : "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300 border-l-4 border-red-500"
                  }`}
                >
                  <div className="flex">
                    {formStatus.success ? (
                      <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    )}
                    <div>
                      <div className="font-medium">
                        {formStatus.success ? "Success!" : "Error!"}
                      </div>
                      <div className="text-sm">{formStatus.message}</div>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800/50 transition-all duration-300"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800/50 transition-all duration-300"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800/50 transition-all duration-300"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 flex items-center justify-center gradient-btn text-white font-medium rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
