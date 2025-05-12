import React from 'react'
import Logo from './Logo'

export default function Comparision() {
  return (
    <div>
        <div className=' text-6xl flex justify-center'>
        Comparision
        </div>
        <br />
        <div className='flex justify-around'>
            <h1>sphinix {'>'} rockman</h1>
            <h1>cybrain {'>'} rockman</h1>
            <h1>cybrain {'>'} sphinix</h1>
        </div>
      <div>
                      <Logo/>
      
                      </div>
    </div>
  )
}
