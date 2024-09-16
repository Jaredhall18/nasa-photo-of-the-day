import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledDetails = styled.div`
    background-color: ${pr => pr.theme.primaryColor};
    padding: 10px;
    text-align: center;

    h2, h3, p {
        color: #eaac8b;
    }

    img {
        height: 60vh;
        border-radius: 40px;

        &:hover{
            transform: scale(1.1);
        }
    }
    `
const PCenter = styled.div`
    display: flex;
    justify-content: center;
    

    p{
        max-width: 80%;
        text-align: center;
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
            <PCenter>
                <p>{nasaApod.explanation}</p>
            </PCenter>
        </StyledDetails>
    )
}

export default Cards
