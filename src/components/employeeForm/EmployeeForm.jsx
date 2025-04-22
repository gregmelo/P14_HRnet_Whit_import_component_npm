// src/components/EmployeeForm.js
import { useState } from 'react';
import Button from '../button/Button';
import { CustomDatePicker as DatePicker } from '@gregmelo/custom-datepicker-component';
import Input from '../input/Input';
import Select from '../select/Select';
import { Modal } from '@gregmelo/modal-component';
import { states, departments } from '../../data/optionsSelects';
import './EmployeeForm.scss';


/**
 * Component to create a new employee
 * @param {Object} props
 * @param {Function} props.onSave - Function called when saving the employee
 * @returns {JSX.Element}
 */
const EmployeeForm = ({ onSave }) => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: 'Sales'
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEmployee(prev => ({ ...prev, [id]: value }));
  };

  const validateForm = () => {
    if (!employee.firstName.trim()) {
      return 'First Name is required.';
    }
    if (employee.firstName.trim().length < 2) {
      return 'First Name must be at least 2 characters long.';
    }
    if (/\d/.test(employee.firstName.trim())) {
      return 'First Name cannot contain numbers.';
    }

    if (!employee.lastName.trim()) {
      return 'Last Name is required.';
    }
    if (employee.lastName.trim().length < 2) {
      return 'Last Name must be at least 2 characters long.';
    }
    if (/\d/.test(employee.lastName.trim())) {
      return 'Last Name cannot contain numbers.';
    }

    if (!employee.dateOfBirth) {
      return 'Date of Birth is required.';
    }

    if (!employee.startDate) {
      return 'Start Date is required.';
    }

    if (!employee.street.trim()) {
      return 'Street is required.';
    }

    if (!employee.city.trim()) {
      return 'City is required.';
    }

    if (!employee.zipCode.trim()) {
      return 'Zip Code is required.';
    }

    if (!employee.state) {
      return 'Please select a State.';
    }

    if (!employee.department) {
      return 'Please select a Department.';
    }

    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee data:', employee);

    const errorMessage = validateForm();
    if (errorMessage) {
      setModalMessage(errorMessage);
      setIsError(true);
      setIsModalOpen(true);
      return;
    }

    onSave(employee);
    setModalMessage(
      `Employee ${employee.firstName} ${employee.lastName} has been successfully added to the list.`
    );
    setIsError(false);
    setIsModalOpen(true);
    setEmployee({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      startDate: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      department: 'Sales'
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage('');
    setIsError(false);
  };

  return (
    <div className="container">
      <h2>Create an Employee</h2>
      <form id="create-employee" onSubmit={handleSubmit}>
        <div className="identity-inputs">
          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <Input
              id="firstName"
              value={employee.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <Input
              id="lastName"
              value={employee.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
            />
          </div>
        </div>

        <div className="dates-pickers">
          <div className="input-group">
            <DatePicker
              id="dateOfBirth"
              label="Date of Birth"
              value={employee.dateOfBirth}
              onChange={handleChange}
              type="birth"
            />
          </div>
          <div className="input-group">
            <DatePicker
              id="startDate"
              label="Start Date"
              value={employee.startDate}
              onChange={handleChange}
              type="start"
            />
          </div>
        </div>

        <fieldset className="address">
          <legend>Address</legend>
          <div className="input-group">
            <label htmlFor="street">Street</label>
            <Input
              id="street"
              value={employee.street}
              onChange={handleChange}
              placeholder="Enter street"
            />
          </div>
          <div className="input-group">
            <label htmlFor="city">City</label>
            <Input
              id="city"
              value={employee.city}
              onChange={handleChange}
              placeholder="Enter city"
            />
          </div>
          <div className="zip-state">
            <div className="input-group">
              <label htmlFor="zipCode">Zip Code</label>
              <Input
                id="zipCode"
                type="number"
                value={employee.zipCode}
                onChange={handleChange}
                placeholder="Enter zip code"
              />
            </div>
            <div className="input-group">
              <label htmlFor="state">State</label>
              <Select
                id="state"
                value={employee.state}
                onChange={handleChange}
                options={states}
                optionKey="abbreviation"
                optionLabel="name"
                placeholder="Select a state"
              />
            </div>
          </div>
        </fieldset>

        <div className="department-group">
          <label htmlFor="department">Department</label>
          <Select
            id="department"
            value={employee.department}
            onChange={handleChange}
            options={departments}
            placeholder="Select a department"
          />
        </div>

        <Button text="Save" type="submit" />
      </form>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        message={modalMessage}
        isError={isError}
      />
    </div>
  );
};

export default EmployeeForm;