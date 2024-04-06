import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./Graph_2.css";
import BEVm from "../assets/DataAgg/BEV_year.json";
import HEVm from "../assets/DataAgg/HEV_year.json";
import PHEVm from "../assets/DataAgg/PHEV_year.json";

const generateSeriesData = (vehicleData, year) => {
    const seriesData = [];

    for (let i = 1; i <= 12; i++) {
        const monthData = vehicleData.find(
            (data) => data._id.month === i && data._id.year === year
        );
        seriesData.push(monthData ? monthData.total_values : 0);
    }

    return seriesData;
};

const NewEvMonth = () => {
    const BEV_m23 = generateSeriesData(BEVm, 2023);
    const HEV_m23 = generateSeriesData(HEVm, 2023);
    const PHEV_m23 = generateSeriesData(PHEVm, 2023);

    const BEV_m24 = generateSeriesData(BEVm, 2024);
    const HEV_m24 = generateSeriesData(HEVm, 2024);
    const PHEV_m24 = generateSeriesData(PHEVm, 2024);

    const chartOptions = (title, seriesData) => ({
        chart: {
            type: "column",
        },
        credits: {
            enabled: false,
        },
        title: {
            text: title,
            align: "left",
        },
        subtitle: {
            text: 'Source: <a target="_blank" ' +
                'href="https://evat.or.th/ev-information/current-status/index">Evat.or.th</a>',
            align: "left",
        },
        xAxis: {
            categories: [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ],
            crosshair: true,
            accessibility: {
                description: "Thailand",
            },
        },
        yAxis: {
            min: 0,
            title: {
                text: "Number of Vehicles (Units)",
            },
        },
        tooltip: {
            valueSuffix: " Unit",
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                groupPadding: 0.15,
                dataLabels: {
                    enabled: true,
                },
            },
        },
        series: seriesData,
    });

    // PIE GRAPH 2024

const Pie = {
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
                    format: "{point.percentage:.1f}%",
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
                    y: 1834
                },
                {
                    name: "MotorCycle",
                    sliced: true,
                    selected: true,
                    y: 0
                },
                {
                    name: "Tuk Tuk",
                    y: 0
                },
                {
                    name: "Bus",
                    y: 0
                },
                {
                    name: "Truck",
                    y: 0
                },
            ],
        },
    ],
};

//HEV GRAPH
const Pie2 = {
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
                    format: "{point.percentage:.1f}%",
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
                    y: 26085
                },
                {
                    name: "MotorCycle",
                    y: 49
                },
                {
                    name: "Tuk Tuk",
                    y: 0
                },
                {
                    name: "Bus",
                    y: 0
                },
                {
                    name: "Truck",
                    y: 0
                },
            ],
        },
    ],
};

// PHEV GRAPH
const Pie3 = {
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
                    format: "{point.percentage:.1f}%",
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
                    y: 17329
                },
                {
                    name: "MotorCycle",
                    sliced: true,
                    selected: true,
                    y: 4840
                },
                {
                    name: "Tuk Tuk",
                    y: 5
                },
                {
                    name: "Bus",
                    y: 39
                },
                {
                    name: "Truck",
                    y: 65
                },
            ],
        },
    ],
};

    const NewEvM23 = chartOptions("New xEV Registration in 2023", [
        { name: "BEV", data: BEV_m23, color: "#1ABC9C" },
        { name: "PHEV", data: PHEV_m23, color: "#F7DC6F" },
        { name: "HEV", data: HEV_m23, color: "#3498DB" },
    ]);

    const NewEvM24 = chartOptions("New xEV Registration in 2024", [
        { name: "BEV", data: BEV_m24, color: "#1ABC9C" },
        { name: "PHEV", data: PHEV_m24, color: "#F7DC6F" },
        { name: "HEV", data: HEV_m24, color: "#3498DB" },
    ]);

    return (
        <div className="chart-wrap">
            <HighchartsReact highcharts={Highcharts} options={NewEvM23} />
            <br />
            <h2>New xEV Registration in 2024</h2>
            <div className="pie-wrap">
                <HighchartsReact highcharts={Highcharts} options={Pie} />
                <HighchartsReact highcharts={Highcharts} options={Pie2} />
                <HighchartsReact highcharts={Highcharts} options={Pie3} />
            </div>
            <HighchartsReact highcharts={Highcharts} options={NewEvM24} />
        </div>
    );
};

export default NewEvMonth;
