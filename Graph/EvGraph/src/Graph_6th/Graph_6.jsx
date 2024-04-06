import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import model_2023 from "../assets/carmodel/Model_2023.json"

const Car_Brand = () => {

    var mockup = [];
    model_2023.forEach(function (item) {
        mockup.push({
            name: item._id,
            y: item.total_values,
        });
    });
    console.log(mockup);

    const chartBarRaceEV_brands = {
        chart: {
            height: 800,
            animation: {
                duration: 500,
            },
            marginRight: 50,
        },
        title: {
            text: "New xEV Registration",
            align: "left",
        },
        subtitle: {
            useHTML: true,
            floating: true,
            align: "right",
            verticalAlign: "middle",
            y: -80,
            x: -100,
        },

        legend: {
            enabled: false,
        },
        xAxis: {
            type: "category",
            max: 9, // กำหนดให้แสดงแค่ 10 อันดับแรก
        },
        yAxis: {
            opposite: true,
            tickPixelInterval: 150,
            title: {
                text: null,
            },
        },
        plotOptions: {
            series: {
                animation: false,
                groupPadding: 0,
                pointPadding: 0.1,
                borderWidth: 0,
                colorByPoint: true,
                dataSorting: {
                    enabled: true,
                    matchByName: true,
                },
                type: "bar",
                dataLabels: {
                    enabled: true,
                },
            },
        },
        credits: {
            enabled: false,
        },
        series: [
            {
                type: "bar",
                data: mockup,
            },
        ],
        responsive: {
            rules: [
                {
                    condition: {
                        maxWidth: 550,
                    },
                    chartOptions: {
                        xAxis: {
                            visible: false,
                        },
                        subtitle: {
                            x: 0,
                        },
                        plotOptions: {
                            series: {
                                dataLabels: [
                                    {
                                        enabled: true,
                                        y: 8,
                                    },
                                    {
                                        enabled: true,
                                        format: "{point.name}",
                                        y: -8,
                                        style: {
                                            fontWeight: "normal",
                                            opacity: 0.7,
                                        },
                                    },
                                ],
                            },
                        },
                    },
                },
            ],
        },
    };

    return (
        <div className="white-background">
            <HighchartsReact
                highcharts={Highcharts}
                options={chartBarRaceEV_brands}
            />
        </div>
    );
};

export default Car_Brand;