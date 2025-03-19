import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function Section({ sections }) {
  const { header } = useParams(); // Get the header from the URL
  const navigate = useNavigate(); // Initialize navigate

  const section = sections.find((sec) => sec.header === decodeURIComponent(header));


  if (!section) return <div>Section not found</div>;

  return (
    
    <div style={styles.container}>
        {/* Back Icon */}
        <FontAwesomeIcon icon={faArrowLeft} style={styles.backIcon} onClick={() => navigate(-1)} />
      <h1>{section.header}</h1>
      {section.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {section.tables.map((table, tableIndex) => (
        <table key={tableIndex} border="1" style={styles.table}>
          <thead>
            <tr>
              {table.data[0].map((header, headerIndex) => (
                <th key={headerIndex}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.data.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto', // Center the container
    lineHeight: '1.6', // Improve readability
    position: 'relative',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow

  },
  th: {
    border: '1px solid #ddd',
    padding: '12px',
    backgroundColor: '#2c3e50', // Dark blue-grey
    color: 'white',
    textAlign: "left",
  },
  td: {
    border: '1px solid #ddd',
    padding: '12px',
    backgroundColor: '#ffffff', //White background
  },
  backIcon: {
    position: 'absolute', // Position the icon in the top-left corner
    top: '20px',
    left: '20px',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#3498db', // Bright blue
    transition: 'color 0.3s ease',
    ':hover': {
      color: '#2980b9', // Darker blue on hover
    },
  },
};

export default Section;