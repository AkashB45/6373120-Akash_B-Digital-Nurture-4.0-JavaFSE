// src/App.js
import React from 'react';
import './App.css';
import CohortDetails from './CohortDetails';

function App() {
  const cohorts = [
    { name: 'React Bootcamp', duration: '4 Weeks', status: 'Ongoing' },
    { name: 'Spring Boot Fundamentals', duration: '6 Weeks', status: 'Completed' },
    { name: 'Data Structures in Java', duration: '5 Weeks', status: 'Ongoing' },
    { name: 'Python for Beginners', duration: '3 Weeks', status: 'Completed' }
  ];

  return (
    <div className="App">
      <h1>Cohort Dashboard</h1>
      {cohorts.map((cohort, idx) => (
        <CohortDetails
          key={idx}
          name={cohort.name}
          duration={cohort.duration}
          status={cohort.status}
        />
      ))}
    </div>
  );
}

export default App;
