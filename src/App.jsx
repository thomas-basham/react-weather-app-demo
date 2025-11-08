import "./App.css";
import Counter from "./components/Counter";
import Weather from "./components/Weather";

function App() {
  return (
    <>
      <header>
        <h1>Weather App Demo</h1>
        <p>
          An app that fetches the weather from an API. Two concepts we will
          cover are useState and useEffect.
        </p>
      </header>
      <main>
        {/* <Counter /> */}
        <Weather />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
