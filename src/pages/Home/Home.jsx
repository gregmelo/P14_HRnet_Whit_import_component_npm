import Header from '../../components/header/Header.jsx';
import EmployeeForm from '../../components/employeeForm/EmployeeForm.jsx';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../redux/employeeSlice.js';
import "../../main.scss";

export default function Home() {

  const dispatch = useDispatch();

  const handleSave = (employee) => {
    dispatch(addEmployee(employee));
  };

  return (
    <main className="main-container">
        <Header/>
        <EmployeeForm onSave={handleSave}/>
    </main>
  );
};

