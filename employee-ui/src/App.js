import './App.css';
import Navbar from './components/Navbar';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<EmployeeList />} />
        <Route path="/" element={<EmployeeList />} />
        <Route path="/employeeList" element={<EmployeeList />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
