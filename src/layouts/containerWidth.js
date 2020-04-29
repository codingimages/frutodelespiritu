import React from "react"

import { css } from "@emotion/core"

const containerWidth = css`
    max-width: 1200px;
    margin: auto;
    height: 100%;
`

const ContainerWidth = ({ children }) => {
    return (
        <section css={containerWidth}>
            {children}
        </section>
    )

}

export default ContainerWidth