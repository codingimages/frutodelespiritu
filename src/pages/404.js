import React from "react"

import ErrorPageComponent from "../components/ErrorPageComponent"
import MainLayout from "../components/layout/MainLayout"

const NotFoundPage = () => (
  <MainLayout>
    <ErrorPageComponent />
  </MainLayout>
)

export default NotFoundPage
