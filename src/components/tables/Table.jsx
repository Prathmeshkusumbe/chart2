import React from 'react'

function Table({ ddperiod }) {

  const { status, data } = ddperiod;
  return (
    <div className='overflow-auto'>
      <div>
        { status && <div >
          <table className='ml-auto mr-auto'>
            <thead>
              <tr>
                <th className='p-2 border'>Start Date</th>
                <th className='p-2 border'>End Date</th>
                <th className='p-2 border'>Drawdown Days</th>
                <th className='p-2 border'>Trading Days</th>
                <th className='p-2 border'>Total Trades</th>
                <th className='p-2 border'>Max Drawdown</th>
                <th className='p-2 border'>Max Drawdown Date</th>
                <th className='p-2 border'>Time for Max Drawdown</th>
                <th className='p-2 border'>Time for Recovery</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) =>
                <tr>

                  <td className='p-2 border text-center'>{item.Start_Date}</td>
                  <td className='p-2 border text-center'>{item.End_Date}</td>
                  <td className='p-2 border text-center'>{item.Drawdown_days}</td>
                  <td className='p-2 border text-center'>{item.Trading_days}</td>
                  <td className='p-2 border text-center'>{item.Total_Trades}</td>
                  <td className='p-2 border text-center'>{Math.round(item.Max_Drawdown)}</td>
                  <td className='p-2 border text-center'>{item.Max_Drawdown_Date}</td>
                  <td className='p-2 border text-center'>{item.Time_for_max_drawdown}</td>
                  <td className='p-2 border text-center'>{item.Time_for_recovery}</td>

                </tr>
              )}
            </tbody>
          </table>
        </div> }
      </div>
    </div>
  )
}

export default Table


function checkValue(value){
  if(typeof value == 'number'){
    return Math.round(value);
  }
  return value
}