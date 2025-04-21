import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Author from "./pages/Author";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authors/:slug" element={<Author />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
