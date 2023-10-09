import "./App.css";
import Routes from "./RouterComponent";
import Provider from "./graphql/provider";

function App() {
  return (
    <div className="App">
      <Provider>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
