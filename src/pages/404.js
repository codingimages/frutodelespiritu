import React from "react"

import ErrorPageComponent from "../components/ErrorPageComponent"
import MainLayout from "../layouts/mainLayout"

const NotFoundPage = () => (
  <MainLayout>
    <ErrorPageComponent />
  </MainLayout>
)

export default NotFoundPage
