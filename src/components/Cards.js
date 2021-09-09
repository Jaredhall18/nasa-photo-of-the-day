import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledDetails = styled.div`
    background-color: ${pr => pr.theme.primaryColor};
    padding: 10px;

    h2, h3, p {
        color: ${pr => pr.theme.white};
    }

    img {
        height: 60vh;
        border-radius: 40px;
    }

    `


const Cards = (props) => {
    const{nasaApod} = props
    const[dailyCard, setDailyCard] = useState (null)
    
    
    return (
        <StyledDetails>
            <h2> {nasaApod.title}</h2>
            <div className= 'dailyImg'>
                <img src= {nasaApod.hdurl} alt='view of space' />
            </div>
            <h3>
                 {nasaApod.date}
            </h3>
            <p>{nasaApod.explanation}</p>
        </StyledDetails>
    )
}

export default Cards
