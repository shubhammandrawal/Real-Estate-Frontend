import { useNavigate } from 'react-router-dom';
import './LocationInfo.css';
import { useState } from 'react';

export default function LocationInfo() {

    const navigate = useNavigate()

    const [data, setData] = useState({

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
                        <input type="email" />
                        <label>City</label>
                        <select>
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
                        <input type="text" />

                        <label>Pincode</label>
                        <input type="number" />
                    </div>
                    <div>
                        <label>Address</label>
                        <input type="text" />
                        <label>Landmark</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Latitude</label>
                        <input type="text" />
                        <label>longitude</label>
                        <input type="text" />
                    </div>

                </div>
                <div className='btn'>
                    <button>Previous</button>
                    <button>Add Property</button>
                </div>
            </form>
        </div>
    </>
}