import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import { Outlet } from "react-router-dom";

function App() {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default App;

