import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  let navigate=useNavigate()

  return (
    <div className='home-parent'>
        <div className="home-journey">
            {/* <h2 className='text-light'>Fitness & Healthis a Mentality</h2> */}
            {/* <p className='description text-secondary'>Lorem ipsum dolor sit amet consectetur</p> */}
            <button className='btn btn-success' onClick={()=>navigate("/contact")}>Start Your Journey</button>
        </div>
    </div>
  )
}
