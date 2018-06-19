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
        <a
          href="https://t.me/rlay_official"
          style={{
            color: 'black',
            textDecoration: 'none',
            marginLeft: '20px',
          }}
        >
          Telegram
        </a>
        <a
          href="https://reddit.com/r/rlay"
          style={{
            color: 'black',
            textDecoration: 'none',
            marginLeft: '20px',
          }}
        >
          Reddit
        </a>
        <a
          href="https://twitter.com/RlayOfficial"
          style={{
            color: 'black',
            textDecoration: 'none',
            marginLeft: '20px',
          }}
        >
          Twitter
        </a>
        <a
          href="https://medium.com/rlay-official"
          style={{
            color: 'black',
            textDecoration: 'none',
            marginLeft: '20px',
          }}
        >
          Blog
        </a>
        <a
          href="/rlay-whitepaper.pdf"
          style={{
            color: 'black',
            textDecoration: 'none',
            marginLeft: '20px',
          }}
        >
          Whitepaper
        </a>
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
