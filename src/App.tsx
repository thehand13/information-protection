import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import First from "./components/labs/first/First";
import Second from "./components/labs/second/Second";
import Third from "./components/labs/third/Third";
import Fourth from "./components/labs/fourth/Fourth";
import Fifth from "./components/labs/fifth/Fifth";
import Main from "./components/main/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/fourth" element={<Fourth />} />
        <Route path="/fifth" element={<Fifth />} />
      </Route>
    </Routes>
  );
}

export default App;
