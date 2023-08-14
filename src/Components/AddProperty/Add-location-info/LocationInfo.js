import { useNavigate } from 'react-router-dom';
import './LocationInfo.css';
import { useState } from 'react';

export default function LocationInfo() {

    const navigate = useNavigate()

    const [data, setData] = useState({
        email: "",
        city: "",
        area: "",
        pincode: "",
        address: "",
        landmark: "",
        latitude: "",
        longitude: ""
    })

    const submitHandler = (e) => {
        e.preventDefault()
    }

    return <>
        <h3>ADD NEW PROPERTY</h3>
        <div className='property-navbar'>
            <ol>
                <li >Basic Info</li>
                <li>Property Detail</li>
                <li>General Info</li>
                <li className='selected'>Location Info</li>
            </ol>
        </div>
        <div className='form-container'>
            <form onSubmit={submitHandler}>
                <div className='field-container'>
                    <div>
                        <label>Email</label>
                        <input type="email" onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, email: e.target.value }
                            })
                        }} value={data.email} required />
                        <label>City</label>
                        <select onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, city: e.target.value }
                            })
                        }} value={data.city}>
                            <option>Mumbai</option>
                            <option>Bangalore</option>
                            <option>Pune</option>
                            <option>Delhi</option>
                            <option>Gurgaon</option>
                            <option>Dehradun</option>
                        </select>
                    </div>
                    <div>
                        <label>Area</label>
                        <input type="text" onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, area: e.target.value }
                            })
                        }} value={data.area} required />

                        <label>Pincode</label>
                        <input type="number" onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, pincode: e.target.value }
                            })
                        }} value={data.pincode} required />
                    </div>
                    <div>
                        <label>Address</label>
                        <input type="text" onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, address: e.target.value }
                            })
                        }} value={data.address} required />
                        <label>Landmark</label>
                        <input type="text" onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, landmark: e.target.value }
                            })
                        }} value={data.landmark} required />
                    </div>
                    <div>
                        <label>Latitude</label>
                        <input type="text" onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, latitude: e.target.value }
                            })
                        }} value={data.latitude} required />
                        <label>longitude</label>
                        <input type="text" onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, longitude: e.target.value }
                            })
                        }} value={data.longitude} required />
                    </div>

                </div>
                <div className='btn'>
                    <button onClick={() => navigate("/generalinfo")}>Previous</button>
                    <button>Add Property</button>
                </div>
            </form>
        </div>
    </>
}