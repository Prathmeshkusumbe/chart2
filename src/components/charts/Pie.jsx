import React from 'react'
import { Doughnut } from 'react-chartjs-2'


function Pie({data}) {

  return (
    <div><Doughnut data={data} /></div>
  )
}

export default Pie