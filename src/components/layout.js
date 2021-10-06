import * as React from "react"
import Header from "./header"
import { GlobalStyle } from "./styles/GlobalStyles"
import "@fontsource/open-sans" // Defaults to weight 400.
import Footer from "./Footer"


const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
