import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import TableOfContents from './components/TableOfContents';
import Section from './components/Section';
import Header from './components/Header'; // Import the Header component

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/output.json')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header showHomeButton={false} /> {/* No Home button on the Home page */}
                <Home
                  documentTitle={data.document_title}
                  metadata={data.metadata}
                />
              </>
            }
          />
          <Route
            path="/table-of-contents"
            element={
              <>
                <Header showHomeButton={true} /> {/* Show Home button */}
                <TableOfContents sections={data.sections} />
              </>
            }
          />
          <Route
            path="/section/:header"
            element={
              <>
                <Header showHomeButton={true} /> {/* Show Home button */}
                <Section sections={data.sections} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;