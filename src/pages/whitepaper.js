import React from 'react';

const contactEmail = 'contact@rlay.com';

const WhitepaperPage = () => (
  <div>
    <p>The Rlay whitepaper is currently not publicly available.</p>
    <p>
      If you want to get access please contact us personally at:{' '}
      <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
    </p>
  </div>
);

export default WhitepaperPage;
