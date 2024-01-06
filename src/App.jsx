import './index.css';
import Nav from './components/Nav'
import Header from './components/Header'
import Employees from './components/Employees'
import Footer from './components/Footer'
import GroupedTeamMembers from './components/GroupedTeamMembers'
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

function App() {

  return (
    <DataProvider>
      <Router>
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<Employees />}>
          </Route>
          <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers />}>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </DataProvider>

  );
}

export default App;