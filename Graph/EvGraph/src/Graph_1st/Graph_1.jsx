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
import BEV_19 from "../assets/DataJson/BEV_19.json";
import BEV_20 from "../assets/DataJson/BEV_20.json";
import BEV_21 from "../assets/DataJson/BEV_21.json";
import BEV_22 from "../assets/DataJson/BEV_22.json";
import BEV_23 from "../assets/DataJson/BEV_23.json";
import BEV_24 from "../assets/DataJson/BEV_24.json";
import HEV_19 from "../assets/DataJson/HEV_19.json";
import HEV_20 from "../assets/DataJson/HEV_20.json";
import HEV_21 from "../assets/DataJson/HEV_21.json";
import HEV_22 from "../assets/DataJson/HEV_22.json";
import HEV_23 from "../assets/DataJson/HEV_23.json";
import HEV_24 from "../assets/DataJson/HEV_24.json";

import PHEV_20 from "../assets/DataJson/PHEV_20.json";
import PHEV_21 from "../assets/DataJson/PHEV_21.json";
import PHEV_22 from "../assets/DataJson/PHEV_22.json";
import PHEV_23 from "../assets/DataJson/PHEV_23.json";
import PHEV_24 from "../assets/DataJson/PHEV_24.json";

const NewRegisChart = () => {
    // COLUMN GRAPH ******************************************

    // EV vehicle data
    const SuperChart = {
        chart: {
            type: "column",
        },
        title: {
            text: "New xEV Registration from 2019 to 2024",
            description: "จำนวนยานยนต์ไฟฟ้าที่จะจดทะเบียนใหม่",
            align: "left",
        },
        subtitle: {
            text:
                'Source: <a target="_blank" ' +
                'href="dlt.go.th">Dlt.go.th</a>',
            align: "left",
        },
        xAxis: {
            categories: [2019, 2020, 2021, 2022, 2023, 2024],
            crosshair: true,
            accessibility: {
                description: "Thailand",
            },
        },
        credits: {
            enabled: false,
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
                pointPadding: 0.2,
                borderWidth: 0,
                groupPadding: 0.15,
                dataLabels: {
                    enabled: true,
                },
            },
        },
        series: [
            {
                name: "BEV",
                data: [
                    BEV_19.total_values,
                    BEV_20.total_values,
                    BEV_21.total_values,
                    BEV_22.total_values,
                    BEV_23.total_values,
                    BEV_24.total_values,
                ],
                color: "#1ABC9C",
            },
            {
                name: "PHEV",
                data: [
                    0,
                    PHEV_20[0].total_values,
                    PHEV_21[0].total_values,
                    PHEV_22[0].total_values,
                    PHEV_23[0].total_values,
                    PHEV_24[0].total_values,
                ],
                color: "#F7DC6F",
            },
            {
                name: "HEV",
                data: [
                    0,
                    HEV_20[0].total_values,
                    HEV_21[0].total_values,
                    HEV_22[0].total_values,
                    HEV_23[0].total_values,
                    HEV_24[0].total_values,
                ],
                color: "#3498DB",
            },
            {
                name: "HEV/PHEV",
                data: [HEV_19[0].total_values],
                color: "#9B3922",
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
                        y: BEV_type.find((item) => item.ev_car_type === "CAR")
                            .total_values,
                    },
                    {
                        name: "MotorCycle",
                        sliced: true,
                        selected: true,
                        y: BEV_type.find(
                            (item) => item.ev_car_type === "MOTORCYCLE"
                        ).total_values,
                    },
                    {
                        name: "Tuk Tuk",
                        y: BEV_type.find(
                            (item) => item.ev_car_type === "TUK TUK"
                        ).total_values,
                    },
                    {
                        name: "Bus",
                        y: BEV_type.find((item) => item.ev_car_type === "BUS")
                            .total_values,
                    },
                    {
                        name: "Truck",
                        y: BEV_type.find((item) => item.ev_car_type === "TRUCK")
                            .total_values,
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
                        y: HEV_type.find((item) => item.ev_car_type === "CAR")
                            .total_values,
                    },
                    {
                        name: "MotorCycle",
                        y: HEV_type.find(
                            (item) => item.ev_car_type === "MOTORCYCLE"
                        ).total_values,
                    },
                    {
                        name: "Tuk Tuk",
                        y: HEV_type.find(
                            (item) => item.ev_car_type === "TUK TUK"
                        ).total_values,
                    },
                    {
                        name: "Bus",
                        y: HEV_type.find((item) => item.ev_car_type === "BUS")
                            .total_values,
                    },
                    {
                        name: "Truck",
                        y: HEV_type.find((item) => item.ev_car_type === "TRUCK")
                            .total_values,
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
                        y: PHEV_type.find((item) => item.ev_car_type === "CAR")
                            .total_values,
                    },
                    {
                        name: "MotorCycle",
                        sliced: true,
                        selected: true,
                        y: PHEV_type.find(
                            (item) => item.ev_car_type === "MOTORCYCLE"
                        ).total_values,
                    },
                    {
                        name: "Tuk Tuk",
                        y: PHEV_type.find(
                            (item) => item.ev_car_type === "TUK TUK"
                        ).total_values,
                    },
                    {
                        name: "Bus",
                        y: PHEV_type.find((item) => item.ev_car_type === "BUS")
                            .total_values,
                    },
                    {
                        name: "Truck",
                        y: PHEV_type.find(
                            (item) => item.ev_car_type === "TRUCK"
                        ).total_values,
                    },
                ],
            },
        ],
    };

    // Render the HighchartsReact component with the options
    return (
        <div className="chart-wrap">
            <HighchartsReact highcharts={Highcharts} options={SuperChart} />
            <h2>New xEV Registration in 2023</h2>
            <div className="pie-wrap">
                <HighchartsReact highcharts={Highcharts} options={chartPie} />
                <HighchartsReact highcharts={Highcharts} options={chartPie2} />
                <HighchartsReact highcharts={Highcharts} options={chartPie3} />
            </div>
        </div>
    );
};

export default NewRegisChart;
