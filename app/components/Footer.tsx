import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <div style={footerSectionStyle}>
          <h2 style={footerHeadingStyle}>Stay Connected</h2>
          <p style={footerTextStyle}>Follow us on our social media platforms!</p>
          <div style={socialLinksStyle}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Instagram</a>
          </div>
        </div>
        
        <div style={footerSectionStyle}>
          <h2 style={footerHeadingStyle}>Contact Us</h2>
          <p style={footerTextStyle}>Email: info@owyouthfestival.com</p>
          <p style={footerTextStyle}>Phone: +123 456 7890</p>
        </div>
      </div>
    </footer>
  );
};

const footerStyle: React.CSSProperties = {
  backgroundColor: '#000', // Dark brown color for the footer
  color: '#fff', // White text
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between', // Spread content evenly
  alignItems: 'center', // Center items vertically
};

const footerContentStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '1200px', // Limit the max width of the footer content
  margin: '0 auto', // Center the footer content
};

const footerSectionStyle: React.CSSProperties = {
  flex: 1, // Each section will take equal space
  padding: '0 20px', // Add some horizontal padding
};

const footerHeadingStyle: React.CSSProperties = {
  fontSize: '20px',
  marginBottom: '10px',
  fontFamily: "'Poppins', sans-serif", // Poppins font for the footer heading
};

const footerTextStyle: React.CSSProperties = {
  fontSize: '14px',
  margin: '5px 0',
  fontFamily: "'Poppins', sans-serif", // Poppins font for the footer text
};

const socialLinksStyle: React.CSSProperties = {
  margin: '10px 0',
};

const linkStyle: React.CSSProperties = {
  color: '#fff',
  textDecoration: 'none',
  margin: '0 10px',
  transition: 'color 0.3s ease',
};

export default Footer;
