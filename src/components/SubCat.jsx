import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from 'react-chartjs-2';
import { colors } from '../helper/colorCodes';


function SubCat() {
  ChartJS.register(ArcElement, Tooltip, Legend);


  const data1 = {
    labels: ['flexi cap fund','ELSS', 'small cap fund', 'index fund', 'sectorial fund', 'large & mid cap fund'],
    datasets: [
      {
        data: [32.19, 26.04, 24.40, 12.03, 26.40,12.03],
        backgroundColor: [colors['orange'],
        colors['yellow'],
        colors['pink'],
        colors['voilet'],
        colors['cyan'],
        colors['blue']],
        hoverBackgroundColor: [colors['orange'],
        colors['yellow'],
        colors['pink'],
        colors['voilet'],
        colors['cyan'],
        colors['blue']],
      },
    ],
  };
  return (
    <div >
      <div>
        <h1>Sub Category</h1>
        <p>The assets are distributed between equity and cash quivalent.</p>
      </div>
      <div className='max-w-[400px] pt-4 '>
        <Pie data={data1} />
      </div>
    </div>
  )
}

export default SubCat