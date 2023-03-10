import React from 'react'
import {Link} from "gatsby"

const data = [
{
    id:1,
    text:'home',
    url:'/'
},
{
    id:2,
    text:'Projects',
    url:'/project',
},
{
    id:3,
    text:'Experience',
    url:'/experience/',
},
{
    id:4,
    text:'Contact',
    url:'/contact/',
}
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
