import Link from "next/link";
import WhiteButton from "@/components/WhiteButton";
import "@/css/careers-thank-you.css";

export const metadata = {
  title: "Application Received | Webanatomy",
};

export default function CareersThankYou() {
  return (
    <main className="careers-ty">
      <span className="careers-ty__check">✔</span>
      <h1 className="head-text-white careers-ty__heading">Application Received</h1>
      <p className="careers-ty__text">
        Thanks for applying — our team will review your application and get back to you soon.
      </p>
      <div className="careers-ty__actions">
        <WhiteButton text="Back to Careers" href="/careers" />
        <Link href="/" className="careers-ty__home-link">Back to Home</Link>
      </div>
    </main>
  );
}
