import React from 'react'
import { generateNewColor } from '../../../helper/color-generator';
function SingleLine({data}) {



  return (
    <div>
      <div className='flex'>
        {data.map((ele)=>
          subSection(ele)
        )}
      </div>


    </div>
  )
}

export default SingleLine

function subSection(ele){
  const {per, name, color} = ele;
  //const color = generateNewColor();
  return <>
    <div style={{ backgroundColor:color,width:`${per}%`}} className='h-3'></div>
  </>
}