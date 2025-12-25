import { Routes, Route } from "react-router-dom";
import { Random } from "./pages/random";
import { View } from "./pages/view";
import Home from "./pages/home";
import { Form } from "./pages/form";
import { Form1 } from "./pages/form1";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/random" element={<Random />} />
      <Route path="/view" element={<View />} />
      <Route path="/form" element={<Form />} />
      <Route path="/form1" element={<Form1 />} />
    </Routes>
  );
};

export default App;
