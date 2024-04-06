import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './Graph_4.css';

const EvStationRatio = () => {

    const EvCar_Station = {
        
        chart: {
            type: 'line',
            height: 600
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'EV & Infrastructure Ratios'
        },
        xAxis: {
            categories: [2019, 2020, 2021, 2022, 2023]
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [
            {
                name: "EV/Station",
                data: [0, 3.4, 4.12, 11.13, 74.11],
            },

            {
                name: "EV/AC Connector",
                data: [0, 3.14, 3.43, 10.39, 38.16],
            },

            {
                name: "EV/DC Connector",
                data: [0, 1.8, 1.88, 5.74, 43.45],
            },
        ],

    }


  // Render the HighchartsReact component with the options
  return (
    <div className='chart-wrap'>
          <HighchartsReact highcharts={Highcharts} options={EvCar_Station} />
    </div>
  );
};

export default EvStationRatio;
