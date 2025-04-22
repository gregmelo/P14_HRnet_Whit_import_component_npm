// src/components/EmployeesListComponent.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../button/Button';
import Input from '../input/Input';
import './EmployeesListComponent.scss';

const EmployeesListComponent = () => {
  const employees = useSelector(state => state.employees.employees); // Récupérer depuis Redux
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 10; // Nombre d'employés par page

// Filtrer les employés
const filteredEmployees = employees.filter(employee =>
  `${employee.firstName} ${employee.lastName}`
    .toLowerCase()
    .includes(searchTerm.toLowerCase())
);

  // Calculer les employés à afficher pour la page actuelle
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);

  // Gérer le changement de page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="employee-list-container">
      <h1>Current Employees</h1>

      {/* Input de recherche */}
      <div className="search-container">
        <Input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Tableau des employés */}
      <table className="employee-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Start Date</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.length > 0 ? (
            currentEmployees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.dateOfBirth}</td>
                <td>{employee.startDate}</td>
                <td>{employee.street}</td>
                <td>{employee.city}</td>
                <td>{employee.state}</td>
                <td>{employee.zipCode}</td>
                <td>{employee.department}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No employees found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination avec le composant Button */}
      {totalPages > 1 && (
        <div className="pagination">
          <Button
            text="Previous"
            onClick={() => handlePageChange(currentPage - 1)}
            className={currentPage === 1 ? 'disabled' : ''}
          />
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
            <Button
              key={pageNumber}
              text={pageNumber.toString()}
              onClick={() => handlePageChange(pageNumber)}
              className={currentPage === pageNumber ? 'active' : ''}
            />
          ))}
          <Button
            text="Next"
            onClick={() => handlePageChange(currentPage + 1)}
            className={currentPage === totalPages ? 'disabled' : ''}
          />
        </div>
      )}

      {/* Lien vers Home */}
      <Link to="/" className="home-link">Home</Link>
    </div>
  );
};

export default EmployeesListComponent;