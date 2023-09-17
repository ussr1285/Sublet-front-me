import './App.css';
import Index from './pages/Home';
import RoomInfo from './pages/RoomInfo';
import Search from './pages/Search';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          {/* 기본 페이지 */}
          <Route path="/" element={<Index />}/>
          <Route path="/roominfo" element={<RoomInfo />}/>
          <Route path="/search" element={<Search />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;