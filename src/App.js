import Sprite from "./components/Sprite";
import "./App.css";

function App() {
  return (
    <div>
      <Sprite
        image={
          "https://raw.githubusercontent.com/devmentorlive/resources-for-react-rpg/master/m1.png"
        }
        data={{ x: 0, y: 0, w: 32, h: 32 }}
      />
    </div>
  );
}

export default App;
