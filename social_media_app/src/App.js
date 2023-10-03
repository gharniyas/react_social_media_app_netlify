import About from "./About";
import Missing from "./Missing";
import Header from "./Header";
import Home from "./Home";
import Nav from "./Nav";
import Postpage from "./Postpage";
import Newpost from "./Newpost";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import EditPost from "./EditPost";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header title="Deadlox Social Media" />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post">
            <Route index element={<Newpost />} />
            <Route path=":id" element={<Postpage />} />
          </Route>
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>

        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
