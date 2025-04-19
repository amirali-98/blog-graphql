import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authors/:slug" element={<h2>Author Page</h2>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
