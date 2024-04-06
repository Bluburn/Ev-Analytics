import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import AccumData from "../assets/AccuData/AcData.json"

const CarSumChart = () => {
    // BEV
    const chartBEV = {
        chart: {
            type: "pie",
        },
        title: {
            text: "BEV",
        },
        tooltip: {
            valueSuffix: " Unit",
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
        credits: {
            enabled: false,
        },
        series: [
            {
                name: "Percentage",
                colorByPoint: true,
                data: [
                    {
                        name: "Car",
                        y: 32263,
                    },
                    {
                        name: "MotorCycle",
                        sliced: true,
                        selected: true,
                        y: 23375,
                    },
                    {
                        name: "Tuk Tuk",
                        y: 600,
                    },
                    {
                        name: "Bus",
                        y: 1915,
                    },
                    {
                        name: "Truck",
                        y: 79,
                    },
                ],
            },
        ],
    };

    //PHEV Graph
    const chartPHEV = {
        chart: {
            type: "pie",
        },
        title: {
            text: "PHEV",
        },
        tooltip: {
            valueSuffix: " Unit",
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
        credits: {
            enabled: false,
        },
        series: [
            {
                name: "Percentage",
                colorByPoint: true,
                data: [
                    {
                        name: "Car",
                        y: 46532,
                    },
                    {
                        name: "MotorCycle",
                        sliced: true,
                        selected: true,
                        y: 0,
                    },
                    {
                        name: "Tuk Tuk",
                        y: 0,
                    },
                    {
                        name: "Bus",
                        y: 0,
                    },
                    {
                        name: "Truck",
                        y: 0,
                    },
                ],
            },
        ],
    };

    // HEV
    const chartHEV = {
        chart: {
            type: "pie",
        },
        title: {
            text: "HEV",
        },
        tooltip: {
            valueSuffix: " Unit",
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
        credits: {
            enabled: false,
        },
        series: [
            {
                name: "Percentage",
                colorByPoint: true,
                data: [
                    {
                        name: "Car",
                        y: 280924,
                    },
                    {
                        name: "MotorCycle",
                        sliced: true,
                        selected: true,
                        y: 9129,
                    },
                    {
                        name: "Tuk Tuk",
                        y: 0,
                    },
                    {
                        name: "Bus",
                        y: 2,
                    },
                    {
                        name: "Truck",
                        y: 0,
                    },
                ],
            },
        ],
    };

    const columnSumCarChart = {
        chart: {
            type: "column",
        },
        title: {
            text: "Accumulated of xEV Registration from 2018 to 2024",
            align: "left",
        },
        subtitle: {
            text:
                'Source: <a target="_blank" ' +
                'href="Dlt.go.th">Dlt.go.th</a>',
            align: "left",
        },
        xAxis: {
            categories: [
                "2019",
                "2020",
                "2021",
                "2022",
                "2023",
                "2024",
            ],
            crosshair: true,
            accessibility: {
                description: "",
            },
        },
        yAxis: {
            min: 0,
            title: {
                text: "Number of Vehicles (Unit)",
            },
        },
        tooltip: {
            valueSuffix: " Unit",
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                borderWidth: 0,
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
                name: "PHEV",
                data: [ 
                    AccumData.find((item) => item.name === "PHEV" && item._id === 2019 ).total_values, 
                    AccumData.find((item) => item.name === "PHEV" && item._id === 2020 ).total_values, 
                    AccumData.find((item) => item.name === "PHEV" && item._id === 2021 ).total_values, 
                    AccumData.find((item) => item.name === "PHEV" && item._id === 2022 ).total_values, 
                    AccumData.find((item) => item.name === "PHEV" && item._id === 2023 ).total_values, 
                    AccumData.find((item) => item.name === "PHEV" && item._id === 2024 ).total_values, 
                ],
            },
            {
                name: "BEV",
                data: [ 
                    AccumData.find((item) => item.name === "BEV" && item._id === 2019 ).total_values, 
                    AccumData.find((item) => item.name === "BEV" && item._id === 2020 ).total_values, 
                    AccumData.find((item) => item.name === "BEV" && item._id === 2021 ).total_values, 
                    AccumData.find((item) => item.name === "BEV" && item._id === 2022 ).total_values, 
                    AccumData.find((item) => item.name === "BEV" && item._id === 2023 ).total_values, 
                    AccumData.find((item) => item.name === "BEV" && item._id === 2024 ).total_values,
                ],
            },
            {
                name: "HEV",
                data: [ 
                    AccumData.find((item) => item.name === "HEV" && item._id === 2019 ).total_values, 
                    AccumData.find((item) => item.name === "HEV" && item._id === 2020 ).total_values, 
                    AccumData.find((item) => item.name === "HEV" && item._id === 2021 ).total_values, 
                    AccumData.find((item) => item.name === "HEV" && item._id === 2022 ).total_values, 
                    AccumData.find((item) => item.name === "HEV" && item._id === 2023 ).total_values, 
                    AccumData.find((item) => item.name === "HEV" && item._id === 2024 ).total_values, 
                ],
            },
            {
                name: "PHEV",
                data: [153184]
            }
        ],
    };

    return (
        <div className="chart-wrap">
            <h2>Accumulated of xEV Registration in 2023</h2>
            <div className="pie-wrap">
                <HighchartsReact highcharts={Highcharts} options={chartBEV} />
                <HighchartsReact highcharts={Highcharts} options={chartHEV} />
                <HighchartsReact highcharts={Highcharts} options={chartPHEV} />
            </div>
            <HighchartsReact highcharts={Highcharts} options={columnSumCarChart} />
        </div>
    );
};

export default CarSumChart;
