import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import returnData from './data/returns.json'
import Table from './components/tables/Table';
import ddperiod from './data/ddperiod.json'
//import logo from './matic-logo.png'


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [45, 689, 96, 5478, 69, 60, ,548],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};



const combinedData = returnData.data.combined;
console.log(ddperiod, 'testp');
const datesFromCata = combinedData.map((c)=> c.date);
const pnlFromCdata = combinedData.map((c) => c.pnl);




export const data2 = {
  labels:datesFromCata,
  datasets: [
    {
      label: 'Dataset 3',
      data: pnlFromCdata,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export default function App() {

  return (
    <div className=' pt-10 pl-[30px] pb-10 pr-[30px]'>
      <div className='relative overflow-auto ml-auto mr-auto w-full sm:max-w-[800px] pb-4'>
        <img className='opacity-50 w-[200px] absolute right-3 bottom-24' src='/matic-logo.png' />
        <div className='relative'><Line options={options} data={data2} /></div>
      </div>
      <Table ddperiod={ddperiod}/>
    </div>)
}
