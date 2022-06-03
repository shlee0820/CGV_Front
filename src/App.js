// import react-router-dom
import {BrowserRouter as Router, Routers, Route } from 'react-router-dom';

// import pages
import MainPage from './Pages/MainPage/MainPage';
import LoginPage from './Pages/LoginPage/LoginPage';

// 일단 페이지 2개만 파놓음 !
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={MainPage}/>
        <Route path="/login" element={LoginPage}/>
      </Routes>
    </Router>
  );
}

export default App;
