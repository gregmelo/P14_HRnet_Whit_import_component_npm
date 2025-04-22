// src/Router.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // Ajout de Provider
import { store } from './redux/store'; // Import du store
import Home from './pages/Home/Home';
import EmployeesList from "./pages/EmployeesList/EmployeesList";
import NotFound from './pages/NotFound/NotFound';

export default function AppRouter() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees-list" element={<EmployeesList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}