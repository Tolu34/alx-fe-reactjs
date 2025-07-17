import React from 'react';

function Footer() {
  return (
    <footer style={{ 
      backgroundColor: 'navy',
      color: 'white',
      padding: '15px',
      textAlign: 'center',
      fontSize: '14px',
      position: 'fixed',
      bottom: 0,
      width: '100%'
    }}>
      <p>&copy; 2025 My Favorite Cities. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
