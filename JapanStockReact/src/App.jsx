import HomePage from "./Pages/HomePage";
import SearchResults from "./Pages/SearchResults";
import ResultProduct from "./Pages/ResultProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";
import styles from "./index.scss";

function App() {
  return (
    <div className={styles.div}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<SearchResults />} />
          <Route path="/product" element={<ResultProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
