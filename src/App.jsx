import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Hogar from "./page/Hogar";
import Movil from "./page/Movil";
import Otros from "./page/Otros";
import NotFound from "./page/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/hogar' element={<Hogar />}></Route>
          <Route path='movil' element={<Movil />}></Route>
          <Route path='otros' element={<Otros />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>  
      </BrowserRouter>
    </>
  );
}

export default App;
