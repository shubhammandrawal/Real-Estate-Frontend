import { useNavigate } from 'react-router-dom';
import './PropertyDetails.css';

export default function GeneralInfo() {

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
                        <input type="number" />
                        <label>Breath</label>
                        <input type="number" />
                    </div>
                    <div>
                        <label>Total Area</label>
                        <input type="number" />

                        <label>Area Unit</label>
                        <input type="number" />
                    </div>
                    <div>
                        <label>No. of BHK</label>
                        <input type="number" />
                        <label>No. of Floor</label>
                        <input type="number" />
                    </div>
                    <div>
                        <label>Attached</label>
                        <select>
                            <option>yes</option>
                            <option>no</option>
                        </select>
                        <label>Western</label>
                        <select>
                            <option>yes</option>
                            <option>no</option>
                        </select>
                    </div>
                    <div>
                        <label>Furnished</label>
                        <select>
                            <option>yes</option>
                            <option>no</option>
                        </select>
                        <label>Car Parking</label>
                        <select>
                            <option>yes</option>
                            <option>no</option>
                        </select>
                    </div>
                    <div>
                        <label>Lift</label>
                        <select>
                            <option>yes</option>
                            <option>no</option>
                        </select>
                        <label>Electricity</label>
                        <select>
                            <option>3 phase</option>
                            <option>2 phase</option>
                        </select>
                    </div>
                    <div>
                        <label>Facing</label>
                        <select>
                            <option>North</option>
                            <option>South</option>
                            <option>East</option>
                            <option>West</option>
                        </select>
                    </div>
                </div>
                <div className='btn'>
                    <button>Previous</button>
                    <button>Save & Continue</button>
                </div>
            </form>
        </div>
    </>
}