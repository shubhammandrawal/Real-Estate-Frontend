import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicInfo from '../Components/AddProperty/Add-Basic-info/BasicInfo';
import PropertyDetails from '../Components/AddProperty/Add-property-details/PropertyDetails';

export default function Router(){
    return<>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<BasicInfo />} />
      <Route path='/propertydetails' element={<PropertyDetails />} />
    </Routes>
  </BrowserRouter>
    </>
}