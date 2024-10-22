import React from "react";
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import { useEffect } from "react";

const App = () => {

    const [allDogs, setAllDogs] = useState([]);
    const [newBool, setNewBool] = useState(false);
    const [newDate, setNewDate] = useState("");
    const [newLocation, setNewLocation] = useState("");
    const [newNotes, setNewNotes] = useState("");

    const addNewDog = () => {
        setNewBool(true)
    };
  
    const setDogCookie = () => {
        console.log('all dogs', allDogs)
        var json = JSON.stringify(allDogs);
        console.log('all json', json)
        //var encoded = encodeURIComponent(json);
        localStorage.removeItem("hotDogCounter");
        localStorage.setItem("hotDogCounter", json);
    };

    const getDogCookie = () => {
        var local = localStorage.getItem("hotDogCounter");
        console.log('local', local)
        if (local.length) {
            var localDogs = JSON.parse(local);
            console.log('obj', localDogs)
            setAllDogs(localDogs)
            //var allCookies = cookies.split(';');
            // console.log('all', allCookies)
        }
    }

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
        //console.log('newdog', newDog)
        setAllDogs([...allDogs, newDog]);
        setNewBool(false);
    }

    const removeForm = () => {
        setNewBool(false);
    }

    useEffect = (() => {
        let answer = getDogCookie();
        console.log('ping', answer)
    }, []);

    // useEffect = (() => {
    //     setDogCookie();
    // }, [allDogs])

    return (
        <div className="hotdog-container">
<pre> _           _      _             </pre>
<pre>| |         | |    | |            </pre>
<pre>| |__   ___ | |_ __| | ___   __ _ </pre>
<pre>| '_ \ / _ \| __/ _` |/ _ \ / _` |</pre>
<pre>| | | | (_) | || (_| | (_) | (_| |</pre>
<pre>|_| |_|\___/ \__\__,_|\___/ \__, |</pre>
<pre>                             __/ |</pre>
<pre>                            |___/ </pre>
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
            <button onClick={addNewDog}>Add Dog</button>&nbsp;
                <button onClick={getDogCookie}>Load Dogs</button>&nbsp;
                <button onClick={setDogCookie}>Save Dogs</button>
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
