import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import NavApp from './components/NavApp';
import CourseApp from './components/CourseApp';
import ProductList from './components/ProductList';
import ProductAdd from './components/ProductAdd';
import CourseEnq from './components/CourseEnq';
import ShowEnq from './components/ShowEnq';
import AssApp from './components/AssApp';

function App() {
  return (
    <div className="App">
      <Router>
        <NavApp/>
        <Routes>
          <Route path="/" exact element={<AssApp/>}/>
          <Route path="/courseapp" exact element={<CourseApp/>}/>
          <Route path="/productlist" exact element={<ProductList/>}/>
          <Route path="/addproduct" exact element={<ProductAdd/>}/>
          <Route path="/coursenq" exact element={<CourseEnq/>}/>
          <Route path="/enqdetails" exact element={<ShowEnq/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
