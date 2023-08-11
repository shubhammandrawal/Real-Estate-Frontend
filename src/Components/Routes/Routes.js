import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicInfo from "../AddProperty/Add-Basic-info/BasicInfo";
import PropertyDetails from "../AddProperty/Add-property-details/PropertyDetails"
import PropertyList from "../PropertyList/PropertyList"
export default function Router() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PropertyList />} />
        <Route path='/basicinfo' element={<BasicInfo />} />
        <Route path='/propertydetails' element={<PropertyDetails />} />
      </Routes>
    </BrowserRouter>
  </>
}