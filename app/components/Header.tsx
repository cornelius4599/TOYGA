import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <div style={logoContainer}>
        <Image
          src="/logo.jpg"
          alt="TOYGA Logo"
          width={80}
          height={80}
        />
      </div>
      <nav style={navStyle}>
        <Link href="#about" style={linkStyle}>About</Link>
        <Link href="#events" style={linkStyle}>Events</Link>
      </nav>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  width: '100%',
  backgroundColor: '#000', // Brown color matching logo background
  color: '#fff', // White text color for contrast
};

const logoContainer: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const navStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const linkStyle: React.CSSProperties = {
  marginLeft: '20px',
  fontSize: '18px',
  textDecoration: 'none',
  color: '#fff', // White text to match the brown background
};

export default Header;
