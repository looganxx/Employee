package com.api.employee.services;

import java.util.List;

import com.api.employee.model.Employee;

public interface EmployeeService {

   Employee createEmployee(Employee employee);

   List<Employee> getAllEmployees();
   
}
