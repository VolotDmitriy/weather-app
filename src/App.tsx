import './App.scss'

import Header from "./Components/Header/Header.tsx";
import ElementsContainer from "./Components/ElementsContainer/ElementsContainer.tsx";
import {currentDate} from "./Utils/utils.ts";


function App() {

    return (
      <div className="main-body">
          <Header data={currentDate()}/>
          <ElementsContainer/>
      </div>
    )
}

export default App
