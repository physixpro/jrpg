import Sprite from "./components/Sprite";
import Actor from "./components/actor/Actor";
import "./App.css";

function App() {
  return (
    <div>
      <Sprite
        image={"/sprites/skins/m1.png"}
        data={{
          x: 0,
          y: 0,
          w: 32,
          h: 32,
        }}
      />
    </div>
  );
}

export default App;
