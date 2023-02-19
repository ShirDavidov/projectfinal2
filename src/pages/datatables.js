// developers:
// Mor Yossef 209514264
// Shir Davidov 318852159
// Rinat Polonski 313530842

import React from 'react'
import { useState, useEffect } from 'react';
import {myLocalStorage} from './localstorgehandle';
import { RiDeleteBin6Line,RiSearchLine } from 'react-icons/ri';

function History() {
    // all the information we want to be saved each render
    const [filterByYear, setFilterByYear] = useState();
    const [filterByMonth, setFilterByMonth] = useState();
    const [resultState, setResultState] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    // get data from local_storage asynchronously
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

    // delete button in the table of data was pressed
    const handleDelete = (index) => {
        myLocalStorage.removeItemLocalStorage(index).then(()=>{
            window.location.reload();
        }).catch((error) => {
            alert("Error, Try Again. " + error);
        })};

    // filter button was pressed
    const handleClick = (filterByYear, filterByMonth) => {
        const tableData = Object.values(resultState);
        if (!filterByYear || !filterByMonth) {
            alert("Please fill in all the required fields.");
            return;
        }
        const filteredData = tableData.filter((item) => (item.date.split("-")[0] === filterByYear) && ((item.date.split("-")[1]).includes(filterByMonth)));
        setResultState(filteredData);
        filteredData.forEach((item) => {
            setTotalPrice( totalPrice => totalPrice + parseFloat(item.price));
        });
        setModalOpen(true);
    }

    // calculate the total price per each category for the report
    function calculateCategoryTotalPrice() {
        const categoryTotals = {};
        resultState.forEach(item => {
            if (categoryTotals[item.category]) {
                categoryTotals[item.category] += parseFloat(item.price);
            } else {
                categoryTotals[item.category] = parseFloat(item.price);
            }
        });
        return categoryTotals;
    }

    // un_filter button was pressed
    const deleteFiltering = () => {
        const tableData = Object.values(resultState);
        setResultState(tableData);
        window.location.reload();
    }

    return (
        <div>
            <table className="filterTable">
                <tr>
                    <td>Filter By Year</td>
                    <td> <input name="years" id={"years"} type={"text"} pattern="[0-9]*" value={filterByYear} onChange={(e) => setFilterByYear(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>Filter By Month</td>
                    <td><input name="months" id={"months"} type={"text"} pattern="[0-9]*" value={filterByMonth} onChange={(e) => setFilterByMonth(e.target.value)}/></td>
                </tr>
                <tr>
                    <td> <button onClick={() => handleClick(filterByYear,filterByMonth)}> <RiSearchLine /> </button> </td>
                    <td> <button onClick={deleteFiltering}> <RiDeleteBin6Line /> </button> </td>
                </tr>
            </table>
            <table className="historyTable">
                <thead>
                <tr>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {result.map(item => (
                    <tr>
                        <td>{item.category}</td>
                        <td>{item.date}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <td>
                            <button onClick={() => handleDelete(item.ID)}>
                                <RiDeleteBin6Line />
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div>
                {modalOpen ? (
                    <div className="modal">
                        <div className="modal-content">
                            <h2>More Details: </h2>
                            <p> Total Cost: {totalPrice.toFixed(2)}₪ </p>
                            <table>
                                <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Total Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                {Object.entries(calculateCategoryTotalPrice()).map(([category, totalPrice]) => (
                                    <tr key={category}>
                                        <td>{category}</td>
                                        <td>{totalPrice}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
export default History;