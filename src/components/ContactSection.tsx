import { motion } from "framer-motion";
import { 
  Send, MapPin, Mail, Phone, 
  FileText, Download, Award,
  MessageCircle, 
  Github, Linkedin, Facebook,
  ExternalLink,
  Target, GraduationCap, Code
} from "lucide-react";
import { useState, FormEvent } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    // Here you would typically send the form data to your backend
  };

  // Contact information
  const contactInfo = [
    { icon: Mail, label: "Email", value: "gakiiglory683@gmail.com", href: "mailto:gakiiglory683@gmail.com" },
    { icon: Phone, label: "Phone", value: "+254746895169", href: "tel:+254746895169" },
    { icon: MapPin, label: "Location", value: "Garissa, KENYA", href: "#" },
  ];

  // Social media links
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/gakii-com", target: "_blank", color: "hover:text-[#333]" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/gakii-glory-88b269300", color: "hover:text-[#0077b5]" },
    { icon: Facebook, label: "Facebook", href: "https://facebook.com/GlorieAlois", color: "hover:text-[#1877f2]" },
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/254746895169", color: "hover:text-[#25D366]" },
    { icon: Send, label: "Telegram", href: "https://t.me/Gee", color: "hover:text-[#0088cc]" },
  ];

  // Downloadable files - Try different path variations
  const downloads = [
    { 
      icon: FileText, 
      label: "Download CV", 
      file: "/Glory_Gakii_CV.pdf", 
      altFile: "/cv.pdf",
      altFile2: "/documents/Glory_Gakii_CV.pdf",
      downloadName: "Glory_Gakii_CV.pdf",
      size: "2.4 MB" 
    },
    { 
      icon: Code, 
      label: "Fullstack Dev Certificate", 
      file: "/fullstackdev.pdf", 
      altFile: "/fullstack.pdf",
      altFile2: "/certificates/fullstackdev.pdf",
      downloadName: "Fullstack_Dev_Certificate.pdf",
      size: "1.5 MB" 
    },
    { 
      icon: GraduationCap, 
      label: "IT Certificate", 
      file: "/itcert.pdf", 
      altFile: "/it.pdf",
      altFile2: "/certificates/itcert.pdf",
      downloadName: "IT_Certificate.pdf",
      size: "1.8 MB" 
    },
  ];

  // Function to check if file exists
  const checkFileExists = async (url: string) => {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  };

  // Function to handle download with fallback paths
  const handleDownload = async (filePath: string, fileName: string) => {
    setDownloadError(null);
    
    try {
      // Try the main path first
      let fileToDownload = filePath;
      
      // Create an anchor element
      const link = document.createElement('a');
      link.href = fileToDownload;
      link.download = fileName;
      link.target = '_blank'; // Open in new tab as fallback
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // If there's an error, we'll catch it (though this won't catch 404s)
      // For better error handling, we'd need to check file existence first
      
    } catch (error) {
      console.error('Download failed:', error);
      setDownloadError(`Failed to download ${fileName}. Please try again or contact me directly.`);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind? Let's talk about how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Info & Downloads */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold mb-4">Contact Information</h3>
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 group p-3 rounded-lg hover:bg-card/50 transition-all duration-200"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 shrink-0 transition-colors">
                    <Icon className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{label}</p>
                    <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {socialLinks.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 p-3 rounded-lg bg-card/50 border border-border hover:border-accent transition-all duration-200 group ${color}`}
                  >
                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{label}</span>
                    <ExternalLink size={12} className="ml-auto opacity-50 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>

            {/* CV and Certificates Downloads */}
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold mb-4">Downloads</h3>
              
              {/* Show error message if any */}
              {downloadError && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-4">
                  <p className="text-red-500 text-sm">{downloadError}</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 gap-4">
                {downloads.map(({ icon: Icon, label, file, downloadName, size }) => (
                  <button
                    key={label}
                    onClick={() => handleDownload(file, downloadName)}
                    className="w-full flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-border hover:border-accent transition-all duration-200 group text-left"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 group-hover:bg-primary/30 shrink-0 transition-colors">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                        {label}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{size} • PDF</p>
                    </div>
                    <Download size={20} className="text-muted-foreground group-hover:text-accent group-hover:translate-y-0.5 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card/30 rounded-2xl p-6 md:p-8 border border-border">
              <h3 className="font-display text-xl font-semibold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full rounded-lg bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full rounded-lg bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-lg bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full rounded-lg bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                />
                
                {/* Quick Contact Options */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://wa.me/254746895169"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#25D366]/10 px-4 py-2 text-sm font-medium text-[#25D366] hover:bg-[#25D366]/20 transition-all duration-200 border border-[#25D366]/20"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                  <a
                    href="https://t.me/Gee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#0088cc]/10 px-4 py-2 text-sm font-medium text-[#0088cc] hover:bg-[#0088cc]/20 transition-all duration-200 border border-[#0088cc]/20"
                  >
                    <Send size={16} />
                    Telegram
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:shadow-[var(--glow-primary)] mt-4"
                >
                  {submitted ? (
                    <>
                      <span>Message Sent!</span>
                      <Send size={16} className="animate-pulse" />
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Additional Info - Quick Response */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12 pt-8 border-t border-border"
        >
          <p className="text-muted-foreground">
            📱 Quick response on WhatsApp and Telegram • 📧 Email replies within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;