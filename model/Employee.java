package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

import jakarta.persistence.Id;

@Entity
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
    private String name;
    private String department;
    private double salary;
    private int attendanceDays;
    
    
	public Employee(int id, String name, String department, double salary, int attendanceDays) {
		super();
		this.id = id;
		this.name = name;
		this.department = department;
		this.salary = salary;
		this.attendanceDays = attendanceDays;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getDepartment() {
		return department;
	}


	public void setDepartment(String department) {
		this.department = department;
	}


	public double getSalary() {
		return salary;
	}


	public void setSalary(double salary) {
		this.salary = salary;
	}


	public int getAttendanceDays() {
		return attendanceDays;
	}


	public void setAttendanceDays(int attendanceDays) {
		this.attendanceDays = attendanceDays;
	}
    
	
	
    

}
