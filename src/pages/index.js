import React from 'react';
import Link from 'gatsby-link';

import imageMichael from './images/team_michael.jpg';
import imageMax from './images/team_max.jpg';
import imageErik from './images/team_erik.jpg';
import imageSam from './images/team_sam.jpg';

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

const IndexPage = () => (
  <div>
    <p>
      We are building <b>Rlay</b> - the information validation protocol for
      decentralized applications
    </p>
    <h3>Team</h3>
    <Team />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </div>
);

export default IndexPage;
