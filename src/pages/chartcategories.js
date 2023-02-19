// developers:
// Mor Yossef 209514264
// Shir Davidov 318852159
// Rinat Polonski 313530842

import {useEffect, useState} from 'react';
import {myLocalStorage} from './localstorgehandle';
import { VictoryPie } from 'victory';

function Cat() {

    // create an object to store the counts for each category
    const categoryCounts = {};

    // all the information we want to be saved each render
    const [resultState, setResultState] = useState([]);

    useEffect(() => {
        async function getOutForm() {
            try {
                const result = await myLocalStorage.getAllFromLocalStorage();
                setResultState(result);
            } catch (e) {}
        }
        getOutForm().catch((error)=> {
            throw new error("Cant retrieve the data" + error);
        });
    }, []);

    const result = Object.values(resultState);
    // loop through data to count how many times each category appears
    result.forEach((item) => {
        if (categoryCounts[item.category]) {
            categoryCounts[item.category]++;
        } else {
            categoryCounts[item.category] = 1;
        }
    });

    // convert category counts to an array of objects with x and y properties
    const chartData = Object.keys(categoryCounts).map((key) => ({
        x: key,
        y: categoryCounts[key],
    }));

    // define color scale
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042","#808080","#ffb6c1"];

    return (
        <VictoryPie
            data={chartData}
            colorScale={COLORS}
            innerRadius={60}
            labelPlacement="perpendicular"
            labelPosition="centroid"
            padding={50}
            labelRadius={90}
            style={{
                labels: {
                    fontSize: 12,
                },
            }}
        />
    );

}

export default Cat;