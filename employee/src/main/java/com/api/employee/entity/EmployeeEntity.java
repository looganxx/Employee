package com.api.employee.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
@Table(name = "employees")
public class EmployeeEntity {
   
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY) 
   private Long Id;
   private String firstName;
   private String lastName;
   private String emailId;
}
