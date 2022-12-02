package com.api.employee.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.api.employee.entity.EmployeeEntity;
import com.api.employee.model.Employee;
import com.api.employee.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

   private EmployeeRepository employeeRepository;

   public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
      this.employeeRepository = employeeRepository;
   }

   @Override
   public Employee createEmployee(Employee employee) {
      EmployeeEntity employeeEntity = new EmployeeEntity();

      BeanUtils.copyProperties(employee, employeeEntity);
      
      employeeRepository.save(employeeEntity);

      return employee;
   }

   @Override
   public List<Employee> getAllEmployees() {
      List<EmployeeEntity> employeeEntities = employeeRepository.findAll();

      List<Employee> employees = employeeEntities.stream().map(e -> 
         new Employee(e.getId(), 
            e.getEmailId(), 
            e.getLastName(), 
            e.getEmailId())).collect(Collectors.toList());

      return employees;
   }
   
}
