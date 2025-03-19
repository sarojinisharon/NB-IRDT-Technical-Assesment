import React from 'react';
import { useNavigate } from 'react-router-dom';

function TableOfContents({ sections }) {
  const navigate = useNavigate();

  const handleClick = (header) => {
    if (header === "Record Layouts and Data Descriptions") {
      // Navigate to the "Overview" section
      navigate(`/section/Overview`);
    } else {
      navigate(`/section/${encodeURIComponent(header)}`);
    }
  };

  const handleSampleDatasetClick = () => {
    console.log("Navigating to Sample Dataset Attributes"); // Debugging log
    navigate(`/section/Sample Dataset Attributes`);
  };

  const overviewSection = sections.find(section => section.header === "Overview");

  // Debugging: Log the table data
  console.log("Table Data:", overviewSection.tables[0].data);

  return (
    <div style={styles.container}>
      <h1>Table of Contents</h1>
      <ul style={styles.list}>
        {sections
          .filter((section) => section.header !== "Overview") // Remove "Overview"
          .map((section, index) => (
            <li
              key={index}
              style={styles.listItem}
              onClick={() => handleClick(section.header)}
            >
              {section.header}
            </li>
          ))}
      </ul>

      {/* Display the "Overview" table only when navigating to "Overview" */}
      {window.location.pathname.includes("Overview") && overviewSection && (
        <div style={styles.tableContainer}>
          <h2>Overview</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                {overviewSection.tables[0].data[0].map((header, index) => (
                  <th key={index} style={styles.th}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {overviewSection.tables[0].data.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => {
                    console.log({ cellIndex, rowIndex, cell }); // Debugging log
                    return (
                      <td
                        key={cellIndex}
                        style={{
                          ...styles.td,
                          ...(cellIndex === 1 && rowIndex === 1 && cell.trim() === "Sample Dataset" ? styles.clickableCell : {}),
                        }}
                        onClick={
                          cellIndex === 1 && rowIndex === 1 && cell.trim() === "Sample Dataset"
                            ? handleSampleDatasetClick
                            : undefined
                        }
                      >
                        {cell}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto', // Center the container
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    margin: '10px 0',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#f9f9f9',
    transition: 'background-color 0.3s ease, transform 0.3s ease', // Smooth hover effect
    ':hover': {
    backgroundColor: '#e0e0e0', // Light gray on hover
    transform: 'translateX(10px)', // Move slightly to the right
  },
}, 
  tableContainer: {
    marginTop: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow

  },
  th: {
    border: '1px solid #ddd',
    padding: '12px',
    backgroundColor: '#f2f2f2',
    backgroundColor: '#ffffff', // White background

  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
  },
  clickableCell: {
    cursor: 'pointer',
    backgroundColor: '#fff0f0', // Light red background
    border: '2px solid red',
    borderRadius: '5px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    transition: 'background-color 0.3s, color 0.3s',
    ':hover': {
      backgroundColor: 'red',
      color: 'white',
    },
  },
};

export default TableOfContents;