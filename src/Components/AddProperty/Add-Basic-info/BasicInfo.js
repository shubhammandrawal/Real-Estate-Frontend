import { useNavigate } from 'react-router-dom';
import './BasicInfo.css';
import { useState } from 'react';
import SideBar from '../../SideBar/SideBar';
import Header from '../../Header/Header';

export default function BasicInfo() {

    const navigate = useNavigate()

    const [data, setData] = useState({
        property_type: "",
        price: "",
        negotable: "",
        ownership: "",
        propertyage: "",
        propertyapproved: "",
        propertydescp: "",
        bank: ""
    })


    const clearData = () => {
        setData({
            property_type: "",
            price: "",
            negotable: "",
            ownership: "",
            propertyage: "",
            propertyapproved: "",
            propertydescp: "",
            bank: ""
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(data)
    }

    return <>
    
    <SideBar/>
    
    <div className='basic-container'>
        <h3>ADD NEW PROPERTY</h3>
        <div className='property-navbar'>
            <ol>
                <li className='selected'>Basic Info</li>
                <li>Property Detail</li>
                <li>General Info</li>
                <li>Location Info</li>
            </ol>
        </div>
        <div className='form-container'>
            <form onSubmit={submitHandler}>
                <div className='field-container'>
                    <div>
                        <label>Property Type</label>
                        <select required onChange={(e) => {
                            // debugger
                            setData((prevData) => {
                                return {
                                    ...prevData,
                                    property_type: e.target.value
                                }
                            })
                        }} value={data.property_type}>
                            <option>House</option>
                            <option>Flat</option>
                            <option>FarmHouse</option>
                            <option>Penthouse</option>
                        </select>
                        <label>Price</label>
                        <input type="number" required onChange={(e) => {
                            // debugger
                            setData((prevData) => {
                                return {
                                    ...prevData,
                                    price: e.target.value
                                }
                            })
                        }} value={data.price} />
                    </div>
                    <div>
                        <label>Negotable</label>
                        <select type="number" required onChange={(e) => {
                            // debugger
                            setData((prevData) => {
                                return {
                                    ...prevData,
                                    negotable: e.target.value
                                }
                            })
                        }} value={data.negotable}>
                            <option>yes</option>
                            <option>no</option>
                        </select>

                        <label>Ownership</label>
                        <select required onChange={(e) => {
                            // debugger
                            setData((prevData) => {
                                return {
                                    ...prevData,
                                    ownership: e.target.value
                                }
                            })
                        }} value={data.ownership}>
                            <option>dealer</option>
                            <option>owner</option>
                        </select>
                    </div>
                    <div>
                        <label>Property Age</label>
                        <input type="number" required onChange={(e) => {
                            // debugger
                            setData((prevData) => {
                                return {
                                    ...prevData,
                                    propertyage: e.target.value
                                }
                            })
                        }} value={data.propertyage} />
                        <label>Property Approved</label>
                        <select required onChange={(e) => {
                            // debugger
                            setData((prevData) => {
                                return {
                                    ...prevData,
                                    propertyapproved: e.target.value
                                }
                            })
                        }} value={data.propertyapproved}>
                            <option>yes</option>
                            <option>no</option>
                        </select>
                    </div>
                    <div>
                        <label>Property Description</label>
                        <input type="text" required onChange={(e) => {
                            // debugger
                            setData((prevData) => {
                                return {
                                    ...prevData,
                                    propertydescp: e.target.value
                                }
                            })
                        }} value={data.propertydescp} />
                        <label>Bank Loan</label>
                        <select required onChange={(e) => {
                            // debugger
                            setData((prevData) => {
                                return {
                                    ...prevData,
                                    bank: e.target.value
                                }
                            })
                        }} value={data.bank}>
                            <option>yes</option>
                            <option>no</option>
                        </select>
                    </div>
                </div>
                <div className='btn'>
                    <button onClick={clearData}>Cancel</button>
                    <button type='submit'>Save & Continue</button>
                </div>
            </form>
        </div>
    </div>
    </>
}