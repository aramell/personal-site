import React from "react"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"

const Footer = () => (
  <div class="p-2 flex justify-center h-12 bg-green-400">
    <a
      href="https://www.instagram.com/ramell86/"
      target="_blank"
      rel="noreferrer"
    >
      <InstagramIcon />
    </a>
    <a
      href="https://www.linkedin.com/in/andrewramell/"
      target="_blank"
      rel="noreferrer"
      class="pl-2"
    >
      <LinkedInIcon />
    </a>
    <a
      href="mailto:andrew.ramell@gmail.com"
      target="_blank"
      rel="noreferrer"
      class="pl-2"
    >
      <EmailIcon />
    </a>
  </div>
)

export default Footer
