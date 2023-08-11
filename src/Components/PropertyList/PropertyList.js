import React from "react";
import { Link } from "react-router-dom";
const PropertyList=()=>{
    return <>
    <div className="searchbar">
        <div className="boxContainer">
        <span><input className="searchInput" type="text" placeholder="Search PPD ID" name="searchtext"/></span>
        <span className="stand">|</span>
        <span><button className="searchbtn"> search </button></span>
        </div>
      </div>
      <div className="buttonDiv">
        <Link to="/basicinfo">
          <button className="btnAdd">
            <span className="plus">+</span>
            <span className="textBtn">Add Property</span>
          </button>
        </Link>
      </div>

      <div className="mainRow">
        <p className="head-column-one">PPDID</p>
        <p className="head-column-two">Image</p>
        <p className="head-column-three">Property</p>
        <p className="head-column-four">Contact</p>
        <p className="head-column-five">Area</p>
        <p className="head-column-six">Views</p>
        <p className="head-column-seven">Status</p>
        <p className="head-column-eight">DaysLeft</p>
        <p className="head-column-nine">Action</p>
      </div>
    </>
}
export default PropertyList