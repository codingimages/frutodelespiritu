import React from "react"

import ErrorPageComponent from "../components/errorPageComponent"
import MainLayout from "../components/layout/mainLayout"

const NotFoundPage = () => (
  <MainLayout>
    <ErrorPageComponent />
  </MainLayout>
)

export default NotFoundPage
