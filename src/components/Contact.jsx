import React from 'react'

export default function Contact() {
  return (
<div classname="container contact-parent" >


<form action="" className='container' style={{width:"100%"}}>
<h2 className='text-light' style={{textAlign:"center"}}>Contact <span className='text-success'>Us</span> </h2>

  <label htmlFor="" className='text-secondary'>Name</label>
  <br />
  <input type="text"  className='w-100'/>
  <br />

  <label htmlFor="" className='text-secondary mt-4'>Address</label>
  <br />
  <input type="text" className='w-100' />
  <br />

  <label htmlFor="" className='text-secondary mt-4'>Phone</label>
  <br />
  <input type="text" className='w-100'/>
  <br />


  <label htmlFor="" className='text-secondary mt-4'>Message</label>
  <br />
  <textarea type="text"className='w-100' />
  <br />

    <div className='d-flex w-100' style={{justifyContent:"center"}}>
    <input type="button" value="Send Message" className='btn btn-block btn-success mt-3' />

    </div>


</form>
</div>

  )
}
