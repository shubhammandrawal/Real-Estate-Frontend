import { useNavigate } from 'react-router-dom';
import './PropertyDetails.css';
import { useState } from 'react';

export default function GeneralInfo() {

    const [data, setData] = useState({
        length: "",
        breath: "",
        totalarea: "",
        areaunit: "",
        bhk: "",
        floor: "",
        attached: "",
        western: "",
        furnished: "",
        carparking: "",
        lift: "",
        electricity: "",
        facing: ""
    })

    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault()
    }

    return <>
        <h3>ADD NEW PROPERTY</h3>
        <div className='property-navbar'>
            <ol>
                <li >Basic Info</li>
                <li className='selected'>Property Detail</li>
                <li>General Info</li>
                <li>Location Info</li>
            </ol>
        </div>
        <div className='form-container'>
            <form onSubmit={submitHandler}>
                <div className='field-container'>
                    <div>
                        <label>Length</label>
                        <input type="number" onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, length: e.target.value }
                            })
                        }} value={data.length} required/>
                        <label>Breath</label>
                        <input type="number" onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, breath: e.target.value }
                            })
                        }} value={data.breath} required/>
                    </div>
                    <div>
                        <label>Total Area</label>
                        <input type="number" onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, totalarea: e.target.value }
                            })
                        }} value={data.totalarea} required/>

                        <label>Area Unit</label>
                        <input type="number" onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, areaunit: e.target.value }
                            })
                        }} value={data.areaunit} required/>
                    </div>
                    <div>
                        <label>No. of BHK</label>
                        <input type="number" onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, bhk: e.target.value }
                            })
                        }} value={data.bhk} required/>
                        <label>No. of Floor</label>
                        <input type="number" onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, floor: e.target.value }
                            })
                        }} value={data.floor} required/>
                    </div>
                    <div>
                        <label>Attached</label>
                        <select onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, attached: e.target.value }
                            })
                        }} value={data.attached} required>
                            <option>yes</option>
                            <option>no</option>
                        </select>
                        <label>Western</label>
                        <select onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, western: e.target.value }
                            })
                        }} value={data.western} required>
                            <option>yes</option>
                            <option>no</option>
                        </select>
                    </div>
                    <div>
                        <label>Furnished</label>
                        <select onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, furnished: e.target.value }
                            })
                        }} value={data.furnished} required>
                            <option>yes</option>
                            <option>no</option>
                        </select>
                        <label>Car Parking</label>
                        <select onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, carparking: e.target.value }
                            })
                        }} value={data.carparking} required>
                            <option>yes</option>
                            <option>no</option>
                        </select>
                    </div>
                    <div>
                        <label>Lift</label>
                        <select onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, lift: e.target.value }
                            })
                        }} value={data.lift} required>
                            <option>yes</option>
                            <option>no</option>
                        </select>
                        <label>Electricity</label>
                        <select onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, electricity: e.target.value }
                            })
                        }} value={data.electricity} required>
                            <option>3 phase</option>
                            <option>2 phase</option>
                        </select>
                    </div>
                    <div>
                        <label>Facing</label>
                        <select onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, facing: e.target.value }
                            })
                        }} value={data.facing} required>
                            <option>North</option>
                            <option>South</option>
                            <option>East</option>
                            <option>West</option>
                        </select>
                    </div>
                </div>
                <div className='btn'>
                    <button onClick={()=>navigate("/basicinfo")}>Previous</button>
                    <button>Save & Continue</button>
                </div>
            </form>
        </div>
    </>
}