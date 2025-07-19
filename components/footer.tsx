"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Vagish Maurya
            </p>
          </div>

          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/vagishmaurya" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/vagishmaurya" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:vagishmaurya@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vagish Maurya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
