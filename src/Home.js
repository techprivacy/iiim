import React from 'react'
import logo from './images/myimage.jpg'
import Nav from './Nav'
export default function Home() {
  return (
<>
<Nav/>
<h1>Home</h1>
<img src={logo}></img>

</>  )
}
