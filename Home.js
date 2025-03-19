import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home({ documentTitle, metadata }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/table-of-contents'); // Navigate to Table of Contents
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.welcomeText}>Welcome to NB-IRDT Data Dictionary</h1>
     {/* Rectangle container for Data 001 */}
     <div style={styles.dataContainer} onClick={handleClick}>
        <h2 style={styles.dataTitle}>{documentTitle}</h2>
        <p style={styles.dataMetadata}>{metadata}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    position: 'relative', // Ensure proper positioning
    mineHeight: '100vh',
  },
  welcomeText: {
    position: 'absolute', // Position the text absolutely
    top: '70px', // Adjust this value to align below the header
    left: '20px', // Adjust this value to align with the left edge
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#2c3e50', // Dark blue-gray to match the header
    margin: 0, // Remove default margin
  },
  dataContainer: {
    width: '90%', // Span most of the screen width
    maxWidth: '1200px', // Limit maximum width for larger screens
    margin: '120px auto 0', // Position below the welcome text and center horizontally
    padding: '20px',
    backgroundColor: '#ffffff', // White background
    borderRadius: '10px', // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
    border: '1px solid #e0e0e0', // Light border
    cursor: 'pointer', // Indicate clickability
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth hover effect
    ':hover': {
      transform: 'translateY(-5px)', // Slight lift on hover
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Deeper shadow on hover
    },
  },
  dataTitle: {
    fontSize: '28px',
    fontWeight: '600',
    color: '#2c3e50', // Dark blue-gray
    margin: '0 0 10px', // Add spacing below the title
  },
  dataMetadata: {
    fontSize: '16px',
    color: '#666', // Gray text
    margin: 0, // Remove default margin
  },
};

export default Home;