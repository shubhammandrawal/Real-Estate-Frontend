import { useNavigate } from 'react-router-dom';
import './GeneralInfo.css';
import { useState } from 'react';

export default function GeneralInfo() {

    const [data, setData] = useState({
        name: "",
        mobile: "",
        postedBy: "",
        saleType: "", 
        featuredpkg: "",
        PPDpkg: "",
        image: null
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
                <li>Property Detail</li>
                <li className='selected'>General Info</li>
                <li>Location Info</li>
            </ol>
        </div>
        <div className='form-container'>
            <form onSubmit={submitHandler}>
                <div className='field-container'>
                    <div>
                        <label>Name</label>
                        <input type="text" onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, name: e.target.value }
                            })
                        }} value={data.name} required />

                        <label>Mobile</label>
                        <input type="number" onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, mobile: e.target.value }
                            })
                        }} value={data.mobile}
                            min="10"
                            max="12"
                        />
                    </div>

                    <div>
                        <label>Posted by</label>
                        <select onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, postedBy: e.target.value }
                            })
                        }} value={data.postedBy} >
                            <option>Dealer</option>
                            <option>Owner</option>
                        </select>

                        <label>Sale type</label>
                        <input type="text" onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, saleType: e.target.value }
                            })
                        }} value={data.saleType} />
                    </div>

                    <div>
                        <label>Featured Package</label>
                        <input type="text" onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, featuredpkg: e.target.value }
                            })
                        }} value={data.featuredpkg} />

                        <label>Add Photo</label>
                        <input type="file" onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, image: e.target.files[0] }
                            })
                        }} value={data.image} />
                    </div>

                    <div>
                        <label>PPD Package</label>
                        <input type="number" onChange={(e) => {
                            setData((prevData) => {
                                return { ...prevData, PPDpkg: e.target.value }
                            })
                        }} value={data.PPDpkg} />
                    </div>

                </div>
                <div className='btn'>
                    <button onClick={() => navigate("/propertydetails")}>Previous</button>
                    <button type='submit'>Save & Continue</button>
                </div>
            </form>
        </div>
    </>
}