import Header from "./Components/Header";
import { Home } from "./Components/Home";
import React from "react";
import SignIn from "./Components/SignIn";

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
