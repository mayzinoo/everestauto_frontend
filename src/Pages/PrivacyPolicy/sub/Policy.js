//libraries
import React, { Fragment } from "react";
//components
import { Container } from "react-bootstrap";

//css
import "../components/styles/policy.css";

function Policy(props) {
  return (
    <Fragment>
      <Container className="main-container">
        <h1 className="title">Privacy Policy</h1>
        <h2 className="sub-title">Introduction</h2>
        <p>
          Everest Auto Pte. Ltd. (“Everest Auto”, “we” or “us”) takes the
          privacy of your information seriously. This Privacy Policy applies to
          the Everest Auto.com website (the “Website”) and governs data
          collection, processing and usage in compliance with the Personal Data
          Protection Act 2012 (No. 26 of 2012) of Singapore (“PDPA”). By using
          the Website, you consent to the data practices described in this
          statement. Capitalized terms that are not defined in this Privacy
          Policy have the meaning given to them in our Terms of Service.
        </p>
        <h2 className="sub-title">
          Information Collected from All Visitors to our Website
        </h2>
        <p>
          We will obtain personal data about you when you visit us. When you
          visit us, we may monitor the use of this Website through the use of
          cookies and similar tracking devices. For example, we may monitor the
          number of times you visit our Website or which pages you go to. This
          information helps us to build a profile of our users. Some of this
          data will be aggregated or statistical, which means that we will not
          be able to identify you individually. This Privacy Policy applies to
          all visitors to our Website.
        </p>
        <h2 className="sub-title">
          Additional Personal Information that May be Collected
        </h2>
        <p>Everest Auto may collect and process:</p>
        <ol className="list-css">
          <li>
            Personally identifiable information, such as:
            <ol className="list-css">
              <li>Your email address and name, when you contact us;</li>
              <li>
                Details contained in the relevant document that you key in when
                you use our Services. These details may include your name,
                handphone number, email, the purpose of your query, and details
                about your will; (“Personal Information”)
              </li>
            </ol>
          </li>
          <li>
            Information about your computer hardware and software when you use
            our Website. The information can include: your IP address, browser
            type, domain names, access times and referring website addresses.
            This information is used by Everest Auto for the operation of the
            Services, to maintain quality of the Services, and to provide
            general statistics regarding use of the Everest Auto.com Website.
          </li>
        </ol>
        <h2 className="sub-title">Use of Personal Information</h2>
        <p>Everest Auto uses the collected information:</p>
        <ol>
          <li>To operate the Website and deliver the Services;</li>
          <li>
            To process, and where necessary, respond to your application,
            enquiry or request;
          </li>
          <li>To gather customer feedback;</li>
          <li>
            To inform or update you of other products or services available from
            Everest Auto and its affiliates, where you have consented to be
            contacted for such purposes;
          </li>
          <li>
            To monitor, improve and administer the Website and Services, and to
            provide general statistics regarding user of the Website;
          </li>
          <li>To update you on changes to the Website and Services.</li>
        </ol>
        <h2 className="sub-title">Non-disclosure</h2>
        <p>
          Everest Auto does not sell, rent, lease, or release your Personal
          Information to third parties. Everest Auto may, from time to time,
          contact you on behalf of external business partners about a particular
          offering that may be of interest to you. In those cases, your unique
          Personal Information is not transferred to the third party without
          your explicit consent. In addition, Everest Auto may share data with
          trusted partners to help us perform statistical analysis, send you
          email or provide customer support. All such third parties are
          prohibited from using your personal information except to provide
          these services to Everest Auto, and they are required to maintain the
          confidentiality of your Personal Information.
        </p>
        <h2 className="sub-title">Disclosure of Personal Information</h2>
        <p>
          Everest Auto will disclose or share your Personal Information, without
          notice, only if required to do so by law or in the good faith belief
          that any such action is necessary to: (a) comply with any legal
          requirements or comply with legal process served on Everest Auto or
          the Website; (b) protect and defend the rights or property of Everest
          Auto; and (c) act under exigent circumstances to protect the personal
          safety of users of Everest Auto.com, or the general public. We may
          disclose your personal information to third parties: (a) in the event
          that we sell or buy any business or assets, in which case we may
          disclose your personal data to the prospective seller or buyer of such
          business or assets; and (b) if Everest Auto.com or substantially all
          of its assets are acquired by a third party, in which case personal
          data held by it about its customers will be one of the transferred
          assets.
        </p>
        <h2 className="sub-title">Use Of Cookies</h2>
        <p>
          The Website uses “cookies” to help you personalize your online
          experience. A cookie is a text file that is placed on your hard drive
          by a web page server. Cookies cannot be used to run programs or
          deliver viruses to your computer. Cookies are uniquely assigned to
          you, and can only be read by a web server in the domain that issued
          the cookie to you. Cookies on the Website may be used to ensure a
          smooth user experience, perform analytics, and for showing relevant
          advertisements. Please note that third parties (such as analytics
          software) may also use cookies, over which we have no control. These
          cookies are likely to be analytical/performance cookies or targeting
          cookies. The Website uses Google Analytics. Please refer to
          http://www.google.com/policies/privacy/partners to find out more about
          how Google uses data when you use our website and how to control the
          information sent to Google. Most Web browsers automatically accept
          cookies, but you can usually modify your browser setting to decline
          cookies if you prefer. If you choose to decline cookies, you may not
          be able to access all or parts of our Website or to fully experience
          the interactive features of the Everest Auto services or websites you
          visit.
        </p>
        <h2 className="sub-title">Security Of Your Personal Information</h2>
        <p>
          We strive to maintain the safety of your Personal Information. Any
          payment transactions will be encrypted using SSL technology.
          Unfortunately, no internet-based service is completely secure.
          Although we will do our best to protect your personal data, we cannot
          guarantee the security of your data transmitted to our site; any
          transmission is at your own risk. Once we have received your
          information, we will use strict procedures and security features to
          try to prevent unauthorised access.
        </p>
      </Container>
    </Fragment>
  );
}

export default Policy;
