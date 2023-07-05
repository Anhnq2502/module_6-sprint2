import './App.css';
import {HomePage} from "./pages/HomePage";
import {Route, Routes} from "react-router";
import {Login} from "./pages/Login";
import {ProductList} from "./components/admin/ProductList";

function App() {
  return (
      <Routes>
        <Route path={""} element={<HomePage/>}></Route>
        <Route path={"/login"} element={<Login/>}></Route>
        <Route path={"/admin/list"} element={<ProductList/>}></Route>

      </Routes>
  );
}

export default App;
