import React from 'react'
import { BsFillSunFill } from 'react-icons/bs'

import './css/app.css'

function App() {
  return (
    <>
      <main>
        <header>
          <div className="container-grid">
            <form action="">
              <input type="search" name="search" id="search" placeholder="Search" />
            </form>
          </div>
          <div className="container-flex">
            <div className='top'>
              <BsFillSunFill />
              <p>GOOD MORNING, IT'S CURRENTLY</p>
            </div>
            <h1>11:37</h1>
            <h2>IN LONDON, UK</h2>
          </div>
        </header>
        {/* <div>teste</div> */}
      </main>
    </>
  )
}

export default App
