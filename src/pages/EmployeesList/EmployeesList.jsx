import Header from "../../components/header/Header";
import EmployeesListComponent from "../../components/employeesList/EmployeesListComponent";

export default function EmployeeList() {
    return (
        <main className="main-container">
        <Header showViewEmployeesListButton={false}/>
        <EmployeesListComponent />
        </main>
    );
    }