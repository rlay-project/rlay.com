import React from 'react';
import Link from 'gatsby-link';

import imageMichael from './images/team_michael.jpg';
import imageMax from './images/team_max.jpg';
import imageErik from './images/team_erik.jpg';
import imageSam from './images/team_sam.jpg';

const jobsEmail = 'jobs@rlay.com';

const TeamMember = props => {
  const { name, email, linkedin, image } = props;

  return (
    <div>
      <div>
        <img
          style={{ border: '1px solid black' }}
          height="150"
          width="150"
          src={image}
        />
      </div>
      <div>
        <span>{name}</span>
      </div>
      <div>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div>
        <a href={linkedin}>LinkedIn</a>
      </div>
    </div>
  );
};

const Team = () => (
  <div
    style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}
  >
    <TeamMember
      name="Michael Hirn"
      email="michael@rlay.com"
      linkedin="https://www.linkedin.com/in/meetmichaelhirn/"
      image={imageMichael}
    />
    <TeamMember
      name="Maximilian Goisser"
      email="max@rlay.com"
      linkedin="https://www.linkedin.com/in/maxgoisser/"
      image={imageMax}
    />
    <TeamMember
      name="Erik Buschbaum"
      email="erik@rlay.com"
      linkedin="https://www.linkedin.com/in/erik-buschbaum-672969105/"
      image={imageErik}
    />
    <TeamMember
      name="Sam Nasser Zare"
      email="sam@rlay.com"
      linkedin="https://www.linkedin.com/in/sam-nasser-zare/"
      image={imageSam}
    />
  </div>
);

const Subscribe = () => (
  <div>
    Want to stay up to date with Rlay?{' '}
    <a href="http://eepurl.com/dtioX9">Subscribe</a> to our regular email
    updates.
  </div>
);

const Jobs = () => (
  <p>
    Want to help us build Rlay and join our team? Take a look at our{' '}
    <a href="https://rlay.breezy.hr/">open positions</a>!
  </p>
);

const PreviewVideo = () => (
  <div
    style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}
  >
    <div style={{ margin: 'auto' }}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/PoJNPh-T7Fs?rel=0"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      />
    </div>
  </div>
);
const IndexPage = () => (
  <div>
    <p>
      We are building <b>Rlay</b> - the information validation protocol for
      decentralized applications
    </p>
    <Subscribe />
    <div style={{ marginTop: '20px' }}>
      <Jobs />
    </div>
    <a
      style={{ marginTop: '30px', marginBottom: '30px', fontSize: '1.8em' }}
      href="./app"
    >
      Try out the testnet!
    </a>
    <h3 style={{ marginTop: '20px' }}>Rlay Demo UI Preview</h3>
    <PreviewVideo />
    <h3 style={{ marginTop: '20px' }}>Team</h3>
    <Team />
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <Link to="/legal/">Impressum & Privacy Policy</Link>
    </div>
  </div>
);

export default IndexPage;
