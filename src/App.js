import { Col, Row } from "react-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Footer from "./components/footer/index";
import Header from "./components/header";
import MainPage from "./pages/main-page/";
import Categories from "./pages/categories";
import CategoryDetails from "./pages/category-details";
import { useDispatch, useSelector } from "react-redux";
import useApi from "./hooks/useApi";
import { SET_CATEGORIES } from "./redux/reducers/categoriesReducer";

function App() {
  const dispatch = useDispatch();
  const api = useApi();
  const categoriesState = useSelector((state) => state.categoriesState);
  console.log(">> categoriesState", categoriesState);

  if (!categoriesState.initialized) {
    api
      .get("public/categories/listMainCategories")
      .then((response) => {
        console.log(">> API RESPONSE", response);

        dispatch({
          type: SET_CATEGORIES,
          payload: response.data.data,
        });
      })
      .catch(() => {
        alert("Api isteği esnasında bir hata oluştu.");

        dispatch({
          type: SET_CATEGORIES,
          payload: [],
        });
      });
  }

  return (
    <BrowserRouter>
      <div className="container py-3">
        <Header />

        <Routes>
          <Route index element={<MainPage />} />

          <Route path={"categories"}>
            <Route index element={<Categories />} />
            <Route path={":slug"} element={<CategoryDetails />} />
          </Route>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
