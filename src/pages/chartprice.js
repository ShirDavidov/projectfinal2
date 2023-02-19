// developers:
// Mor Yossef 209514264
// Shir Davidov 318852159
// Rinat Polonski 313530842

import { VictoryPie,VictoryLabel } from 'victory';
import {useEffect, useState} from 'react';
import {myLocalStorage} from './localstorgehandle';

function TotalSumPrices () {

    // create an object to store the counts for each category
    let totalAllExpense = 0;

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
            throw new error("Cant retrieve the data" + error)
        })
    }, []);

    const result = Object.values(resultState);
    // loop through data to count how many times each category appears
    result.forEach((item) => {
        totalAllExpense = totalAllExpense + parseFloat(item.price);
    });

    return (
        <div>
            <svg viewBox="0 0 400 400">
                <VictoryPie
                    standalone={false}
                    width={400}
                    height={400}
                    innerRadius={120}
                    padAngle={0}
                    colorScale={["goldenrod"]}
                    labelComponent={<VictoryLabel style={{ fill: "white" }} />}
                />
                <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" style={{ fontWeight: "bold", fontSize: 20 }}>
                    Total Cost: {totalAllExpense.toFixed(2)}₪
                </text>
            </svg>
        </div>
    );
};

export default TotalSumPrices;