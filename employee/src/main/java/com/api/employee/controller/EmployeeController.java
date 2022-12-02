package com.api.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.employee.model.Employee;
import com.api.employee.services.EmployeeService;

@CrossOrigin(origins = "http://localhost:3000") 
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
   
   @Autowired
   private final EmployeeService employeeService;

   public EmployeeController(EmployeeService employeeService) {
      this.employeeService = employeeService;
   }

   @PostMapping("/employees")
   public Employee creatEmployee(@RequestBody Employee employee){
      return employeeService.createEmployee(employee);
   }

   @GetMapping("/employees")
   public List<Employee> getAllEmployees(){
      return employeeService.getAllEmployees();
   }
}
