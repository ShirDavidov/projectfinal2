// developers:
// Mor Yossef 209514264
// Shir Davidov 318852159
// Rinat Polonski 313530842


import React from 'react'
import { useState } from 'react';
import './localstorgehandle'
import {myLocalStorage} from './localstorgehandle';
import { nanoid } from "nanoid";

function AddExpenses(){

    // all the information we want to be saved each render
    const [Category, setCategory] = useState("Food");
    const [startDate, setStartDate] = useState();
    const [Price, setPrice] = useState("");
    const [Description, setDescription] = useState("");

    // add button was pressed
    function handleClicks() {
        let ID = nanoid();
        const costData = {
            ID:ID,
            category: Category,
            price: Price,
            date: startDate,
            description: Description
        }
        //check valid
        if (!costData.price || !costData.date) {
            alert("Please fill in all the required fields.");
            return;
        }
        // insert the data
        myLocalStorage.saveToLocalStorage(ID, costData).then(()=> {
            alert("The Expense Added Successfully");
        }).catch((error) => {
            throw new error("Error saving all items from local storage:"+ error);
        })
    }
    return (
        <form>
            <label>Category
                <select name="Category" id="Category" value={Category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Food">Food</option>
                    <option value="Health">Health</option>
                    <option value="Housing">Housing</option>
                    <option value="Sport">Sport</option>
                    <option value="Education">Education</option>
                    <option value="Transportations">Transportations</option>
                </select></label>
            <label>Price <input name="Price" id="Price" type="number" pattern="[0-9]*" value={Price} onChange={(e) => setPrice(e.target.value)} required={true}/></label>
            <label>Date <input type="date" name="date" id={"date"} value={startDate} onChange={(e) => setStartDate(e.target.value)} required={true}/>
            </label>
            <label>Description
                <input name="Description" id="Description" value={Description} onChange={(e) => setDescription(e.target.value)} /></label>
            <button className="addButton" onClick={handleClicks}> Add </button>
        </form>
    )
}
export default AddExpenses;