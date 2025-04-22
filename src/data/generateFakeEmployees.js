// src/utils/generateFakeEmployees.js
import { faker } from '@faker-js/faker';
import { states, departments } from '../data/optionsSelects';

const generateFakeEmployees = (count = 10) => {
  const employees = [];

  const today = new Date();
  const currentYear = today.getFullYear();

  // Limites pour Date of Birth : 70 à 16 ans avant aujourd'hui
  const minBirthYear = currentYear - 70; // 1955
  const maxBirthYear = currentYear - 16; // 2009

  // Limites pour Start Date : 1971 à aujourd'hui
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
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      dateOfBirth: birthDate.toISOString().split('T')[0], // Format yyyy-mm-dd
      startDate: startDate.toISOString().split('T')[0], // Format yyyy-mm-dd
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.helpers.arrayElement(states).abbreviation, // Sélection aléatoire dans states
      zipCode: faker.location.zipCode('#####'), // Format à 5 chiffres
      department: faker.helpers.arrayElement(departments) // Sélection aléatoire dans departments
    };

    employees.push(employee);
  }

  return employees;
};

// Fonction pour initialiser les employés dans localStorage
const initializeEmployees = () => {
  const storedEmployees = localStorage.getItem('employees');
  if (!storedEmployees) {
    const fakeEmployees = generateFakeEmployees(10); // Génère 10 employés par défaut
    localStorage.setItem('employees', JSON.stringify(fakeEmployees));
    return fakeEmployees;
  }
  return JSON.parse(storedEmployees);
};

export { generateFakeEmployees, initializeEmployees };