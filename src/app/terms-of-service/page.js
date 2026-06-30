import { PiSparkleFill } from "react-icons/pi";
import "@/css/privacy-policy.css";

export const metadata = {
  title: "Terms of Service | Webanatomy",
  description: "Read the Terms of Service for Webanatomy — your agreement when using our website and services.",
};

function SectionLabel({ text }) {
  return (
    <div className="privacy-section-label">
      <span className="privacy-section-line" />
      <PiSparkleFill size={12} color="#FFDD00" className="pp-star-spin" />
      <span className="privacy-section-label-text">{text}</span>
    </div>
  );
}

export default function TermsOfServicePage() {
  return (
    <div className="policy-container">
      <div className="privacy-heading">
        <span className="privacy-heading-line" style={{ backgroundColor: "#FFDD00" }} />
        <div className="privacy-heading-label">
          <PiSparkleFill size={25} color="#FFDD00" className="pp-star-spin" />
          <p className="paragraph-text-white">Terms of Service</p>
        </div>
        <span className="privacy-heading-line" style={{ backgroundColor: "#FFDD00" }} />
      </div>

      <h1 className="big-head-text-white" style={{ marginBottom: "50px" }}>
        Our Terms &amp; Conditions
      </h1>

      <div className="privacy-content">
        <div className="privacy-intro">
          <p className="paragraph-text-white">
            Please read these Terms of Service carefully before using the Webanatomy
            website or engaging our services. By accessing or using our services,
            you agree to be bound by these terms. If you do not agree to these
            terms, please do not use our services.
          </p>
        </div>

        <div className="privacy-section">
          <h2 className="head-text-white">Acceptance of Terms</h2>
          <div className="privacy-body">
            <p className="paragraph-text-white">
              By accessing and using this website and our services, you accept and
              agree to be bound by these Terms of Service and our Privacy Policy.
              These terms apply to all visitors, users, and clients of Webanatomy.
              We reserve the right to update or modify these terms at any time
              without prior notice. Your continued use of our services following
              any changes constitutes acceptance of the revised terms.
            </p>
          </div>
        </div>

        <div className="privacy-section">
          <h2 className="head-text-white">Services</h2>
          <div className="privacy-body">
            <p className="paragraph-text-white">
              Webanatomy provides web design, web development, branding, and
              digital strategy services. The scope, timeline, deliverables, and
              pricing for any project are defined in a separate agreement or
              proposal provided to the client. We reserve the right to refuse
              service to anyone for any reason at any time.
            </p>
            <p className="paragraph-text-white">
              We make every effort to ensure the accuracy and quality of our work.
              However, we cannot guarantee that our services will meet every
              specific requirement or that the results will be error-free.
            </p>
          </div>
        </div>

        <div className="privacy-section">
          <h2 className="head-text-white">Intellectual Property</h2>
          <div className="privacy-body">
            <p className="paragraph-text-white">
              All content on this website, including text, graphics, logos, images,
              and software, is the property of Webanatomy and is protected by
              applicable intellectual property laws. You may not reproduce,
              distribute, or create derivative works from any content without
              our prior written consent.
            </p>
            <p className="paragraph-text-white">
              Upon full payment for a project, the client receives ownership of
              the final deliverables as agreed in the project contract. Webanatomy
              retains the right to display the work in its portfolio unless
              otherwise agreed in writing.
            </p>
          </div>
        </div>

        <div className="privacy-section">
          <h2 className="head-text-white">Client Responsibilities</h2>
          <div className="privacy-body">
            <p className="paragraph-text-white">
              Clients are responsible for providing accurate and timely content,
              feedback, and approvals required for project completion. Delays
              caused by the client may result in revised timelines and additional
              charges. Clients must ensure that any materials provided to
              Webanatomy do not infringe on third-party intellectual property rights.
            </p>
          </div>
        </div>

        <div className="privacy-section">
          <h2 className="head-text-white">Payment Terms</h2>
          <div className="privacy-body">
            <p className="paragraph-text-white">
              Payment terms are outlined in the individual project agreement or
              invoice. Unless otherwise agreed, projects require a deposit before
              work begins. Failure to make timely payments may result in work
              being paused or the agreement being terminated. All fees are
              non-refundable unless stated otherwise in writing.
            </p>
          </div>
        </div>

        <div className="privacy-section">
          <h2 className="head-text-white">Limitation of Liability</h2>
          <div className="privacy-body">
            <p className="paragraph-text-white">
              Webanatomy shall not be liable for any indirect, incidental, special,
              or consequential damages arising out of or in connection with our
              services, even if advised of the possibility of such damages. Our
              total liability for any claim arising from our services shall not
              exceed the total amount paid by the client for the relevant project.
            </p>
          </div>
        </div>

        <div className="privacy-section">
          <h2 className="head-text-white">Third-Party Links</h2>
          <div className="privacy-body">
            <p className="paragraph-text-white">
              Our website may contain links to third-party websites. These links
              are provided for convenience only. Webanatomy has no control over
              the content of those sites and accepts no responsibility for them
              or for any loss or damage that may arise from your use of them.
            </p>
          </div>
        </div>

        <div className="privacy-section">
          <h2 className="head-text-white">Governing Law</h2>
          <div className="privacy-body">
            <p className="paragraph-text-white">
              These Terms of Service are governed by and construed in accordance
              with the laws of India. Any disputes arising under these terms shall
              be subject to the exclusive jurisdiction of the courts in Hyderabad,
              Telangana.
            </p>
          </div>
        </div>

        <div className="privacy-section">
          <h2 className="head-text-white">Contact Us</h2>
          <div className="privacy-body">
            <p className="paragraph-text-white">
              If you have any questions about these Terms of Service, please
              contact us at{" "}
              <a
                href="mailto:reddydheeraj2109@gmail.com"
                style={{ color: "rgba(255,255,255,0.6)", textDecoration: "underline" }}
              >
                reddydheeraj2109@gmail.com
              </a>{" "}
              or write to us at: Web Anatomy, Vision Arcade, Jai Hind Gandhi Rd,
              Cyber Hills Colony, VIP Hills, Silicon Valley, Madhapur, Hyderabad,
              Telangana 500081.
            </p>
          </div>
        </div>

        <div className="privacy-footer-note">
          <p className="sub-paragraph-text-white" style={{ color: "rgba(255, 255, 255, 1)" }}>
            Terms of Service Effective Date: June 1, 2023
          </p>
        </div>
      </div>
    </div>
  );
}
