// // src/components/EmployeesListComponent.jsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import Button from '../button/Button';
// import Input from '../input/Input';
// import './EmployeesListComponent.scss';

// const EmployeesListComponent = () => {
//   const employees = useSelector(state => state.employees.employees); // Récupérer depuis Redux
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const employeesPerPage = 10; // Nombre d'employés par page

// // Filtrer les employés
// const filteredEmployees = employees.filter(employee =>
//   `${employee.firstName} ${employee.lastName}`
//     .toLowerCase()
//     .includes(searchTerm.toLowerCase())
// );

//   // Calculer les employés à afficher pour la page actuelle
//   const indexOfLastEmployee = currentPage * employeesPerPage;
//   const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
//   const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

//   // Calculer le nombre total de pages
//   const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);

//   // Gérer le changement de page
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="employee-list-container">
//       <h1>Current Employees</h1>

//       {/* Input de recherche */}
//       <div className="search-container">
//         <Input
//           type="text"
//           placeholder="Search by name..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="search-input"
//         />
//       </div>

//       {/* Tableau des employés */}
//       <table className="employee-table">
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Date of Birth</th>
//             <th>Start Date</th>
//             <th>Street</th>
//             <th>City</th>
//             <th>State</th>
//             <th>Zip Code</th>
//             <th>Department</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentEmployees.length > 0 ? (
//             currentEmployees.map((employee, index) => (
//               <tr key={index}>
//                 <td>{employee.firstName}</td>
//                 <td>{employee.lastName}</td>
//                 <td>{employee.dateOfBirth}</td>
//                 <td>{employee.startDate}</td>
//                 <td>{employee.street}</td>
//                 <td>{employee.city}</td>
//                 <td>{employee.state}</td>
//                 <td>{employee.zipCode}</td>
//                 <td>{employee.department}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="9">No employees found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Pagination avec le composant Button */}
//       {totalPages > 1 && (
//         <div className="pagination">
//           <Button
//             text="Previous"
//             onClick={() => handlePageChange(currentPage - 1)}
//             className={currentPage === 1 ? 'disabled' : ''}
//           />
//           {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
//             <Button
//               key={pageNumber}
//               text={pageNumber.toString()}
//               onClick={() => handlePageChange(pageNumber)}
//               className={currentPage === pageNumber ? 'active' : ''}
//             />
//           ))}
//           <Button
//             text="Next"
//             onClick={() => handlePageChange(currentPage + 1)}
//             className={currentPage === totalPages ? 'disabled' : ''}
//           />
//         </div>
//       )}

//       {/* Lien vers Home */}
//       <Link to="/" className="home-link">Home</Link>
//     </div>
//   );
// };

// export default EmployeesListComponent;

// src/components/EmployeesListComponent.jsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';
import Button from '../button/Button';
import Input from '../input/Input';
import './EmployeesListComponent.scss';

/**
 * @component
 * @description A component that displays a paginated, searchable, and sortable table of employees.
 * Uses TanStack Table for table functionality, with Redux for state management and React Router for navigation.
 * @returns {JSX.Element} The rendered employee list component.
 */
const EmployeesListComponent = () => {
  // Retrieve employee data from Redux store
  const employees = useSelector((state) => state.employees.employees);

  // State for global search filter
  const [globalFilter, setGlobalFilter] = useState('');

  // State for pagination: number of employees per page
  const [pageSize, setPageSize] = useState(10);

  // State for pagination: current page index (0-based)
  const [pageIndex, setPageIndex] = useState(0);

  // Memoized column definitions for TanStack Table
  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
        enableSorting: true,
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
        enableSorting: true,
      },
      {
        accessorKey: 'dateOfBirth',
        header: 'Date of Birth',
        enableSorting: true,
      },
      {
        accessorKey: 'startDate',
        header: 'Start Date',
        enableSorting: true,
      },
      {
        accessorKey: 'street',
        header: 'Street',
        enableSorting: true,
      },
      {
        accessorKey: 'city',
        header: 'City',
        enableSorting: true,
      },
      {
        accessorKey: 'state',
        header: 'State',
        enableSorting: true,
      },
      {
        accessorKey: 'zipCode',
        header: 'Zip Code',
        enableSorting: true,
      },
      {
        accessorKey: 'department',
        header: 'Department',
        enableSorting: true,
      },
    ],
    [] // Empty dependency array to memoize columns
  );

  // Configure TanStack Table instance
  const table = useReactTable({
    data: employees, // Data source for the table
    columns, // Column definitions
    state: {
      globalFilter, // Global search filter state
      pagination: { pageIndex, pageSize }, // Pagination state
    },
    // Update global filter state
    onGlobalFilterChange: setGlobalFilter,
    // Update pagination state when changed
    onPaginationChange: (updater) => {
      const newState = typeof updater === 'function' ? updater({ pageIndex, pageSize }) : updater;
      setPageIndex(newState.pageIndex);
      setPageSize(newState.pageSize);
    },
    getCoreRowModel: getCoreRowModel(), // Core row model for table rendering
    getFilteredRowModel: getFilteredRowModel(), // Enable global filtering
    getPaginationRowModel: getPaginationRowModel(), // Enable pagination
    getSortedRowModel: getSortedRowModel(), // Enable column sorting
  });

  return (
    <div className="employee-list-container">
      {/* Page title */}
      <h1>Current Employees</h1>

      {/* Header containing search and page size selector */}
      <div className="employee-list-header">
        {/* Search input for filtering table data */}
        <div className="search-container">
          <Input
            type="text"
            placeholder="Search in all columns..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Dropdown to select number of employees per page */}
        <div className="page-size-selector">
          <label htmlFor='pageSize'>Show </label>
          <select
            id='pageSize'
            value={pageSize}
            onChange={(e) => {
              const newSize = Number(e.target.value);
              setPageSize(newSize);
              table.setPageSize(newSize);
            }}
          >
            {[5, 10, 20, 25, 50].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <span> employees per page</span>
        </div>
      </div>

      {/* Employee data table */}
      <table className="employee-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  style={{ cursor: header.column.getCanSort() ? 'pointer' : 'default' }}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {/* Display sorting indicators */}
                  {header.column.getIsSorted() ? (
                    header.column.getIsSorted() === 'asc' ? ' ▲' : ' ▼'
                  ) : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9}>No employees found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination controls */}
      {table.getPageCount() > 1 && (
        <div className="pagination">
          {/* Previous page button */}
          <Button
            text="Previous"
            onClick={() => table.previousPage()}
            className={!table.getCanPreviousPage() ? 'disabled' : ''}
          />
          {/* Page number buttons */}
          {Array.from({ length: table.getPageCount() }, (_, i) => i + 1).map(
            (pageNumber) => (
              <Button
                key={pageNumber}
                text={pageNumber.toString()}
                onClick={() => table.setPageIndex(pageNumber - 1)}
                className={
                  table.getState().pagination.pageIndex + 1 === pageNumber
                    ? 'active'
                    : ''
                }
              />
            )
          )}
          {/* Next page button */}
          <Button
            text="Next"
            onClick={() => table.nextPage()}
            className={!table.getCanNextPage() ? 'disabled' : ''}
          />
        </div>
      )}

      {/* Navigation link to home page */}
      <Link to="/" className="home-link">
        Home
      </Link>
    </div>
  );
};

export default EmployeesListComponent;