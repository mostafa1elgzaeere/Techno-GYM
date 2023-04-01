import React from 'react'
import c1 from "../images/c1.png"
import c2 from "../images/c2.png"
import c3 from "../images/c3.png"
import c4 from "../images/c4.png"
import c5 from "../images/c5.png"
import c6 from "../images/c6.png"

import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Trainers() {
  return (
    <div className='triners-parent'>
      <h2 className='text-center text-light my-5'>Our<span className='text-success'>Train</span>ers</h2>

      <div className="triners-images container">
        <div className="row">



        <div className="triner  col-md-4 my-1 col-sm-12">
          <img src={c1} alt="" />
          <div className="overlay">
            <h3 className='py-2 text-light'>Mostafa Ali</h3>
            <ul>
              <li><FaWhatsapp color='#128C7E' size="30"/></li>
              <li><FaFacebook color='#3b5998' size="30"/></li>
              <li><FaInstagram color='#d62976  ' size="30"/></li>
            </ul>
            <button className='my-2 btn btn-light'>Join</button>
          </div>
        </div>

        <div className="triner  col-md-4 my-1 col-sm-12">
          <img src={c2} alt="" />
          <div className="overlay">
            <h3 className='p-2 text-light'>Michel Maged</h3>
           <ul>
              <li><FaWhatsapp color='#128C7E' size="30"/></li>
              <li><FaFacebook color='#3b5998' size="30"/></li>
              <li><FaInstagram color='#d62976  ' size="30"/></li>
            </ul>
            <button className='my-2 btn btn-light'>Join</button>

          </div>
        </div>
        
        <div className="triner  col-md-4 my-1 col-sm-12">
          <img src={c3} alt="" />
          <div className="overlay">
            <h3 className='p-2 text-light'>Mahdy Mohamed</h3>
              <ul>
              <li><FaWhatsapp color='#128C7E' size="30"/></li>
              <li><FaFacebook color='#3b5998' size="30"/></li>
              <li><FaInstagram color='#d62976  ' size="30"/></li>
            </ul>
            <button className='my-2 btn btn-light'>Join</button>

          </div>
        </div>

        <div className="triner  col-md-4 my-1 col-sm-12">
          <img src={c4} alt="" />
          <div className="overlay">
            <h3 className='p-2 text-light'>Andrwa Saber</h3>
            <ul>
              <li><FaWhatsapp color='#128C7E' size="30"/></li>
              <li><FaFacebook color='#3b5998' size="30"/></li>
              <li><FaInstagram color='#d62976  ' size="30"/></li>
            </ul>
            <button className='my-2 btn btn-light'>Join</button>
          </div>
        </div>
        
        <div className="triner  col-md-4 my-1 col-sm-12">
          <img src={c5} alt="" />
          <div className="overlay">
            <h3 className='p-2 text-light'>Daly Makram</h3>
            <ul>
              <li><FaWhatsapp color='#128C7E' size="30"/></li>
              <li><FaFacebook color='#3b5998' size="30"/></li>
              <li><FaInstagram color='#d62976  ' size="30"/></li>
            </ul>
            <button className='my-2 btn btn-light'>Join</button>

          </div>
        </div>
        
        <div className="triner  col-md-4 my-1 col-sm-12">
          <img src={c6} alt="" />
          <div className="overlay">
            <h3 className='p-2 text-light'>Ahmed Dahi</h3>
            <ul>
              <li><FaWhatsapp color='#128C7E' size="30"/></li>
              <li><FaFacebook color='#3b5998' size="30"/></li>
              <li><FaInstagram color='#d62976  ' size="30"/></li>
            </ul>
            <button className='my-2 btn btn-light'>Join</button>

          </div>
        </div>



        </div>
      </div>
    </div>
  )
}
