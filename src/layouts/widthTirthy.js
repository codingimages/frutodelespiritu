import React from "react"

import styled from "@emotion/styled"

const Aside = styled.aside`
    flex-basis: 30%;
    width: 30%;
    padding: 1rem;
    margin-left: 1rem;
    background-color: #4d016b;
    height: 100%;

    @media(max-width: 800px){
        position: relative;
        margin: 1rem;
        flex-basis: 100%;
        width: 100%;
        position: relative;
    }
`

const WidthTirthy = ({ children }) => {
    return (
        <Aside>
            {children}
        </Aside>
    )

}

export default WidthTirthy