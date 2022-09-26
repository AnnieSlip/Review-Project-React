import "./App.css";
import Review from "./Review";

function App() {
  return (
    <>
      <div>
        <p id="description">Our Reviews</p>
        <div className="underline"></div>
      </div>
      <article className="app_container">
        <Review />
      </article>
    </>
  );
}

export default App;
