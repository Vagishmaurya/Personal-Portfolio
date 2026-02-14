"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react"
import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="section-padding section-dark">
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
            About Me
          </motion.h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Passionate Software Development Engineer with expertise in building scalable web applications and AI-powered
            solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="text-lg mb-6 leading-relaxed text-gray-300"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
            >
              I'm a dedicated Software Development Engineer currently working at{" "}
              <motion.span
                className="text-orange-500 font-semibold"
                whileHover={{ scale: 1.05 }}
                animate={{
                  color: ["#ff4500", "#ff6b35", "#ff4500"],
                }}
                transition={{
                  color: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                Calance Software Pvt. Ltd.
              </motion.span>{" "}
              With a strong foundation in computer science and hands-on experience in full-stack development, I
              specialize in creating innovative solutions using modern technologies.
            </motion.p>
            <motion.p
              className="text-lg mb-6 leading-relaxed text-gray-300"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              My expertise spans across frontend frameworks like React.js, Next.js 16, and Angular 17, as well as backend
              technologies including Node.js, Go (Gin), and Spring Boot. I'm passionate about building user-centric applications
              that solve real-world problems and have successfully reduced bundle size by{" "}
              <motion.span
                className="text-orange-400 font-semibold"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                45%
              </motion.span>{" "}
              and latency by{" "}
              <motion.span
                className="text-orange-400 font-semibold"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
              >
                40%
              </motion.span>
              , while delivering{" "}
              <motion.span
                className="text-orange-400 font-semibold"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              >
                150+ production hotfixes
              </motion.span>
              .
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="glass glass-hover glow-orange">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <GraduationCap className="h-6 w-6 text-orange-500 mr-3" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>
                <div className="space-y-3">
                  <motion.p
                    className="font-medium text-gray-200"
                    whileInView={{ x: [20, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    Bachelor of Technology
                  </motion.p>
                  <motion.p
                    className="text-gray-400"
                    whileInView={{ x: [20, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Computer Science and Information Technology
                  </motion.p>
                  <motion.div
                    className="flex items-center text-sm text-gray-400"
                    whileInView={{ x: [20, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Dr. A.P.J. Abdul Kalam Technical University (AKTU)</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center text-sm text-gray-400"
                    whileInView={{ x: [20, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>2020 - 2024</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center text-sm"
                    whileInView={{ x: [20, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Award className="h-4 w-4 mr-1 text-orange-400" />
                    <span className="text-orange-400 font-medium">CGPA: 8.01/10</span>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
