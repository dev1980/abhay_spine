import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Doctor" />
    <h1>Dr. Abhay Yadav</h1>
    <p>HOD Orthopedics Department |  <a href="https://www.vayodhahospitals.com/Doctor/spine-surgeon-orthopedic-surgeon-dr-abhay-yadav/">VAYODHA HOSPITAL</a></p>
    <p>Welcome to our new site.</p>
    <p style={{fontSize:`1.8rem`, color:`blue`}}>Site under construction.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
