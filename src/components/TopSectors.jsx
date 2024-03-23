import React from 'react'
import Boxes from './charts/boxes/Boxes'

function TopSectors() {
  return (
    <div>
      <div>
        <h1>Top Sectors</h1>
        <p>The assets are distributed between the equity and cash equivalent.</p>
        <div className='pt-4'><Boxes /></div>
      </div>
    </div>
  )
}

export default TopSectors