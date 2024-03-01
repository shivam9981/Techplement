import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { mydata } from './redux/action'
import Home from './Component/Home';
import { Route, Routes } from 'react-router-dom'
import History from './Component/History';
import Navbar from './Component/Navbar';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(mydata());
  }, [])
  console.log("project Done completed")
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
