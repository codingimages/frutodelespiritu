import React from "react"

import { css } from "@emotion/core"

const widthSeventy = css`
    flex-basis: calc(70% - 2rem);
    width: calc(70% - 2rem);
    padding: 1rem;

    @media(max-width: 800px){
        flex-basis: 100%;
        width: 100%;
        position: relative;
    }
`

const WidthSeventy = ({ children }) => {
    return (
        <section css={widthSeventy}>
            {children}
        </section>
    )

}

export default WidthSeventy