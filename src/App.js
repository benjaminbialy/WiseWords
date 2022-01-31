import './App.css';
import { useState, useEffect } from 'react';
import { db } from "./firebase-config.js"
import { collection, getDocs } from "firebase/firestore"

function App() {

  const [quote, setQuote] = useState([]);
  const quoteCollection = collection(db, "quotes")

  useEffect(() => {

    const getQuote = async () => {
      const data = await getDocs(quoteCollection);
      console.log(data);
      setQuote(data);
    };
    getQuote();

    return () => {

    };
  }, []);
  

  return (    
    <div className="App">
      <h1>"{}"</h1>
    </div>
  );
}

export default App;