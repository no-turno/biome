import { useReplit } from "@replit/extensions-react";
import Index from "./routes";

function App() {
  const { replit } = useReplit();
  const currentTheme = replit.themes.getCurrentThemeValues();
  return (
    <>
      <Index />
      <pre>{JSON.stringify(currentTheme)}</pre>
    </>
  );
}

export default App;
