import Navbar from "./components/navbar";
import "./home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="Hero-section">
        <h2>Hello There 🖐🏾 </h2>
        <p>
          my name is Spencer Delimas <br />
          I,m a{" "}
          <h1>
            | Full Stack <span>Developer</span> |
          </h1>
        </p>
      </div>
    </div>
  );
}
export default Home;
