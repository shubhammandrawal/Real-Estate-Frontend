import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsImageFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Image from './Image';
const Table = () => {

    let token = localStorage.getItem("token");
    let id = localStorage.getItem(("userID"));
    const navigate = useNavigate();
    const [pathFlag, setPathFlag] = useState(false);
    const [path, setPath] = useState("");
    const [data, setData] = useState([]);
    const [change, setChange] = useState(true);

    function showImage(data) {
        setPath(data.imageUrl);
        setPathFlag(true);
        // console.log(path);
    }

    let url = "http://localhost:4000/api/property/";//add url
    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                token: token,
                id: id,
                Accept: "application/json",
                "Content-Type": "application/json",

            },
        })
            .then((res) => {
                // console.log(res)
                if (res.statusText === "Forbidden") {
                    alert("Session over");
                    navigate('/');
                } else {
                    res.json().then((result) => {
                        setData(result.property);
                        // console.log(result.property);
                    });
                }
            })
            .catch((err) => navigate("/"));
    }, [id, token, url, change, navigate]);

    function update(details) {
        console.log(details._id);
        let data = { status: "Sold" };

        axios
            .patch(
                `/api/property/sold/${details._id}`,
                data,
                {
                    headers: {
                        token: token,
                        id: id,
                    },
                }
            )
            .then((res) => {
                // console.log(res.data);
                setChange(!change);
            })
            .catch((error) => alert("Unable to sell"));
    }
    return (
        <>
            {data.length === 0 ? (
                <>
                    <h1 style={{ marginTop: "40px", marginLeft: "30%" }}>No Property Found</h1>
                </>
            ) : (
                <>
                    <table
                        className='table table-hover table-responsive-xl'
                        style={{
                            marginTop: "15px",
                            border: "1px solid #dee2e6",
                            padding: "10px",
                            borderRadius: "5px",
                            width:"95%"
                        }}
                    >
                        <thead style={{ color: "#4C57B6" }}>
                            <tr>
                                <th scope="col">PPD ID</th>
                                <th scope="col">Image</th>
                                <th scope="col">Property</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Area</th>
                                <th scope="col">Views</th>
                                <th scope="col">Status</th>
                                <th scope="col">Days Left</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody style={{
                            background: "#f0eded"                            
                            }}>
                            {data.map((d) => (
                                <tr key={d.ppdId}  style={{textAlign: "center"}}>
                                    <td>{d.ppdId}</td>
                                    <td 
                                        onClick={() => showImage(d)}
                                        style={{
                                            cursor: "pointer"
                                            // textAlign: "center",
                                            // verticalAlign: "middle",
                                        }}
                                    >
                                        <BsImageFill />
                                    </td>
                                    <td>{d.property}</td>
                                    <td>{d.mobile}</td>
                                    <td>{d.area}</td>
                                    <td>{d.views}</td>
                                    <td
                                        onClick={() => update(d)}
                                        style={{
                                            textAlign: "center",
                                            // verticalAlign: "middle",
                                        }}
                                    >
                                        <button
                                            style={{
                                                backgroundColor: "#F5FAF5",
                                                color: "#416899",
                                                borderRadius: "5px",
                                                border: "1px solid rgb(228 233 233)",
                                                cursor: "pointer",
                                            }}
                                            className="soldbtn"
                                        >
                                            {d.status}
                                        </button>
                                    </td>
                                    <td
                                        style={{
                                            textAlign: "center",
                                            verticalAlign: "middle",
                                        }}
                                    >
                                        {d.daysLeft}
                                    </td>
                                    <td
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-evenly",
                                            cursor: "pointer",
                                            textAlign: "center",
                                            verticalAlign: "middle",
                                        }}
                                    >
                                        <span
                                            onClick={() => {
                                                navigate("/viewpage", { state: d });
                                            }}
                                        >
                                            <BsFillEyeFill />
                                        </span>
                                        <span
                                            onClick={() => {
                                                navigate("/update", { state: d });
                                            }}
                                        >
                                            <MdModeEditOutline />
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {
                        pathFlag && (
                            <div
                                style={{
                                    width: "50%",
                                    height: "40%",
                                    minHeight: "40%",
                                    position: "absolute",
                                    top: "25%",
                                    left: "25%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                                onClick={() => setPathFlag(false)}
                            >

                                <Image path={path} />
                            </div>
                        )}
                </>
            )}
        </>
    );
}

export default Table