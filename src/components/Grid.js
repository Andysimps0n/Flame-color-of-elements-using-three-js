"use client"

import React from 'react'
import { useState } from "react";

function Grid(props) {

  
  return (
    <div className="elements-grid">
      {props.elements.map((e,i)=>{
        return(
          <div key={i} className="grid-element" onClick={()=>{props.handleClick(i)}}>{e}</div>
        )
      })}
    </div>
  )
}

export default Grid
