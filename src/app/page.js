"use client"

import { useState } from "react";
import Grid from "@/components/Grid";
import ThreeScene from "@/components/ThreeScene";

export default function Home() {
  const elements1 = ["Li","Ca","Na","Mg","Ba","Cu","K","Sr"]
  const [elementIndex1, setElementIndex1] = useState(0);
  
  const colors1 = ["red",0xe8a60c,"yellow","grey","green","skyblue",0x6500a3,"0xff007b"]
  const [colorIndex1, setColorIndex1] = useState(0);



  const elements2 = ["Al","Fe","Rb"]
  const [elementIndex2, setElementIndex2] = useState(0);

  const colors2 = ["lightgray","Orange",0xff00e6]
  const [colorIndex2, setColorIndex2] = useState(0);









  const [page, setPage] = useState(0);
  const pageList = [1,2]

  const handleClick = (i)=> {
    if (page == 0) {
      setElementIndex1(i);
      setColorIndex1(i)
    } else {
      setElementIndex2(i)
      setColorIndex2(i)
    }
  }

  return (
   <div className="outer-most-container">

    <div className="title">Flame Test</div>
    <div className="scene-wrapper">
      <div className="scene-container">
        <ThreeScene color={page == 0 ? colors1[colorIndex1] : colors2[colorIndex2]}></ThreeScene>
      </div>
      <div className="current-element">Current Element : {page == 0 ? elements1[elementIndex1] : elements2[elementIndex2]}</div>
    </div>


      <Grid elements={page == 0 ? elements1 : elements2} handleClick={handleClick}></Grid>


      <div className="pagination">
        {pageList.map((e,i)=>{return(
          <div key={i} onClick={()=>{setPage(i)}} className={`pagination-element ${i == page ? 'pagination-darker' : null}`}>{e}</div>

        )})}
      </div>
   </div>
  );
}
