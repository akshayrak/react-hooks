import UseReducerComponent from "./components/UseReducerComponent";
import UseStateComponent from "./components/UseStateComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseRefComponent from "./components/UseRefComponent";
import UseLayoutEffectComponent from "./components/UseLayoutEffectComponent";
import UseContextComponent from "./components/UseContextComponent";


function App() {
  return (
    <div>
      <UseStateComponent />
      <hr/>
      <UseReducerComponent />
      <hr/>
      <UseEffectComponent />
      <hr/>
      <UseRefComponent />
      <hr/>
      <UseLayoutEffectComponent />
      <hr/>
      <UseContextComponent />
      <hr/>
    </div>
  );
}

export default App;
