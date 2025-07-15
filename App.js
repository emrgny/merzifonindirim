import { Provider } from "react-redux";
import RootNavigator from "./navigations/RootNavigator/RootNavigator";

export default function App() {
  return (
    <Provider store={Store}>
      <RootNavigator />
    </Provider>
  );
}
