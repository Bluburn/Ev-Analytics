import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import drilldown from "highcharts/modules/drilldown";
import "./Graph_1.css";
import BEV from "../assets/DataAgg/BEV_year.json";
import HEV from "../assets/DataAgg/HEV_year.json";
import PHEV from "../assets/DataAgg/PHEV_year.json";
import BEV_type from "../assets/DataAgg/BEV_type.json";
import PHEV_type from "../assets/DataAgg/PHEV_type.json";
import HEV_type from "../assets/DataAgg/HEV_type.json";

const NewRegisChart = () => {

    const BEV_mn = {};
    BEV.forEach((data) => {
        const { month, year, total_values } = data;
        const monthName = getMonthName(month);
        if (!BEV_mn[year]) {
            BEV_mn[year] = {};
        }
        BEV_mn[year][monthName] = total_values;
    });
    
    console.log(BEV_mn); 

    let BEV_m = [];
    let HEV_m = [];
    let PHEV_m = [];

    let startYear = 2018; // Specify the start year
    let endYear = 2024; // Specify the end year for drilldown data
    const monthlyTotalValues = {};

        for (let year = startYear; year <= endYear; year++) {
            for (let i = 1; i <= 12; i++) {
                let monthData = BEV.find(
                    (data) => data._id.month === i && data._id.year === year
                );
                if (monthData) {
                    const monthName = getMonthName(i);
                    if (!monthlyTotalValues[monthName]) {
                        monthlyTotalValues[monthName] = 0;
                    }
                    monthlyTotalValues[monthName] += monthData.total_values;
                }
            }
        }

// Now monthlyTotalValues contains the sum of total_values for each month across the specified years
// You can use this data as needed in your chart or application

    //BEV DATA
    for (let year = startYear; year <= endYear; year++) {
        for (let i = 1; i <= 12; i++) {
            let monthData = BEV.find(
                (data) => data._id.month === i && data._id.year === year
            );
            if (monthData) {
                BEV_m.push({
                    name: getMonthName(i),
                    y: monthData.total_values,
                });
            } else {
                BEV_m.push({ name: getMonthName(i), y: 0 }); // If there's no value for the month, push 0 to the series
            }
        }
    }

    //HEV DATA
    for (let year = startYear; year <= endYear; year++) {
        for (let i = 1; i <= 12; i++) {
            let monthData = HEV.find(
                (data) => data._id.month === i && data._id.year === year
            );
            if (monthData) {
                HEV_m.push({
                    name: getMonthName(i),
                    y: monthData.total_values,
                });
            } else {
                HEV_m.push({ name: getMonthName(i), y: 0 }); // If there's no value for the month, push 0 to the series
            }
        }
    }

    //PHEV DATA
    for (let year = startYear; year <= endYear; year++) {
        for (let i = 1; i <= 12; i++) {
            let monthData = PHEV.find(
                (data) => data._id.month === i && data._id.year === year
            );
            if (monthData) {
                PHEV_m.push({
                    name: getMonthName(i),
                    y: monthData.total_values,
                });
            } else {
                PHEV_m.push({ name: getMonthName(i), y: 0 }); // If there's no value for the month, push 0 to the series
            }
        }
    }

    function getMonthName(monthIndex) {
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        return months[monthIndex - 1];
    }

    // EV vehicle data
    const SuperChart = {
        chart: {
            type: "column",
            events: {
                drilldown: function (e) {
                    if (!e.seriesOptions) {
                        const chart = this;
                        const drilldowns = {
                            2018: {
                                name: "BEV",
                                data: BEV_m.slice(0, 12),
                            },
                            2019: {
                                name: "HEV",
                                data: BEV_m.slice(12, 24),
                            },
                            2020: {
                                name: "PHEV",
                                data: BEV_m.slice(24, 36),
                            },
                            2021: {
                                name: "PHEV",
                                data: BEV_m.slice(24, 36),
                            },
                            2022: {
                                name: "PHEV",
                                data: BEV_m.slice(24, 36),
                            },
                            2023: {
                                name: "PHEV",
                                data: BEV_m.slice(24, 36),
                            },
                        };

                        chart.addSingleSeriesAsDrilldown(
                            e.point,
                            drilldowns[e.point.name]
                        );
                        chart.applyDrilldown();
                    }
                },
            },
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        title: {
            text: "Sales Data",
        },
        xAxis: {
            type: "category",
        },
        yAxis: {
            title: {
                text: "Total Sales",
            },
        },
        series: [
            {
                name: "BEV",
                data: [
                    {
                        name: "2018",
                        y: 100,
                        drilldown: true,
                    },
                    {
                        name: "2019",
                        y: 150,
                        drilldown: true,
                    },
                    {
                        name: "2020",
                        y: 200,
                        drilldown: true,
                    },
                    {
                        name: "2021",
                        y: 220,
                        drilldown: true,
                    },
                    {
                        name: "2022",
                        y: 220,
                        drilldown: true,
                    },
                    {
                        name: "2023",
                        y: 220,
                        drilldown: true,
                    },
                ],
            },
            {
                name: "HEV",
                data: [
                    {
                        name: "2018",
                        y: 120,
                        drilldown: true,
                    },
                    {
                        name: "2019",
                        y: 180,
                        drilldown: true,
                    },
                    {
                        name: "2020",
                        y: 220,
                        drilldown: true,
                    },
                    {
                        name: "2021",
                        y: 220,
                        drilldown: true,
                    },
                    {
                        name: "2022",
                        y: 220,
                        drilldown: true,
                    },
                    {
                        name: "2023",
                        y: 220,
                        drilldown: true,
                    },
                ],
            },
            {
                name: "PHEV",
                data: [
                    {
                        name: "2018",
                        y: 100,
                        drilldown: true,
                    },
                    {
                        name: "2019",
                        y: 150,
                        drilldown: true,
                    },
                    {
                        name: "2020",
                        y: 200,
                        drilldown: true,
                    },
                    {
                        name: "2021",
                        y: 220,
                        drilldown: true,
                    },
                    {
                        name: "2022",
                        y: 220,
                        drilldown: true,
                    },
                    {
                        name: "2023",
                        y: 220,
                        drilldown: true,
                    },
                ],
            },
        ],
    };

    // PIE GRAPH ******************************************

    // BEV GRAPH
    const chartPie = {
        chart: {
            type: "pie",
        },
        title: {
            text: "BEV",
        },
        tooltip: {
            valueSuffix: " Units",
        },
        credits: {
            enabled: false,
        },
        plotOptions: {
            series: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: [
                    {
                        enabled: true,
                        distance: 10,
                    },
                    {
                        enabled: true,
                        distance: -40,
                        format: "{point.y:1f}",
                        style: {
                            fontSize: "1.2em",
                            textOutline: "none",
                            opacity: 0.7,
                        },
                        filter: {
                            operator: ">",
                            property: "percentage",
                            value: 10,
                        },
                    },
                ],
            },
        },
        series: [
            {
                name: "Percentage",
                colorByPoint: true,
                data: [
                    {
                        name: "Car",
                        y: BEV_type.find(item => item.ev_car_type === "CAR").total_values,
                    },
                    {
                        name: "MotorCycle",
                        sliced: true,
                        selected: true,
                        y: BEV_type.find(item => item.ev_car_type === "MOTORCYCLE").total_values,
                    },
                    {
                        name: "Tuk Tuk",
                        y: BEV_type.find(item => item.ev_car_type === "TUK TUK").total_values,
                    },
                    {
                        name: "Bus",
                        y: BEV_type.find(item => item.ev_car_type === "BUS").total_values,
                    },
                    {
                        name: "Truck",
                        y: BEV_type.find(item => item.ev_car_type === "TRUCK").total_values,
                    },
                ],
            },
        ],
    };

    //HEV GRAPH
    const chartPie2 = {
        chart: {
            type: "pie",
        },
        credits: {
            enabled: false,
        },
        title: {
            text: "HEV",
        },
        tooltip: {
            valueSuffix: " Units",
        },
        plotOptions: {
            series: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: [
                    {
                        enabled: true,
                        distance: 20,
                    },
                    {
                        enabled: true,
                        distance: -40,
                        format: "{point.y:1f}",
                        style: {
                            fontSize: "1.2em",
                            textOutline: "none",
                            opacity: 0.7,
                        },
                        filter: {
                            operator: ">",
                            property: "percentage",
                            value: 10,
                        },
                    },
                ],
            },
        },
        series: [
            {
                name: "Percentage",
                colorByPoint: true,
                data: [
                    {
                        name: "Car",
                        sliced: true,
                        selected: true,
                        y: HEV_type.find(item => item.ev_car_type === "CAR").total_values,
                    },
                    {
                        name: "MotorCycle",
                        y: HEV_type.find(item => item.ev_car_type === "MOTORCYCLE").total_values,
                    },
                    {
                        name: "Tuk Tuk",
                        y: HEV_type.find(item => item.ev_car_type === "TUK TUK").total_values,
                    },
                    {
                        name: "Bus",
                        y: HEV_type.find(item => item.ev_car_type === "BUS").total_values,
                    },
                    {
                        name: "Truck",
                        y: HEV_type.find(item => item.ev_car_type === "TRUCK").total_values,
                    },
                ],
            },
        ],
    };

    // PHEV GRAPH
    const chartPie3 = {
        chart: {
            type: "pie",
        },
        title: {
            text: "PHEV",
        },
        tooltip: {
            valueSuffix: " Units",
        },
        credits: {
            enabled: false,
        },
        plotOptions: {
            series: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: [
                    {
                        enabled: true,
                        distance: 20,
                    },
                    {
                        enabled: true,
                        distance: -40,
                        format: "{point.y:1f}",
                        style: {
                            fontSize: "1.2em",
                            textOutline: "none",
                            opacity: 0.7,
                        },
                        filter: {
                            operator: ">",
                            property: "percentage",
                            value: 10,
                        },
                    },
                ],
            },
        },
        series: [
            {
                name: "Percentage",
                colorByPoint: true,
                data: [
                    {
                        name: "Car",
                        y: PHEV_type.find(item => item.ev_car_type === "CAR").total_values,
                    },
                    {
                        name: "MotorCycle",
                        sliced: true,
                        selected: true,
                        y: PHEV_type.find(item => item.ev_car_type === "MOTORCYCLE").total_values,
                    },
                    {
                        name: "Tuk Tuk",
                        y: PHEV_type.find(item => item.ev_car_type === "TUK TUK").total_values,
                    },
                    {
                        name: "Bus",
                        y: PHEV_type.find(item => item.ev_car_type === "BUS").total_values,
                    },
                    {
                        name: "Truck",
                        y: PHEV_type.find(item => item.ev_car_type === "TRUCK").total_values,
                    },
                ],
            },
        ],
    };

    // Render the HighchartsReact component with the options
    return (
        <div className="chart-wrap">
            <div className="pie-wrap">
                <HighchartsReact highcharts={Highcharts} options={chartPie} />
                <HighchartsReact highcharts={Highcharts} options={chartPie2} />
                <HighchartsReact highcharts={Highcharts} options={chartPie3} />
            </div>
            <HighchartsReact highcharts={Highcharts} options={SuperChart} />
        </div>
    );
};

export default NewRegisChart;
