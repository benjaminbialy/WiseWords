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
      setQuote(data.docs[0]._document.data.value.mapValue.fields.quote.stringValue);
    };
    getQuote();

    return () => {

    };
  }, []);
  

  return (    
    <div className="App">
      <h1>"{quote}"</h1>
    </div>
  );
}

export default App;