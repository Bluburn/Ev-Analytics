import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './Graph_3.css';

const HChargeTarget = () => {

    const Charge_Adp = {
        
        chart: {
            type: 'column',
            height: 600
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Installed Charging Connectors vs. Targets'
        },
        xAxis: {
            categories: [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035]
        },
        yAxis: [{
            min: 0,
            title: {
                text: 'Quantity'
            }
        }, {
            title: {
                text: ''
            },
            opposite: true
        }],
        legend: {
            shadow: false
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    y: -10
                }
            }
        },
        series: [{
            name: 'Actual',
            color: '#4CCD99',
            data: [
                0, 0, 1342, 1795
            ],
            tooltip: {
                valueSuffix: ' Unit'
            },
            pointPadding: 0.25,
            pointPlacement: 0.05,
            yAxis: 1
        }, {
            name: 'Target',
            color: '#007F73',
            data: [
                0, 880, 1760, 
                2640, 3520, 4400, 
                5920, 7440, 8960, 
                10480, 12000, 16900, 
                21800, 26700, 31600, 36500
            ],
            tooltip: {
                valueSuffix: ' Unit'
            },
            pointPadding: 0.25,
            pointPlacement: 0.4,
            yAxis: 1
        }]

    }


  // Render the HighchartsReact component with the options
  return (
    <div className='chart-wrap'>
          <HighchartsReact highcharts={Highcharts} options={Charge_Adp} />
    </div>
  );
};

export default HChargeTarget;
