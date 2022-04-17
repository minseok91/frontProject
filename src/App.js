import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Main />
            </div>
        </Router>
    );
}

export default App;
