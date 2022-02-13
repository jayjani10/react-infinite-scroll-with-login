import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import InfiniteScroll from "./Pages/InfiniteScroll/InfiniteScroll";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/home" element={<InfiniteScroll />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
