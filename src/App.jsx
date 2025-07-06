import React from 'react';
import "./index.css";

function App() {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <h1>🚀 Coming Soon</h1>
        <p>We’re working hard to launch our website.<br />Stay tuned!</p>
        <div className="loader"></div>
      </div>
      <footer className="coming-soon-footer">
        &copy; {new Date().getFullYear()} Rootline. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
