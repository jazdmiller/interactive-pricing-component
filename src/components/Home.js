import React from 'react'
import Card from './Card'



function Home() {
  return (
    <div>
        <div className='bg-img text-center pt-5'>       
            <div className=' bg-pattern row align-items-center '>
                <div className='bold-header'>
                Simple, traffic-based pricing
                </div>
                <div>
                Sign-up for our 30-day trial.<br className='d-lg-none' /> No credit card required. 
                </div>
            </div>
        </div>
       <Card className="card-div"/>
    </div>
  )
}

export default Home