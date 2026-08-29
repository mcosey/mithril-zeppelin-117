import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact | Mithril Zeppelin 117 Publishing",
  description: "Contact Mithril Zeppelin 117 Publishing.",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <SiteHeader activeHref="/contact" />
      <section className="contact-layout" aria-labelledby="contact-title">
        <div className="contact-introduction">
          <p className="contact-eyebrow">Send word</p>
          <h1 id="contact-title">Contact</h1>
          <div className="contact-rule" aria-hidden="true"><span /></div>
          <p>
            For publishing inquiries, professional correspondence, or questions about
            Mithril Zeppelin 117 Publishing, leave a message here.
          </p>
        </div>

        <div className="contact-parchment">
          <form className="contact-form">
            <div className="contact-field-row">
              <label>
                <span>Name</span>
                <input type="text" name="name" autoComplete="name" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" autoComplete="email" />
              </label>
            </div>
            <label>
              <span>Subject</span>
              <input type="text" name="subject" />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" rows={7} />
            </label>
            <div className="contact-form-footer">
              <p>Message delivery will be connected before launch.</p>
              <button type="button" disabled>Send message</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
