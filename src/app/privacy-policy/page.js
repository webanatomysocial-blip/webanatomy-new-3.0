import { PiSparkleFill } from "react-icons/pi";
import "@/css/privacy-policy.css";

function SectionLabel({ text }) {
  return (
    <div className="privacy-section-label">
      <span className="privacy-section-line" />
      <PiSparkleFill size={12} color="#FFDD00" className="pp-star-spin" />
      <span className="privacy-section-label-text">{text}</span>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="policy-container">
      {/* Top decorative heading tag */}
      <div className="privacy-heading">
        <span className="privacy-heading-line" style={{backgroundColor:"#FFDD00"}}/>
        <div className="privacy-heading-label">
          <PiSparkleFill size={25} color="#FFDD00" className="pp-star-spin" />
          <p className="paragraph-text-white">Privacy Policy</p>
        </div>
        <span className="privacy-heading-line" style={{backgroundColor:"#FFDD00"}}/>
                      
      </div>

      {/* Main heading */}
      <h1 className="big-head-text-white" style={{ marginBottom: "50px" }}>
        What You Should Know
      </h1>

      <div className="privacy-content">
        {/* Intro */}
        <div className="privacy-intro">
          <p className="paragraph-text-white">
            &ldquo;The truth is, of course, that there is no journey. We are
            arriving and departing all at the same time.&rdquo; The Web Anatomy
            is committed to safeguarding the personally identifiable information
            that you share with us online. Generally, you can browse our
            website,{" "}
            <a
              href="https://www.backup.webanatomy.in"
              style={{
                color: "rgba(255,255,255,0.6)",
              }}
            >
             web anatomy
            </a>{" "}
            (this &ldquo;Site&rdquo;), without sharing any personal information.
            However, should you wish to retain access to our proprietary and
            confidential resources (the &ldquo;Resources&rdquo;), or subscribe
            to our newsletter, or submit a form, you will be required to
            voluntarily submit personal information. We may also collect
            information on how you use this Site, such as resources browsed,
            searched, and downloaded; the frequency and duration of visits, and
            your source Internet Protocol (&ldquo;IP&rdquo;) address. Please
            note, this policy does not apply to information we may collect
            offline. Please read the following statement to understand how we
            collect, use, maintain, and disclose your personal information. Your
            use of this platform indicates consent to the collection, use, and
            disclosure of your information as described in this Privacy Policy.
          </p>
        </div>

        {/* What information do we collect */}
        <div className="privacy-section">

          <h2 className="head-text-white">What information do we collect</h2>
          <div className="privacy-body">
            <h3 className="sub-head-text-white">
              Personally identifiable information
            </h3>
            <p className="paragraph-text-white">
              This is information that may be used to identify you as an
              individual, such as your email address, name, home or work
              address, or telephone number. We may collect this information in a
              number of voluntary ways on this Site, including, but not limited
              to, the online request a quote form, the newsletter form, as well
              as the comments form and email messages to any
              backup.webanatomy.in email address. This information is used to
              respond to your requests and questions. We may also use this
              information to communicate with you about other relevant topics
              that may be of interest.
            </p>
          </div>
        </div>

        {/* Cookies */}
        <div className="privacy-section">

          <h2 className="head-text-white">Cookies</h2>
          <div className="privacy-body">
            <p className="paragraph-text-white">
              A cookie is a data file that certain websites write to your
              computer&rsquo;s hard drive when you visit such sites. A cookie
              file can contain information, such as a user identification code,
              that the site uses to track the pages you have visited, but the
              only personal information a cookie can contain is information you
              supply yourself.
            </p>
            <p className="paragraph-text-white">
              A cookie can&rsquo;t read data off your hard disk or read cookie
              files created by other sites. We may collect information from your
              web sessions by using cookies, to determine, for example, user
              traffic patterns, and the effectiveness of our navigational
              structure.
            </p>
            <p className="paragraph-text-white">
              Most website browsers automatically accept cookies, but you can
              usually change your browser settings to display a warning before
              accepting a cookie, or to refuse all cookies. You don&rsquo;t need
              to have cookies turned on to use/navigate through many parts of
              this Site. However, you may have to accept the receipt of cookies
              to access some Resources on this Site.
            </p>
            <p className="paragraph-text-white">
              Please note that if you choose not to accept cookies, or to delete
              the use of cookies, you may affect your website experience and
              render yourself unable to use all of the available Site features.
            </p>
          </div>
        </div>

        {/* Google Analytics */}
        <div className="privacy-section">
        
          <h2 className="head-text-white">Google Analytics</h2>
          <div className="privacy-body">
            <p className="paragraph-text-white">
              We may use third-party web analytics services to analyze how users
              use the Site. This can include Google Analytics, which uses
              technologies such as cookies to gather user information. The
              information collected by the cookies about your use of the Site
              can include your IP address, the URL visited, or page view date
              and time, and will be transmitted and stored by Google on servers
              in the United States.
            </p>
            <p className="paragraph-text-white">
              Google may compile reports on the Site activity for other website
              operators who are providing services related to website activity
              and internet usage. Google may also transfer this information to
              third parties when required by law, or when such third parties
              process information on behalf of Google.
            </p>
            <p className="paragraph-text-white">
              For more information about Google&rsquo;s privacy policy in
              respect of Google Analytics, please refer to:{" "}
              <a
                href="http://www.google.com/analytics/learn/privacy.html"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "underline",
                }}
              >
                http://www.google.com/analytics/learn/privacy.html
              </a>
            </p>
            <p className="paragraph-text-white">
              You may opt-out of Google Analytics by visiting{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout?hl+en=GB"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "underline",
                }}
              >
                https://tools.google.com/dlpage/gaoptout?hl+en=GB
              </a>
              .
            </p>
          </div>
        </div>

        {/* Children */}
        <div className="privacy-section">
        
          <h2 className="head-text-white">Children</h2>
          <div className="privacy-body">
            <p className="paragraph-text-white">
              We respect the privacy of children. This Site is not intended for
              children and we do not knowingly solicit personal data from or
              communicate with children under the age of 13. As well, the Site
              is not intended for incapacitated persons and we do not knowingly
              solicit personal data from or communicate with incapacitated
              persons.
            </p>
            <p className="paragraph-text-white">
              Further, this Site is created for use by adults. By using the
              Site, you are consenting that you are at least 18 years old or
              using the Site with the permission of a parent or guardian.
            </p>
            <p className="paragraph-text-white">
              If you become aware that any child under your care, or person
              unable to prove valid consent, has provided us with information,
              please contact us by email at{" "}
              <a
                href="mailto:hello@backup.webanatomy.in"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "underline",
                }}
              >
                hello@backup.webanatomy.in
              </a>
              . You can also write to us at the address listed at the end of
              this policy.
            </p>
          </div>
        </div>

        {/* How we use your information */}
        <div className="privacy-section">
       
          <h2 className="head-text-white">How we use your information</h2>
          <div className="privacy-body">
            <p className="paragraph-text-white">
              If you choose to provide The Web Anatomy with your personal
              information, where appropriate, The Web Anatomy or subsidiary,
              representative, sales, or affiliated sales channel representative,
              may use this information to contact you, in order to further our
              relationship with you.
            </p>
          </div>
          <ul className="privacy-list">
            {[
              "We use the personal information collected during the use of this Site to personalize web content where applicable.",
              "We may also use your information to send you direct marketing information or contact you for market research.",
              "We may contact you when changes are made to our secure content site.",
              "We may periodically send emails for sales, marketing, and administrative purposes.",
              "We will periodically send you an email when you are subscribed to our customer notification list for the latest updates of our corporate and product news, and/or any other subscription list(s).",
              "We may disclose information about our users when we believe, in good faith, that the disclosure is required by law.",
              "We may process, evaluate, and respond to your requests or applications directly.",
              "We comply with all applicable legal requirements and industry standards within our policies.",
            ].map((item, i) => (
              <li key={i}>
                <span className="privacy-list-dot" />
                <p className="paragraph-text-white" style={{ margin: 0 }}>
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Sharing your information */}
        <div className="privacy-section">
   
          <h2 className="head-text-white">Sharing your information</h2>
          <div className="privacy-body">
            <p className="paragraph-text-white">
              In cases where we need to disclose web usage reports to non-Mo
              Solutions LLP. subsidiaries or affiliates, your personal
              information will remain anonymous. We do not disclose, sell,
              exchange nor trade your personally identifiable information to
              commercial mailing lists.
            </p>
          </div>
        </div>

        {/* Links to other websites */}
        <div className="privacy-section">
       
          <h2 className="head-text-white">Links to other websites</h2>
          <div className="privacy-body">
            <p className="paragraph-text-white">
              The Site may provide links to other websites for your convenience
              and information. These websites may operate independently from us
              and users should note that linked sites may have their own privacy
              notices or policies. We strongly encourage our users to review any
              linked website policies in order to understand how they may
              collect, use, and disclose your personal information.
            </p>
            <p className="paragraph-text-white">
              This Privacy Policy applies solely to information collected by
              this Site. We do not take responsibility for the content of linked
              websites, any use of their sites, or the privacy practices or
              policies of these sites.
            </p>
          </div>
        </div>

        {/* Maintaining your information */}
        <div className="privacy-section">
        
          <h2 className="head-text-white">Maintaining your information</h2>
          <div className="privacy-body">
            <p className="paragraph-text-white">
              We take information security issues seriously. Consequently, any
              personally identifiable information is stored and protected on
              servers with adequate security measures. We will cease all
              communication and use of personally identifiable information upon
              your request. Your privileges for access to the Resources on this
              Site may then be suspended.
            </p>
            <p className="paragraph-text-white">
              We only keep personal information as long as it is necessary to
              fulfill the purposes for which it was collected. We also keep any
              information that is required by law.
            </p>
          </div>
        </div>

        {/* Security */}
        <div className="privacy-section">
         
          <h2 className="head-text-white">Security</h2>
          <div className="privacy-body">
            <p className="paragraph-text-white">
              We take the security of information seriously. We are committed to
              using reasonable measured to protect any personal information we
              may collect. However, due to the oddity and open nature of the
              internet, we cannot fully guarantee that the information stored on
              this site, or direct communications between you and us, is
              absolutely secure.
            </p>
            <p className="paragraph-text-white">
              Although we take steps to protect your data, by using the Site you
              consent that the transmission of data is at your own risk. By
              using the Site, you agree to assume all risk in connection with
              data sent, collected, or stored by us.
            </p>
          </div>
        </div>

        {/* Access, updates, and your security choices */}
        <div className="privacy-section">
         
          <h2 className="head-text-white">
            Access, updates, and your security choices
          </h2>
          <div className="privacy-body">
            <p className="paragraph-text-white">
              At any time, you can ask us to halt any marketing communications
              by email by clicking on the Unsubscribe link within the marketing
              email.
            </p>
            <p className="paragraph-text-white">
              If you have provided personal information on the Site, you may
              request, at any time, that it be updated, modified, or deleted.
            </p>
            <p className="paragraph-text-white">
              You may complete either of these actions by sending a request to
              the following email:{" "}
              <a
                href="mailto:hello@backup.webanatomy.in"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "underline",
                }}
              >
                hello@backup.webanatomy.in
              </a>
            </p>
            <p className="paragraph-text-white">
              You also have the ability to adjust your advertising preferences
              on social media websites by adjusting your Settings on the
              individual platform. For example, you can adjust the type of
              Instagram or Facebook ads you receive through your Facebook
              Settings or the type of Google ads you receive through your Google
              Settings.
            </p>
          </div>
        </div>

        {/* Consent */}
        <div className="privacy-section">
       
          <h2 className="head-text-white">Consent</h2>
          <div className="privacy-body">
            <p className="paragraph-text-white">
              By using this Site, you consent to the processing of your personal
              information as outlined in this Privacy Policy.
            </p>
          </div>
        </div>

        {/* Contact us */}
        <div className="privacy-section">
        
          <h2 className="head-text-white">Contact us</h2>
          <div className="privacy-body">
            <p className="paragraph-text-white">
              If you have questions, concerns, requests, or amendments to make
              in regards to this Privacy Policy, please email us at:{" "}
              <a
                href="mailto:hello@backup.webanatomy.in"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "underline",
                }}
              >
                hello@backup.webanatomy.in
              </a>
            </p>
            <p className="paragraph-text-white">
              Or, write to us at: Web Anatomy, Vision Arcade, Jai Hind Gandhi
              Rd, Cyber Hills Colony, VIP Hills, Silicon Valley, Madhapur,
              Hyderabad, Telangana 500081.
            </p>
            <p className="paragraph-text-white">
              You may also contact us at the above addresses at any time to
              learn more or request a quote.
            </p>
          </div>
        </div>

        {/* Changes to this statement */}
        <div className="privacy-section">
       
          <h2 className="head-text-white">Changes to this statement</h2>
          <div className="privacy-body">
            <p className="paragraph-text-white">
              If there are changes or additions to the terms of this Privacy
              Policy, we will post those changes here prior to implementing the
              change, as such, The Web Anatomy encourages you to periodically
              review this Privacy Policy so you are informed on how your
              information is being protected and used.
            </p>
            <p className="paragraph-text-white">
              If there are material changes to this Privacy Policy, The Web
              Anatomy will notify the users of such changes using the personally
              identifiable information collected on this Site.
            </p>
          </div>
        </div>

        {/* Footer note */}
        <div className="privacy-footer-note">
          <p
            className="sub-paragraph-text-white"
            style={{ color: "rgba(255, 255, 255, 1)" }}
          >
            Privacy Notice Effective Date: June 1, 2023
          </p>
          <p
            className="sub-paragraph-text-white"
            style={{ color: "rgba(255, 255, 255, 1)", fontStyle: "italic" }}
          >
            &ldquo;Time might change me, but I can&rsquo;t trace time&rdquo;
            &ndash; David Bowie
          </p>
        </div>
      </div>
    </div>
  );
}
