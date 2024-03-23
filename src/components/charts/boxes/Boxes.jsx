import React from 'react'
import { colors } from '../../../helper/colorCodes'

function Boxes() {

  const data = [

    { name: 'Oil & Gas', per: 40, color: colors['orange'] }, { name: 'private bank', per: 60, color: colors['yellow'] },
    { name: 'pharmaciticals', per: 60, color: colors['pink'] }, { name: 'construnction', per: 40, color: colors['voilet'] },

    { name: 'Power Generation', per: 60, color: colors['cyan'] },
    { name: 'Power Generation', per: 20, color: colors['pink'] },
    { name: 'other', per: 20, color: colors['blue'] }

  ]


  return (
    <div>
      <div>
        <div className='flex flex-wrap'>
          {data.map((ele,i)=>

            <div style={{width:`${ele.per}%`, backgroundColor:ele.color}} className='h-8'></div>

          )}
        </div>
      </div>
    </div>
  )
}

export default Boxes