import React from "react";
import "./App.scss";
import MainContainer from "./roots/Home/MainContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import("./roots/Home/Home"));
const NotFound = React.lazy(() => import("./components/NotFound/NotFound"));
const Shop = React.lazy(() => import("./roots/Shop/Shop"));
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainContainer />}>
            <Route path="" element={<Home />} />
            <Route path="Shop/:id" element={<Shop />}></Route>
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
