import { Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/header";
import Meals from './components/Meals/Meals'
function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals/>
      </main>
      <Cart />
    </Fragment>
    
  );
}

export default App;
