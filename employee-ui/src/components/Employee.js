import React from 'react'
import { useState } from 'react';

const Employee = ({employee, deleteEmployee, updateEmployeeToDB}) => {

   
   const [Editing, setEditing] = useState(false);
   const [Employee, setEmployee] =  useState({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
   });
   
   const updateEmployee = (e, id) => {
      e.preventDefault();
      console.log(Employee);
      Employee.id = id;
      updateEmployeeToDB(id, Employee);
      setEditing(false);
   }

   const handleEdit = (e) => {
      setEmployee({
         id: "",
         firstName: "",
         lastName: "",
         emailId: "",
      });
      setEditing(true);
   }

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  return (
    <tr key={employee.id} className='hover:bg-gray-300'>
      <td className='text-left px-6 py-3 whitespace-nowrap'>
         {Editing ?
         <input 
            type="text" 
            defaultValue={employee.firstName}
            name="firstName"
            onChange={(e) => handleChange(e)}
            className='h-6 w-20 border border-gray-300 rounded-md sm:text-sm text-gray-500 px-1'></input>
         :
         <div className='text-sm text-gray-500'>
            {employee.firstName}
         </div>
         }
      </td>
      <td className='text-left px-6 py-4 whitespace-nowrap'>
         {!Editing ?
         <div className='text-sm text-gray-500'>
            {employee.lastName}
         </div>
         :
         <input 
            type="text" 
            defaultValue={employee.lastName}
            name="lastName"
            onChange={(e) => handleChange(e)}
            className='h-6 w-20 border border-gray-300 rounded-md sm:text-sm text-gray-500 px-1'></input>
         }
      </td>
      <td className='text-left px-6 py-4 whitespace-nowrap'>
         {!Editing ?
         <div className='text-sm text-gray-500'>
            {employee.emailId}
         </div>
         :
         <input 
            type="text" 
            defaultValue={employee.emailId}
            name="emailId"
            onChange={(e) => handleChange(e)}
            className='h-6 w-20 border border-gray-300 rounded-md sm:text-sm text-gray-500 px-1'></input>
         }
      </td>
      <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
         {!Editing ?
         <div>
            <a onClick={(e, id) => {handleEdit(e)}} href='#' className='text-indigo-600 hover:text-indigo-800 px-4'>Edit</a>
            <a onClick={(e, id) => deleteEmployee(e, employee.id)} href='#' className='text-indigo-600 hover:text-indigo-800'>Delete</a>
         </div>
         :
         <div>
            <a onClick={(e, id) => updateEmployee(e, employee.id)} href='#' className='text-indigo-600 hover:text-indigo-800'>Done</a>
            <a onClick={(e) => setEditing(false)} href='#' className='text-indigo-600 hover:text-indigo-800 px-4'>Cancel</a>
         </div>
         }
      </td>
   </tr>
  )
}

export default Employee