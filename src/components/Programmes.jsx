import React, { useState } from "react";
import massage from "../images/fit-massage.svg"
import cycling from "../images/fit-cycling.svg"
import boxing from "../images/fit-boxing.svg"
import yoga from "../images/fit-yoga.svg"
import dumbell from "../images/fit-dumbell.svg"
import swimming from "../images/fit-swimming.svg"


export default function Programmes() {

  let [progs,setProgs]=useState([
  
    {img:massage,title:"massage"},
    {img:yoga,title:"yoga"},
    {img:boxing,title:"boxing"},
    {img:cycling,title:"cycling"},
  ])

  let sundayprog=()=>{
    setProgs([
      {img:swimming,title:"swimming"},
      {img:dumbell,title:"dumbell"},
      {img:boxing,title:"boxing"},
      {img:massage,title:"massage"},
      ])
  }
  let mondayprog=()=>{
      setProgs([
        {img:yoga,title:"yoga"},
        {img:massage,title:"massage"},
        {img:dumbell,title:"dumbell"},
        {img:cycling,title:"cycling"},
    ])
  }
  let tusedayprog=()=>{
      setProgs([
        {img:dumbell,title:"dumbell"},
        {img:swimming,title:"swimming"},
        {img:yoga,title:"yoga"},
        {img:cycling,title:"cycling"},
    ])
  }
  let wednesdayprog=()=>{
    setProgs([
      {img:swimming,title:"swimming"},
      {img:dumbell,title:"dumbell"},
      {img:boxing,title:"boxing"},
      {img:massage,title:"massage"},
      ])
  }
  let thursdayprog=()=>{
    setProgs([
      {img:boxing,title:"boxing"},
      {img:swimming,title:"swimming"},
      {img:dumbell,title:"dumbell"},
      {img:massage,title:"massage"},
      ])
  }
  let fridayprog=()=>{
    setProgs([
      {img:yoga,title:"yoga"},
      {img:swimming,title:"swimming"},
      {img:massage,title:"massage"},
      {img:dumbell,title:"dumbell"},
      ])
  }
  let sturdayprog=()=>{
    setProgs([
      {img:massage,title:"massage"},
      {img:yoga,title:"yoga"},
      {img:boxing,title:"boxing"},
      {img:cycling,title:"cycling"},
      ])
  }

  return (
    <div className="progs-parent">
      <h2 className="text-center text-light my-5">Our <span className="text-success">Prog</span>rammes</h2>
      <div className="week-days">
        <p className="day" onClick={sundayprog} >Sunday</p>
        <p className="day" onClick={mondayprog} >Monday</p>
        <p className="day" onClick={tusedayprog} >Tuesday</p>
        <p className="day" onClick={wednesdayprog} >Wednesday</p>
        <p className="day" onClick={thursdayprog} >Thursday</p>
        <p className="day" onClick={fridayprog} >Friday</p>
        <p className="day" onClick={sturdayprog} >Saturday</p>
      </div>


      <div className="week-progs container">

      <div className="row">
        
    
        {progs.map(item=>
          <div className="sport  col-lg-3 col-md-6 my-1 col-sm-12">
              <img src={item.img} alt="" />
                  <h5>{item.title}</h5>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, at.</p>
                  <button className="btn btn-dark">Join Now</button>
          </div>

        )}
         
      

      </div>

      </div>
    </div>
  );
}
