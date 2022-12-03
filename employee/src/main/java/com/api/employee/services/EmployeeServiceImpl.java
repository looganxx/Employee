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
      
      employeeEntity = employeeRepository.save(employeeEntity);

      employee.setId(employeeEntity.getId());

      return employee;
   }

   @Override
   public List<Employee> getAllEmployees() {
      List<EmployeeEntity> employeeEntities = employeeRepository.findAll();

      List<Employee> employees = employeeEntities.stream().map(e -> 
         new Employee(e.getId(), 
            e.getFirstName(), 
            e.getLastName(), 
            e.getEmailId())).collect(Collectors.toList());

      return employees;
   }

   @Override
   public boolean deleteEmployee(Long id) {
      EmployeeEntity employee = employeeRepository.findById(id).get();
      employeeRepository.delete(employee);

      return true;
   }

   @Override
   public Employee getEmployeeById(Long id) {
      EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
      Employee employee = new Employee();
      BeanUtils.copyProperties(employeeEntity, employee);
      return employee;
   }

   @Override
   public Employee updateEmployee(Long id, Employee employee) {
      EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
      employeeEntity.setFirstName(employee.getFirstName());
      employeeEntity.setLastName(employee.getLastName());
      employeeEntity.setEmailId(employee.getEmailId());
      employeeRepository.save(employeeEntity);

      return employee;
   }
   
}
