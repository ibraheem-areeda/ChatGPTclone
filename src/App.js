import "./App.css";
import PageContainer from "./components/UI/PageContainer";
import Chats from "./pages/Chats";
import { ThemeContextProvider } from "./store/theme-context";

function App() {
  return (
    <ThemeContextProvider>
      <PageContainer>
        <Chats />
      </PageContainer>
    </ThemeContextProvider>
  );
}

export default App;
