// src/redux/employeeSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { faker } from '@faker-js/faker';
import { states, departments } from '../data/optionsSelects';

// Générer des employés fictifs
const generateFakeEmployees = (count = 20) => {
  const employees = [];
  const today = new Date();
  const currentYear = today.getFullYear();
  const minBirthYear = currentYear - 70; // 1955
  const maxBirthYear = currentYear - 16; // 2009
  const minStartYear = minBirthYear + 16; // 1971

  for (let i = 0; i < count; i++) {
    const birthYear = faker.number.int({ min: minBirthYear, max: maxBirthYear });
    const birthDate = faker.date.between({
      from: new Date(birthYear, 0, 1),
      to: new Date(birthYear, 11, 31)
    });
    const startYear = faker.number.int({ min: minStartYear, max: currentYear });
    const startDate = faker.date.between({
      from: new Date(startYear, 0, 1),
      to: new Date(startYear === currentYear ? today : `${startYear}-12-31`)
    });

    const employee = {
      id: faker.string.uuid(), // ID unique pour chaque employé
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      dateOfBirth: birthDate.toISOString().split('T')[0],
      startDate: startDate.toISOString().split('T')[0],
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.helpers.arrayElement(states).abbreviation,
      zipCode: faker.location.zipCode('#####'),
      department: faker.helpers.arrayElement(departments)
    };

    employees.push(employee);
  }

return employees;
};

const loadInitialState = () => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      return {
        employees: JSON.parse(storedEmployees)
      };
    }
  
    // Générer 20 employés et les sauvegarder dans localStorage
    const initialEmployees = generateFakeEmployees(20);
    localStorage.setItem('employees', JSON.stringify(initialEmployees));
    return {
      employees: initialEmployees
    };
  };

const initialState = loadInitialState();

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push({ ...action.payload, id: faker.string.uuid() });
      localStorage.setItem('employees', JSON.stringify(state.employees)); // Sauvegarde dans le localStorage
    }
  }
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;