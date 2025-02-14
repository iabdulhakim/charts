"use client"
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

function PieChart() {
    const [data, setData] = useState(
        {
            series: [44, 55, 13, 43, 22],
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        }
    )

    return (
        <div>
            <div>
                <div id="chart">
                    <ReactApexChart options={data.options} series={data.series} type="pie" width={500} />
                </div>
                <div id="html-dist"></div>
            </div>
        </div>
    )
}

export default PieChart