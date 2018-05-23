import React from 'react';

const Impressum = () => (
  <div>
    <h4>Contact address</h4>
    PROJECT T LIMITED<br />
    Suite 23 Portland House,<br />
    Glacis Road,<br />
    Gibraltar<br />
  </div>
);

const PrivacyPolicy = () => {
  const serviceProviderName = '"D.I.N. Services GmbH"';
  return (
    <div style={{ marginTop: '10px' }}>
      <h4>Privacy Policy</h4>
      This site is run by Project T Ltd.<br />
      This privacy policy will explain how we use any personal information we
      collect when you use this website.<br />
      One of our main services providers for running the website and providing
      related services as specified below is {serviceProviderName}. All personal
      data as specified below may be forwarded to {serviceProviderName} for
      providing the services as specified below.
      <h5 style={{ marginTop: '10px' }}>E-mail newsletter</h5>
      <p>
        We use MailChimp as our marketing automation platform. When signing up
        to the newsletter the information you provide there will be transferred
        to MailChimp for processing in accordance with their{' '}
        <a href="https://mailchimp.com/legal/privacy/" target="_blank">
          Privacy Policy
        </a>{' '}
        and{' '}
        <a href="https://mailchimp.com/legal/terms/" target="_blank">
          Terms
        </a>.
      </p>
      <h5 style={{ marginTop: '10px' }}>Job applications</h5>
      The website provides a link to a job application portal of{' '}
      {serviceProviderName}
      . Project T Ltd. does not collect any personal data in connection to that.
      <p />
      <h5>Hosting</h5>
      This website is hosted on Github Pages. Therefore the data that will be
      created by normal browsing of a website such as which pages on this
      website were accessed by your IP address are accessible to Github and will
      be processed in accordance to their{' '}
      <a
        href="https://help.github.com/articles/github-privacy-statement/"
        target="_blank"
      >
        Privacy Policy
      </a>.
    </div>
  );
};
const PrivacyPolicyPage = () => (
  <div>
    <Impressum />
    <PrivacyPolicy />
  </div>
);

export default PrivacyPolicyPage;
