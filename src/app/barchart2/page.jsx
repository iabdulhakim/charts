"use client"
import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

function BarChart2() {


    const [data, setData] = useState({
        series: [{
            data: [],
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    borderRadiusApplication: 'end',
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: [],
            }
        },

    }
    )

    useEffect(() => {
        let allArea = [];
        let allName = [];

        fetch('https://restcountries.com/v3.1/all')
            .then((data) => data.json())
            .then((countries) => {
                const names = countries.sort((a, b) => b.area - a.area).map((country) => {
                    return country.name.common;
                });

                const areas = countries.sort((a, b) => b.area - a.area).map((country) => {
                    return country.area;
                })

                setData({
                    series: [
                        {
                            data: areas,
                        }
                    ],
                    options: {
                        ...data.options,
                        xaxis: {
                            categories: names,
                        },
                    }
                })
            });


    }, []);


    return (
        <div>
            <div>
            <h2 className="text-3xl font-semibold text-center">Biggest countires in the world</h2>
                <div id="chart">
                    <ReactApexChart options={data.options} series={data.series} type="bar" height={3500} width={1200} />
                </div>
                <div id="html-dist"></div>
            </div>
        </div>
    )
}

export default BarChart2;