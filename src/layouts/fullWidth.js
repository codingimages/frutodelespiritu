import React from "react"

import { css } from "@emotion/core"

const fullWidth = css`
    min-width: 100%;
`

const FullWidth = ({ children }) => {
    return (
        <section css={fullWidth}>
            {children}
        </section>
    )

}

export default FullWidth