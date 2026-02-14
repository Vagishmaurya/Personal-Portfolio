"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vagishmaurya@gmail.com",
      href: "mailto:vagishmaurya@gmail.com",
      color: "text-orange-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9161516309",
      href: "tel:+919161516309",
      color: "text-orange-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gurgaon, India",
      href: "#",
      color: "text-orange-600",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Vagishmaurya",
      color: "hover:text-orange-300",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vagish-maurya-018044259",
      color: "hover:text-orange-400",
    },
  ]

  return (
    <section id="contact" className="section-padding section-dark">
      <div className="container-professional relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-gradient-primary neon-text"
            animate={{
              textShadow: [
                "0 0 5px rgba(255, 69, 0, 0.5)",
                "0 0 20px rgba(255, 69, 0, 0.8)",
                "0 0 5px rgba(255, 69, 0, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            Get In Touch
          </motion.h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology. Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="h-full"
          >
            <Card className="glass glass-hover glow-orange h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-white">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-center">
                <div className="space-y-6">
                  <motion.p
                    className="text-gray-300 mb-6 leading-relaxed"
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.8 }}
                  >
                    Ready to bring your ideas to life? I'm currently open to new opportunities and exciting projects.
                    Whether you're looking for a dedicated developer or want to collaborate on something innovative, I'd
                    love to hear from you.
                  </motion.p>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button asChild size="lg" className="w-full btn-primary text-white font-medium" data-interactive>
                      <a href="mailto:vagishmaurya@gmail.com?subject=Let's Work Together&body=Hi Vagish,%0D%0A%0D%0AI'd like to discuss a potential opportunity with you.%0D%0A%0D%0ABest regards">
                        <Mail className="h-5 w-5 mr-2" />
                        Send Email
                      </a>
                    </Button>
                  </motion.div>

                  <div className="text-center">
                    <p className="text-gray-500 text-sm">or</p>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full btn-secondary text-gray-300 bg-transparent"
                      data-interactive
                    >
                      <a href="tel:+919161516309">
                        <Phone className="h-5 w-5 mr-2" />
                        Call Me
                      </a>
                    </Button>
                  </motion.div>

                  <div className="flex justify-center space-x-4 pt-4">
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          y: { duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 },
                        }}
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                          className={`${social.color} transition-colors duration-300 glow-orange`}
                          data-interactive
                        >
                          <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                            <social.icon className="h-5 w-5" />
                          </a>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <Card className="glass glass-hover glow-orange h-full overflow-hidden flex flex-col">
                <div className="relative h-[250px] w-full shrink-0 border-b border-orange-500/20">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754721912!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Location Map"
                        className="w-full h-full"
                    />
                     <div className="absolute inset-0 pointer-events-none shadow-inner"></div>
                </div>

                <CardContent className="p-6 flex-1 flex flex-col justify-center space-y-6">
                    <div className="mb-2">
                        <h3 className="text-2xl font-semibold text-white mb-2">Contact Information</h3>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            Feel free to reach out through any of these channels. I typically respond within 24 hours.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="flex items-center space-x-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-orange-500/30 group"
                            >
                                <div className={`p-2 rounded-full bg-black/40 group-hover:scale-110 transition-transform duration-300 ${info.color}`}>
                                    <info.icon className="h-5 w-5" />
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{info.label}</p>
                                    {info.href !== "#" ? (
                                        <a
                                            href={info.href}
                                            className="text-white hover:text-orange-400 transition-colors truncate block font-medium"
                                            data-interactive
                                        >
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="text-white font-medium truncate">{info.value}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
