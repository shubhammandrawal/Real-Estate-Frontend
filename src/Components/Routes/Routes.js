import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicInfo from "../AddProperty/Add-Basic-info/BasicInfo";
import PropertyDetails from "../AddProperty/Add-property-details/PropertyDetails"
import PropertyList from "../PropertyList/PropertyList"
import Login from "../SignIn&SignUp/Login";
import Signup from "../SignIn&SignUp/Signup";
import Protected from "../Protected/Protected";
import GeneralInfo from "../AddProperty/Add-property-details/PropertyDetails";
import LocationInfo from "../AddProperty/Add-location-info/LocationInfo"


export default function Router() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/" element={
              <PropertyList />
          }
        ></Route>
        <Route
          path="/basicinfo"
          element={
            
              <BasicInfo />
            
          }
        ></Route>
        <Route
          path="/propertydeatils"
          element={
          
              <PropertyDetails />
          
          }
        ></Route>
        <Route
          path="/generalinfo"
          element={
            
              <GeneralInfo />
          
          }
        ></Route>
        <Route
          path="/locationinfo"
          element={
         
              <LocationInfo />
    
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </>
}