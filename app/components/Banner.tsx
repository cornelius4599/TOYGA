import Image from 'next/image';
import React from 'react';

const BannerWithDetails: React.FC = () => {
  return (
    <div style={splitScreenStyle}>
      {/* Left Side: Banner */}
      <div style={bannerStyle}>
        <Image
          src="/banner.jpg" // Banner image in the public folder
          alt="Owo Youth Festival"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Right Side: Event Details */}
      <div style={detailsStyle}>
        <h1 style={headingStyle}>Owo Youth Festival</h1>
        <p style={paragraphStyle}>
          Join us for the exciting Owo Youth Festival. This event is packed with music, performances, and activities that will define the youthful experience!
        </p>
        <button style={buttonStyle}>Anticipate!</button>
      </div>
    </div>
  );
};

const splitScreenStyle: React.CSSProperties = {
  display: 'flex',
  height: '70vh',
};

const bannerStyle: React.CSSProperties = {
  flex: 1,
  position: 'relative',
};

const detailsStyle: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#FFF6E5', // Light gray for contrast
  textAlign: 'center',
};

const headingStyle: React.CSSProperties = {
  fontSize: '48px',
  fontWeight: 'bold',
  color: '#873600', // Brown color matching the logo and header
  marginBottom: '20px',
  fontFamily: "'Poppins', sans-serif",
};

const paragraphStyle: React.CSSProperties = {
  fontSize: '18px',
  marginBottom: '30px',
  color: '#333',
  fontFamily: "'Poppins', sans-serif",
};

const buttonStyle: React.CSSProperties = {
  fontSize: '20px',
  padding: '10px 30px',
  backgroundColor: '#873600', // Brown color for the button to match the theme
  color: '#fff', // White text for the button
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  fontFamily: "'Poppins', sans-serif",
};

export default BannerWithDetails;
