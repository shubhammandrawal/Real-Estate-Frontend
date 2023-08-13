import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicInfo from '../Components/AddProperty/Add-Basic-info/BasicInfo';
import PropertyDetails from '../Components/AddProperty/Add-property-details/PropertyDetails';
import GeneralInfo from "../Components/AddProperty/Add-general-info/GeneralInfo";
import LocationInfo from "../Components/AddProperty/Add-location-info/LocationInfo";

export default function Router(){
    return<>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<BasicInfo />} />
      <Route path='/propertydetails' element={<PropertyDetails />} />
      <Route path='/generalinfo' element={<GeneralInfo />} />
      <Route path='/locationinfo' element={<LocationInfo />} />
    </Routes>
  </BrowserRouter>
    </>
}