"use client"

import Image from "next/image"
import { useState } from "react"
import {
  ArrowDownToLine,
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
} from "lucide-react"

const email = "kiransaipessse@gmail.com"

function downloadContact() {
  const contact = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Shashi Kiran",
    "N:Kiran;Shashi;;;",
    "ORG:Independent Consultant",
    "TITLE:Independent Consultant",
    `EMAIL;TYPE=INTERNET,WORK:${email}`,
    "TEL;TYPE=WORK,VOICE:+14155550148",
    "URL:https://mayachen.studio",
    "ADR;TYPE=WORK:;;;Bangalore;Karnataka;;India",
    "END:VCARD",
  ].join("\r\n")
  const url = URL.createObjectURL(new Blob([contact], { type: "text/vcard" }))
  const link = document.createElement("a")
  link.href = url
  link.download = "shashi-kiran.vcf"
  document.body.append(link)
  link.click()
  link.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}

export function CallingCard() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Shashi Kiran, home">
          <span className="wordmark-mark" aria-hidden="true">SK</span>
          <span className="wordmark-copy">
            <strong>Shashi Kiran</strong>
            <span>Independent Consultant</span>
          </span>
        </a>
        <nav className="header-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <span className="availability"><span aria-hidden="true" /> Open to select projects</span>
        </nav>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Bangalore, India · working everywhere</p>
          <h1 id="hero-title">Making good ideas <em>impossible to ignore.</em></h1>
          <p className="hero-description">
            I build thoughtful brands and digital experiences for people doing meaningful things.
            Clear strategy, a little curiosity, and details that feel just right.
          </p>
          <div className="hero-actions" id="contact">
            <a className="button button-primary" href={`mailto:${email}`}>
              <Mail aria-hidden="true" /> Say hello <ArrowUpRight aria-hidden="true" />
            </a>
            <button className="button button-secondary" type="button" onClick={downloadContact}>
              <ArrowDownToLine aria-hidden="true" /> Save contact
            </button>
          </div>
          <div className="hero-footnote"><span className="footnote-rule" /> Good work begins with a conversation.</div>
        </div>

        <aside className="profile-card" aria-label="Shashi Kiran's digital calling card">
          <div className="card-image-wrap">
            <Image
              className="card-image"
              src="/calling-card-studio.png"
              alt="Sunlit studio desk with an open notebook and muted color swatches"
              fill
              priority
              sizes="(max-width: 760px) 88vw, 420px"
            />
            <span className="card-edition">A little about me <span>01 / 01</span></span>
            <span className="card-photo-caption">Ideas with intention.</span>
          </div>
          <div className="card-info">
            <div className="card-title-row">
              <div>
                <p className="card-kicker">Your next creative partner</p>
                <h2>Shashi Kiran</h2>
                <p className="card-role">Independent Consultant</p>
              </div>
              <span className="card-monogram" aria-hidden="true">SK<span>.</span></span>
            </div>
            <div className="card-contact-row">
              <a className="email-link" href={`mailto:${email}`}>{email}</a>
              <button className="copy-button" type="button" onClick={copyEmail} aria-label={copied ? "Email copied" : "Copy email address"}>
                {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
              </button>
            </div>
            <p className="copy-feedback" aria-live="polite">{copied ? "Email copied to clipboard" : ""}</p>
          </div>
        </aside>
        <div className="hero-index" aria-hidden="true">INDEPENDENT BY DESIGN <span>—</span> EST. 2018</div>
      </section>

      <section className="about-strip" id="about" aria-label="What I do">
        <div className="about-intro">
          <span className="section-number">01 — A GOOD FIT FOR</span>
          <p>Small teams with<br />big-hearted ambition.</p>
        </div>
        <ul className="specialties">
          <li><span>01</span> Brand identity</li>
          <li><span>02</span> Digital experiences</li>
          <li><span>03</span> Creative direction</li>
        </ul>
        <div className="about-location"><MapPin aria-hidden="true" /><span>Based in Bangalore, India<br />Available worldwide</span></div>
      </section>

      <footer className="site-footer">
        <a className="footer-email" href={`mailto:${email}`}>Have a good one in mind? <span>Let&apos;s make it real.</span></a>
        <div className="footer-bottom">
          <span>© 2026 Shashi Kiran</span>
          <div className="social-links" aria-label="Social links">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><span aria-hidden="true">in</span></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><span aria-hidden="true">ig</span></a>
            <a href={`mailto:${email}`} aria-label="Email Shashi Kiran"><Mail aria-hidden="true" /></a>
          </div>
          <span className="footer-note">Made with intention, in Bangalore.</span>
        </div>
      </footer>
    </main>
  )
}
