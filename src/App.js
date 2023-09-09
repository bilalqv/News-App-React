import './App.css';
import Home from './components/Home';
import Navv from './components/Navv';
import BasicTabs from './components/Tabb';
import {useState, useEffect} from 'react';
import useFetch from './hooks/useFetch';
import Tagg from './components/Tagg';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [category, setCategory] = useState("business");
  const [country, setCountry] = useState("in");
  const [source, setSource] = useState("");
  const [url, setUrl] = useState( `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}` ) ;
  const [query, setQuery] = useState("");
  const {data, error, isPending} =  useFetch(url);

  useEffect( ()=>{
    if(source !== ""){
        setUrl(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`)
    }
    else{
        setUrl(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`)
    }
}, [source, category, country] )

  return (
    <div className="App">
        <Navv setCountry={setCountry} setSource={setSource} query={query} setQuery={setQuery} setUrl={setUrl} />
        <BasicTabs setCat={setCategory} setSource={setSource} />
        <Tagg country={country} source={source} />
        <div className='container'> 
          <Home news={data} isPending={isPending} error={error} />
        </div>
    </div>
  );
}

export default App;
