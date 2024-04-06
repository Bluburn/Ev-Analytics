import React from 'react'
import ReactDOM from 'react-dom/client'
import NewRegisChart from './Graph_1st/Graph_1.jsx'
import NewEvMonth from './Graph_2nd/Graph_2.jsx'
import HChargeTarget from './Graph_3rd/Graph_3.jsx'
import EvStationRatio from './Graph_4th/Graph_4.jsx'
import StationBrand from './Graph_5th/Graph_5.jsx'
import Car_Brand from './Graph_6th/Graph_6.jsx'
import CarSumChart from './Graph_7th/Graph_7.jsx'



import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewRegisChart/>
    <br />
    <NewEvMonth/>
    <br />
    <HChargeTarget />
    <br />
    <StationBrand />
    <br />
    <Car_Brand />
    <EvStationRatio />
    <br />
    <CarSumChart />
  </React.StrictMode>,
)
