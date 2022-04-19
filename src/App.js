import "bootstrap/dist/css/bootstrap.min.css";
import ButtonDisplay from "./components/Buttons/ButtonDisplay";
import InputDisplay from "./components/InputsComponent/InputDisplay";
import TablesDisplay from "./components/TablesComponent/TablesDisplay";

function App(c) {
    return (
        <div className="App">
            <div>
                {" "}
                <ButtonDisplay />
            </div>
            <div>
                <InputDisplay />
            </div>
            <div>
                {" "}
                <TablesDisplay />
            </div>
        </div>
    );
}

export default App;
