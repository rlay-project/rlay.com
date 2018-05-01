import React from 'react';
import Link from 'gatsby-link';

const Header = ({ siteTitle }) => (
  <div
    style={
      {
        // background: 'rebeccapurple',
        // marginBottom: '1.45rem',
      }
    }
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 800,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <span style={{ marginLeft: 'auto', marginRight: 0 }}>
        <Link
          to="/whitepaper"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          Whitepaper
        </Link>
        <a
          href="http://eepurl.com/dtioX9"
          style={{
            color: 'black',
            textDecoration: 'none',
            marginLeft: '20px',
          }}
        >
          Subscribe
        </a>
      </span>
    </div>
  </div>
);

export default Header;
