// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
        <Link to="/projects">Projects</Link>
      <p>Hi there! I'm a Machine Learning and AI learner.</p>
    </main>
  )
}

export const Head = () => <title>About Me</title>
// Step 3: Export your component
export default AboutPage