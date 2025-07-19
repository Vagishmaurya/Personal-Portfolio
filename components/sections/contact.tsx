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
          >
            <Card className="glass glass-hover glow-orange">
              <CardHeader>
                <CardTitle className="text-white">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent>
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
            className="space-y-6"
          >
            <div>
              <motion.h3
                className="text-2xl font-semibold mb-4 text-white"
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
              >
                Contact Information
              </motion.h3>
              <motion.p
                className="text-gray-300 mb-6 leading-relaxed"
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Feel free to reach out through any of these channels. I typically respond within 24 hours and am always
                excited to discuss new opportunities.
              </motion.p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <Card className="glass glass-hover">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: index * 0.5,
                          }}
                        >
                          <info.icon className={`h-5 w-5 ${info.color}`} />
                        </motion.div>
                        <div>
                          <p className="font-medium text-white">{info.label}</p>
                          {info.href !== "#" ? (
                            <a
                              href={info.href}
                              className="text-gray-300 hover:text-orange-400 transition-colors"
                              data-interactive
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-300">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
