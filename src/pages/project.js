// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
// Step 2: Define your component
const ProjectPage = () => {
  return (
    <main>
      <h1>My Projects</h1>
        <Link to="/">Home</Link>
      <p>These are the projects I have done</p>
    </main>
  )
}

export const Head = () => <title>About Me</title>
// Step 3: Export your component
export default ProjectPage