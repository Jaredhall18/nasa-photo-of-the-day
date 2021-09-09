import React from 'react'
import styled from 'styled-components'

const StyledDetails = styled.div`
    background-color: ${pr => pr.theme.tertiaryColor};
    padding-bottom: 20px;

    h5 {
        color: ${pr => pr.theme.primaryColor}
    }
`

const Footer = () => {
    return (
        <StyledDetails>
            <h5>Copyright &copy; 2021</h5>
        </StyledDetails>
    )
}

export default Footer
