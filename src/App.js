import "./App.css";
import AppRouter from "./router/Router";
import AuthContextProvider from "./context/AuthContext";

function App() {
  console.log("hello");
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
