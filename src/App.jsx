import { Counter } from "./components/Counter";
import ThemeSwitch from "./components/themeSwitch";
import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Cart from "./components/Cart";
import LanguageSwitch from "./components/LanguageSwitch";
import Notifications from "./components/Notifications";
import Click from "./components/Click";
import Users from "./components/Users";
import { Form } from "./components/Form";
function App() {
  return (
    <>
      <Counter></Counter>
      <ThemeSwitch></ThemeSwitch>
      <Todo></Todo>
      <Modal></Modal>
      <Cart></Cart>
      <LanguageSwitch></LanguageSwitch>
      <Notifications></Notifications>
      <Click></Click>
      <Users></Users>
      <Form></Form>
    </>
  );
}

export default App;
