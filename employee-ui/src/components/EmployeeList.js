import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import Employee from './Employee';
import { useEffect } from 'react';

const EmployeeList = () => {

  const navigate = useNavigate();

  
  const [employees, setEmployees] = useState(null);
  const [loading, setLoading] = useState(true);   

  useEffect(() => {
      const fetchData = async () => {
         setLoading(true);
         try{
            const response = await EmployeeService.getEmployees();
            setEmployees(response.data);
         }catch(err){
            console.log(err);
         }
         setLoading(false);
      };
      fetchData();    
  }, []);
  
  const deleteEmployee = (e, id) => {
      e.preventDefault();
      EmployeeService.deleteEmployee(id)
         .then(response => {
            if(employees){
               setEmployees(employees.filter(e => e.id!== id));
            }
         }).catch(err => console.error(err));
  }

  const updateEmployeeToDB = (id, employee) => {
      EmployeeService.updateEmployee(id, employee)
         .then(response => {
            if(employees){
               setEmployees(employees.filter(e => {
                  if(e.id === id){
                     console.log(e);
                     console.log(employee);
                     e.firstName = employee.firstName;
                     e.lastName = employee.lastName;
                     e.emailId = employee.emailId;
                  }
                  console.log(e);
                  return e;
               }));
            }
         }).catch(err => {console.error(err)});

  }

  return (
   	<div className='container mx-auto my-6 px-2'>
         <div className='h-12'>
            <button 
            onClick={() => navigate("/addEmployee")}
            className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'>Add Employe</button>
         </div>
         <div className='flex shadow border-b'>
            <table className='table-auto min-w-full'>
               <thead className='bg-gray-50'>
                  <tr>
                     <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>First Name</th>
                     <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Last Name</th>
                     <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Email ID</th>
                     <th className='text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Actions</th>
                  </tr>
               </thead>
               {!loading && (
               <tbody className='bg-white'>
                  {employees.map((employee) => (
                     <Employee 
                        deleteEmployee={deleteEmployee}
                        updateEmployeeToDB={updateEmployeeToDB}
                        employee={employee} 
                        key={employee.id}
                     >  
                     </Employee>
                  ))}
               </tbody>  
               )}
            </table>
         </div>
      </div>
  )
}

export default EmployeeList