<a name="readme-top"></a>

# HRnet - Employee Management System

📄 Ce projet est aussi disponible en [français 🇫🇷](./README.fr.md)

<div align="center">

![HRnet Logo](./src/assets/logo.png)
</div>

HRnet is a modern React-based web application designed to manage employee records efficiently. It allows users to create new employee profiles, view a paginated list of employees, and search through them, with data persistence and a user-friendly interface.

---

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

HRnet provides the following functionalities:

### Employee Creation
- **Form Submission**: Create a new employee using a comprehensive form with fields for:
  - First Name, Last Name
  - Date of Birth (restricted to 1955–2009)
  - Start Date (restricted to 1971–present)
  - Address (Street, City, State, Zip Code)
  - Department
- **Validation**:
  - All fields are required.
  - First Name and Last Name must be at least 2 characters long and cannot contain numbers or only spaces.
  - Address fields (Street, City, Zip Code) cannot be empty or contain only spaces.
  - State and Department must be selected from dropdown menus.
- **Confirmation Modal**: Displays a success message ("Employee [Name] has been successfully added to the list.") or an error message if validation fails.

### Employee List
- **Paginated Table**: Displays a list of employees in a table with 10 employees per page.
- **Search Functionality**: Filter employees by name using a search input.
- **Columns**: Includes First Name, Last Name, Date of Birth, Start Date, Street, City, State, Zip Code, and Department.
- **Navigation**: Links to return to the home page.

### Data Management
- **Initial Data**: Generates 20 fictional employees on first load, persisted in `localStorage`.
- **Redux Integration**: Uses Redux Toolkit to manage employee data centrally.
- **Persistence**: Employee data is saved in `localStorage` for persistence across page reloads.

### User Interface
- **Custom Components**:
  - Reusable `Button` with a radial gradient style.
  - `Input` for text and number fields.
  - `Select` for dropdown menus (States and Departments).
  - `DatePicker` with custom styling (white background for month/year dropdowns, calendar icon on the right).
  - `Modal` for success/error messages with distinct styling (green for success, red for errors).
- **Responsive Design**: Layout adapts to different screen sizes.
- **Consistent Styling**: Uses a cohesive color palette (`#3e4720`, `#85a885`, `#a1a88c`) and rounded borders.

---

## Technologies

- **React**: Frontend library for building the user interface.
- **React Router**: For client-side routing (`/` for home, `/employees-list` for employee list).
- **Redux Toolkit**: Centralized state management for employees.
- **@faker-js/faker**: Generates realistic fake employee data.
- **react-datepicker**: Custom date picker for selecting dates.
- **react-icons**: For calendar icon in `DatePicker`.
- **SCSS**: For modular and maintainable styling.
- **localStorage**: For data persistence.

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/hrnet.git
   cd hrnet

    Install Dependencies: Ensure you have Node.js installed. Then run:
    bash

npm install
This installs all required packages, including:

    react, react-dom, react-router-dom
    @reduxjs/toolkit, react-redux
    @faker-js/faker
    react-datepicker, react-icons
    sass (for SCSS support)

Start the Development Server:
bash

    npm start
    The application will open at http://localhost:3000 in your default browser.

## Usage

    Home Page (/):
        Access the employee creation form.
        Fill in all required fields (First Name, Last Name, Date of Birth, Start Date, Street, City, State, Zip Code, Department).
        Click the "Save" button.
        A modal will confirm success or display an error if validation fails.
        Navigate to the employee list using the link at the bottom (if added).
    Employee List Page (/employees-list):
        View a table of all employees (initially 20 fictional employees).
        Use the search bar to filter employees by name.
        Navigate through pages using the pagination buttons ("Previous", page numbers, "Next").
        Return to the home page using the "Home" link.
    Data Persistence:
        Employees are saved in localStorage and persist across page reloads.
        To reset data, clear localStorage in the browser’s developer tools (localStorage.clear()).

## Project Structure

```plaintext
📦HRnet
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┗ 📜logo.png
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂button
 ┃ ┃ ┃ ┣ 📜Button.jsx
 ┃ ┃ ┃ ┗ 📜Button.scss
 ┃ ┃ ┣ 📂customDatePicker
 ┃ ┃ ┃ ┣ 📜CustomDatePicker.jsx
 ┃ ┃ ┃ ┗ 📜CustomDatePicker.scss
 ┃ ┃ ┣ 📂employeeForm
 ┃ ┃ ┃ ┣ 📜EmployeeForm.jsx
 ┃ ┃ ┃ ┗ 📜EmployeeForm.scss
 ┃ ┃ ┣ 📂employeesList
 ┃ ┃ ┃ ┣ 📜EmployeesListComponent.jsx
 ┃ ┃ ┃ ┗ 📜EmployeesListComponent.scss
 ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┃ ┗ 📜Header.scss
 ┃ ┃ ┣ 📂input
 ┃ ┃ ┃ ┣ 📜Input.jsx
 ┃ ┃ ┃ ┗ 📜Input.scss
 ┃ ┃ ┣ 📂modal
 ┃ ┃ ┃ ┣ 📜Modal.jsx
 ┃ ┃ ┃ ┗ 📜Modal.scss
 ┃ ┃ ┗ 📂select
 ┃ ┃ ┃ ┣ 📜Select.jsx
 ┃ ┃ ┃ ┗ 📜Select.scss
 ┃ ┣ 📂data
 ┃ ┃ ┣ 📜generateFakeEmployees.js
 ┃ ┃ ┗ 📜optionsSelects.js
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂EmployeesList
 ┃ ┃ ┃ ┗ 📜EmployeesList.jsx
 ┃ ┃ ┣ 📂Home
 ┃ ┃ ┃ ┗ 📜Home.jsx
 ┃ ┃ ┗ 📂NotFound
 ┃ ┃ ┃ ┣ 📜NotFound.jsx
 ┃ ┃ ┃ ┗ 📜NotFound.scss
 ┃ ┣ 📂redux
 ┃ ┃ ┣ 📜employeeSlice.js
 ┃ ┃ ┗ 📜store.js
 ┃ ┣ 📜main.jsx
 ┃ ┣ 📜main.scss
 ┃ ┗ 📜Router.jsx
 ┣ 📜eslint.config.js
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜README.fr.md
 ┗ 📜vite.config.js
```

## Contributing

Contributions are welcome! To contribute:

    Fork the repository.
    Create a new branch (git checkout -b feature/your-feature).
    Make your changes and commit (git commit -m "Add your feature").
    Push to the branch (git push origin feature/your-feature).
    Open a pull request.

Please ensure your code follows the existing style and includes tests if applicable.

## License

This project is licensed under the MIT License. See the  file for details.
<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Contact

Grégory Véricel - [LinkedIn](https://www.linkedin.com/in/gregory-vericel/) - gregoryvericel6@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>