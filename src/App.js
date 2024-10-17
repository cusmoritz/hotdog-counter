import React from "react";
import ReactDOM from 'react-dom/client';
import { useState } from "react";

const App = () => {

    const [allDogs, setAllDogs] = useState([]);
    const [newBool, setNewBool] = useState(false);
    const [newDate, setNewDate] = useState("");
    const [newLocation, setNewLocation] = useState("");
    const [newNotes, setNewNotes] = useState("");

    const addNewDog = () => {
        setNewBool(true)
    };

    const submitDog = () => {
        

        var testDate = "";
        if (!newDate) {
            let _date = new Date();
            testDate = `${_date.getFullYear()}-${_date.getMonth()}-${_date.getDate()}`;
        } else {
            testDate = newDate;
        }
        const newDog = {
            date: testDate,
            location: newLocation,
            notes: newNotes
        }
        console.log('newdog', newDog)
        setAllDogs([...allDogs, newDog]);
        setNewBool(false)
    }

    const removeForm = () => {
        setNewBool(false);
    }

    return (
        <div className="hotdog-container">
            <h1>Hotdog counter</h1>
            {newBool == true ? 
            <div>
                <>
                    <label htmlFor="date-input">Add a date: </label>
                    <input type="date" className="date-input" onChange={(e) => setNewDate(e.target.value)}/>
                    <p>Note: If there is no date, the date / time of submission will be used.</p>
                    <p></p>
                    <label htmlFor="location-input">Location: </label>
                    <input type="text" onChange={(e) => setNewLocation(e.target.value)}/>
                    <p></p>
                    <label htmlFor="notes-input">Add notes: </label>
                    <input type="text" className="notes-input" onChange={(e) => setNewNotes(e.target.value)}/>
                    <p></p>
                    <button onClick={submitDog}>Submit</button> &nbsp; &nbsp; <button onClick={removeForm}>Cancel</button>
                </>
            </div> 
            : 
            <div className="table-coantainer">
            <button onClick={addNewDog}>Add Dog</button>

            <table>
                <tbody>
                    <tr>
                    <th>
                        No.
                    </th>
                    <th>
                        Date
                    </th>
                    <th>
                        Location
                    </th>
                    <th>
                        Notes
                    </th>
                    </tr>
                    {allDogs.length < 1 ? null : 
                    allDogs.map((dog, index) => {
                        return (
                            <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{dog.date}</td>
                            <td>{dog.location}</td>
                            <td>{dog.notes}</td>
                            </tr>
                        )
                    })
                    }
                    {/* {allDogs.length < 1 ? null : 
                    allDogs.map((dog, index) => {
                        return (
                            <>
                            <tr>
                                <td>{index + 1}</td>
                            </tr>
                            <tr>
                                <td>{dog.date}</td>
                            </tr>
                            <tr>
                                <td>{dog.location}</td>
                            </tr>
                            <tr>
                                <td>{dog.notes}</td>
                            </tr>
                            </>
                        )
                    })
                    } */}
                </tbody>
            </table>   
            </div> 
            }            
        </div>
    )
};

export default App;
