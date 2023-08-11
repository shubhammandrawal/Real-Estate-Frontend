import { BrowserRouter, Route, Routes } from "react-router-dom";

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