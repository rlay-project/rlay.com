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
      <h5 style={{ marginTop: '10px' }}>"Know-Your-Customer" Processes</h5>
      <p>
        As part of our private Token Sales, we are by regulation obligated to
        collect "Know-Your-Customer" data on the contributing institutions.<br />
        <br />
        In order to comply with any current and potential future regulation on
        Token Sales in the jurisdiction of Gibraltar and beyond, we conduct a
        KYC-process to be able to determine which individual or legal entity is
        contributing and where funds originate from. Thereby, Project T Ltd. is
        able to determine contributions that may be associated to criminal or
        terrorist activities as well as money laundering and can subsequently
        reject such contributions.<br />
        <br />
        It can be the case that this process requires Project T Ltd. to also
        collect personal data on individuals affiliated with the contributing
        institutions.<br />
        <br />
        Any individual's information will be held confidential and does not
        incur any further processing – apart from initial review and storage -
        unless explicitly required from relevant, governmental authorities.<br />
        <br />
        Any information on the contributing entity will be held confidential and
        does not incur any further processing, unless explicitly required from
        relevant, governmental authorities.<br />
        <br />
        The collected data will be retained by Project T Ltd. for up to 5 (five)
        years as required by the "Proceeds of Crime Act" (2015).<br />
        <br />
      </p>
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
