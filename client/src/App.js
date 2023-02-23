import "./App.css";
import Home from "./Components/Home";
import logo from "./Assets/background.jpg";

function App() {
  return (
    <div style={styles.home}>
      {/* <Home /> */}
      {/* <img style={styles.container} /> */}
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: `url(${logo})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  },
  home: { display: "flex", justifyContent: "center", minHeight: "100vh" },
};

export default App;
