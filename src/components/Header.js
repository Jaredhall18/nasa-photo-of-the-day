import React from 'react'
import styled from 'styled-components'

const StyledDetails = styled.div`
    background-color: ${pr => pr.theme.tertiaryColor};
    padding-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        color: ${pr => pr.theme.primaryColor}
    }
`

const Header = () => {
    return (
        <StyledDetails>
            <h1>Nasa Astronomy Photo Of The Day</h1>
        </StyledDetails>
    )
}

export default Header
