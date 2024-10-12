import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </>
  );
}
