import React from "react"
import { Helmet } from "react-helmet"


const MetaTags = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link href="https://fonts.googleapis.com/css?family=Delius+Unicase:700|Rubik&display=swap" rel="stylesheet" />
        </Helmet>
    )
}

export default MetaTags