import { useState } from 'react'
import React from 'react';
import './App.css'
import getData from './utils/getData';

function App() {
  // const [getter, setter] = useState(initialValue);
  const [loaded, setLoaded] = useState(false);
  const [aboutObj, setAboutObj] = useState();

  // get the dataaaa
  React.useEffect(() => {
    // go call getData
    getData('about/')
      .then((resJson) => {
        console.log('here', resJson);
        setLoaded(true);
        setAboutObj(resJson);
      })
  }, []);

  if (!loaded) return (
    <>
      <h1>Welcome to my website!</h1>
      <h2>Loading...</h2>
    </>
  );
  return (
    <>
      <h1>Welcome to my website!</h1>
      {/*get about*/}
      <h2>{aboutObj.title}</h2>
      <h3>{aboutObj.description}</h3>
      <div className="aboutQuote">
        <h4>{aboutObj.quote}</h4>
        <h4>{aboutObj.quoteAuthor}</h4>
      </div>
    </>
  )
}

export default App
