import { BrowserRouter } from "react-router-dom";
import { ApplicationRouter } from "./Routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <ApplicationRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
