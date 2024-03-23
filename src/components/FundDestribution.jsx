import React from 'react'
import SingleLine from './charts/singleLine/SingleLine';
import { colors } from '../helper/colorCodes';

function FundDestribution() {



  const data = [

    { name: 'flexi cap fund', per: 32.19, color: colors['orange'] }, { name: 'ELSS', per: 26.04, color: colors['yellow'] },
    { name: 'small cap fund', per: 24.40, color: colors['pink'] }, { name: 'index fund', per: 12.03, color: colors['voilet'] },

    { name: 'sectorial fund', per: 26.40, color: colors['cyan'] },
    { name: 'large & mid cap fund', per: 12.03, color: colors['blue'] }

  ]


  return (
    <div>
      <h1>Fund Destribution</h1>
      <p>The mutual fun Destribution represts the earnings of the fund being passed on to the individual investor or unit holder of the fund.</p>
      <div className='pt-4'><SingleLine data={data} /></div>
    </div>
  )
}

export default FundDestribution