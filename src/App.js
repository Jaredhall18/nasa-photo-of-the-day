import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import {BASE_URL, API_KEY} from './constants'
import Header from './components/Header'
import Cards from './components/Cards'
import Footer from './components/Footer'
import theme from './theme';
import styled from 'styled-components'

import { ThemeProvider } from 'styled-components';
 
const BackgroundColor = styled.div`
background-color: ${pr => pr.theme.tertiaryColor};
`

 function App() {
  const [nasaApod, setNasaApod] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setNasaApod(res.data)
        console.log(res.data)
      }).catch(err => console.error(err));
  }, [])
  

  return (
    <div className="App">
      <BackgroundColor>
        <Header />
        <Cards nasaApod={nasaApod}/>
        <Footer />
      </BackgroundColor>
    </div>
  );
}

export default App;
