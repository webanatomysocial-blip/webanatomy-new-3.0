import Link from "next/link";
import { PiSparkleFill } from "react-icons/pi";
import WhiteButton from "@/components/WhiteButton";
import "@/css/careers-thank-you.css";

export const metadata = {
  title: "Application Received | Webanatomy",
};

const NEXT_STEPS = [
  { step: "01", text: "Our team reviews your profile and resume." },
  { step: "02", text: "Shortlisted candidates get a call to schedule an interview." },
  { step: "03", text: "We get back to you either way, usually within a week." },
];

export default function CareersThankYou() {
  return (
    <main className="careers-ty">
      <div className="careers-ty__badge">
        <PiSparkleFill size={14} color="#fff" />
        Application Submitted
      </div>

      <div className="careers-ty__check-ring">
        <span className="careers-ty__check">✔</span>
      </div>

      <h1 className="careers-ty__heading">You're on our radar.</h1>
      <p className="careers-ty__text">
        Thanks for applying to Web Anatomy — our team will review your application and get back to you soon.
      </p>

      <div className="careers-ty__actions">
        <WhiteButton text="Back to Careers" href="/careers" />
        <Link href="/" className="careers-ty__home-link">Back to Home</Link>
      </div>

      <div className="careers-ty__steps">
        {NEXT_STEPS.map((s) => (
          <div key={s.step} className="careers-ty__step">
            <span className="careers-ty__step-num">{s.step}</span>
            <p className="careers-ty__step-text">{s.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
