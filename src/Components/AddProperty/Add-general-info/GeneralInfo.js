import { useNavigate } from 'react-router-dom';
import './GeneralInfo.css';

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
                        <input type="text" />
                        <label>Mobile</label>
                        <input type="number" />
                    </div>

                    <div>
                        <label>Posted by</label>
                        <select>
                            <option>Dealer</option>
                            <option>Owner</option>
                        </select>

                        <label>Sale type</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label>Name</label>
                        <input type="text" />

                        <label>Mobile</label>
                        <input type="number" />
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