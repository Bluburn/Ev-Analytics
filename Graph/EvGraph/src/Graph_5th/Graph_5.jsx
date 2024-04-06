import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useState, useEffect } from "react";
import station_data from "../assets/DataAgg/ev_station.json";


const StationBrand = () => {

//CURRENT TIME by now
    const CurrentTime = () => {
        const [currentTime, setCurrentTime] = useState(new Date());

        useEffect(() => {
            const intervalId = setInterval(() => {
                setCurrentTime(new Date());
            }, 1000); // Update every second

            return () => clearInterval(intervalId);
        }, []);

        return `<span style="font-size: 80px">${CurrentTime}</span>
                        <br>
                        <span style="font-size: 22px">
                            Total: <b>: ${population}</b> billion
                        </span>`;
    };

    const partyData = station_data[0];
//TOTAL STATION SUMs
    let totalStation = 0;
    for (const key in partyData) {
        if (partyData[key].count) {
            totalStation += partyData[key].count;
        }
    }

    const Brand_race = {
        chart: {
            height: 800,
            animation: {
                duration: 500,
            },
            marginRight: 50,
        },
        title: {
            text: "EV Charging Station Growth",
            align: "left",
        },
        subtitle: {
            useHTML: true,
            text: "",
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
                animation: true,
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
                data: [
                    {
                        name: "Total Stations",
                        y: totalStation,
                    },
                    {
                        name: partyData.uuid_1.ev_station_party_info.Party_Name,
                        y: partyData.uuid_1.count,
                    },
                    {
                        name: partyData.uuid_2.ev_station_party_info.Party_Name,
                        y: partyData.uuid_2.count,
                    },
                    {
                        name: partyData.uuid_3.ev_station_party_info.Party_Name,
                        y: partyData.uuid_3.count,
                    },
                    {
                        name: partyData.uuid_4.ev_station_party_info.Party_Name,
                        y: partyData.uuid_4.count,
                    },
                    {
                        name: partyData.uuid_5.ev_station_party_info.Party_Name,
                        y: partyData.uuid_5.count,
                    },
                    {
                        name: partyData.uuid_6.ev_station_party_info.Party_Name,
                        y: partyData.uuid_6.count,
                    },
                    {
                        name: partyData.uuid_7.ev_station_party_info.Party_Name,
                        y: partyData.uuid_7.count,
                    },
                    {
                        name: partyData.uuid_8.ev_station_party_info.Party_Name,
                        y: partyData.uuid_8.count,
                    },
                    {
                        name: partyData.uuid_9.ev_station_party_info.Party_Name,
                        y: partyData.uuid_9.count,
                    },
                    {
                        name: partyData.uuid_10.ev_station_party_info
                            .Party_Name,
                        y: partyData.uuid_10.count,
                    },
                    {
                        name: partyData.uuid_11.ev_station_party_info
                            .Party_Name,
                        y: partyData.uuid_11.count,
                    },
                    {
                        name: partyData.uuid_12.ev_station_party_info
                            .Party_Name,
                        y: partyData.uuid_12.count,
                    },
                    {
                        name: partyData.uuid_13.ev_station_party_info
                            .Party_Name,
                        y: partyData.uuid_13.count,
                    },
                    {
                        name: partyData.uuid_14.ev_station_party_info
                            .Party_Name,
                        y: partyData.uuid_14.count,
                    },
                    {
                        name: partyData.uuid_15.ev_station_party_info
                            .Party_Name,
                        y: partyData.uuid_15.count,
                    },
                ],
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

    const chartDCConnectors = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
        },
        title: {
            style: {
                color: "#ff0000",
                fontSize: "18px",
                fontWeight: "bold",
            },
            text: "No. of installed DC Connectors",
            align: "center",
        },
        credits: {
            enabled: false,
        },
        tooltip: {
            headerFormat:
                '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat:
                '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b>',
            accessibility: {
                announceNewData: {
                    enabled: true,
                },
                point: {
                    valueSuffix: "%",
                },
            },
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                borderRadius: 5,
                dataLabels: {
                    enabled: true,
                    format: "<b>{point.name}</b><br>{point.y}<br>{point.percentage:.1f} %",
                    distance: -50,
                },
                showInLegend: true,
            },
        },
        series: [
            {
                type: "pie",
                name: "Type",
                data: [
                    {
                        name: "DC CCS2",
                        y: 1471,
                        color: "#0074FF",
                    },
                    {
                        name: "DC CHAdeMo",
                        y: 324,
                        color: "#FFAE00",
                    },
                ],
                size: 250,
                innerSize: "0%",
                showInLegend: true,
                dataLabels: {
                    enabled: true,
                },
            },
        ],
    }; // Empty dependency array means this effect runs once, similar to componentDidMount

    if (!Brand_race) {
        return <div>Loading...</div>;
    }

    return (
        <div className="chart-wrap">
            <HighchartsReact highcharts={Highcharts} options={Brand_race} />
        </div>
    );
};

export default StationBrand;
