import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Header({ showHomeButton }) {
  const navigate = useNavigate();
  const location = useLocation(); // Use the useLocation hook

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleTableOfContentsClick = () => {
    navigate('/table-of-contents');
  };

  // Hide the Table of Contents button if the current route is /table-of-contents
  const isTableOfContentsPage = location.pathname === '/table-of-contents';


  return (
    <div style={styles.header}>
      <h1 style={styles.title}>Data Display App</h1>
      {showHomeButton && (
        <div style={styles.buttonContainer}>
          <button style={styles.navButton} onClick={handleHomeClick}>
            Home
          </button>
          {/* Hide Table of Contents button on the Table of Contents page */}
          {!isTableOfContentsPage && (
            <button style={styles.navButton} onClick={handleTableOfContentsClick}>
            Table of Contents
          </button>
          )}
        </div>
      )}
    </div>
  );
}

const styles = {
    header: {
        backgroundColor: '#2c3e50', // Dark blue-gray
        padding: '10px 20px',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
  },
  title: {
    margin: 0,
    fontSize: '24px',
    fontWeight: '600', // Bold title
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px', // Add spacing between buttons
  },
  homeButton: {
    backgroundColor: '#3498db', // Bright blue
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease', // Smooth transition
  },
  homeButtonHover: {
    backgroundColor: '#2980b9', // Darker blue on hover
  },
  navButton: {
    backgroundColor: '#3498db', // Bright blue
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease, transform 0.3s ease', // Smooth hover effect
    ':hover': {
      backgroundColor: '#2980b9', // Darker blue on hover
      transform: 'scale(1.05)', // Slightly enlarge on hover
    },
  },
};

export default Header;