import './App.css';
import Films from './Components/Films/Films';
import Layout from './Containers/Layout/Layout';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='shows/:id' element={<Films />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;