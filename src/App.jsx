import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Author from "./pages/Author";
import Post from "./pages/Post";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authors/:slug" element={<Author />} />
          <Route path="/posts/:slug" element={<Post />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
