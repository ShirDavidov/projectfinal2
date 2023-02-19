// developers:
// Mor Yossef 209514264
// Shir Davidov 318852159
// Rinat Polonski 313530842

import {useEffect, useRef, useState} from 'react';
import Chart from 'chart.js/auto';
import {myLocalStorage} from './localstorgehandle';

function Years() {
    // all the information we want to be saved each render
    const chartRef = useRef(null);
    const [resultState, setResultState] = useState([]);

    // get data from local_storage asynchronously
    useEffect(() => {
        async function getOutForm() {
            try {
                const result = await myLocalStorage.getAllFromLocalStorage();
                setResultState(result);
            } catch (e) {
                throw new e("Cant get the data" + e);
            }
        }
        getOutForm().catch((error)=> {
            throw new error("Cant retrieve the data" + error);
        });
    }, []);

    const result = Object.values(resultState);

    // building the properties of the chart
    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        const categoryCounts = result.reduce((counts, item) => {
            counts[item.date.split("-")[0]] = (counts[item.date.split("-")[0]]|| 0) + 1;
            return counts;
        }, {});

        const ctx = document.getElementById("myChart").getContext("2d");
        chartRef.current = new Chart(ctx, {
            type: "bar",
            data: {
                labels: Object.keys(categoryCounts),
                datasets: [{
                    label: "Category Counts",
                    data: Object.values(categoryCounts),
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });


    }, [result]);

    return (
        <div>
            <canvas id="myChart"></canvas>
        </div>

    );
}
export default Years;


