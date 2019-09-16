import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'

function App() {
  const cohortName = "Power Arrayngers"
  return (
    <div id="whatever whatever">

      <Header cohortName="Whatever" />
      <Header cohortName={cohortName} />
      <Header cohortName="Thanos" />
      <Header cohortName="No Marvel Fans Here" />
      <Header cohortName="Beef" />

    </div>
  );
}

export default App;

