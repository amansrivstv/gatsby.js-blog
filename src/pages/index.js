import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (<Layout>
    <h1 > Hello </h1> <h2>
      <a href='/contact' > Contact Me </a> <br />
    Fast Link <Link to="/contact"> Contact me </Link> </h2>
  </Layout>
  )
}

export default IndexPage