import { useReplit } from "@replit/extensions-react";

function App() {
  const { replit } = useReplit();
  const currentTheme = replit.themes.getCurrentThemeValues();
  return (
    <>
      <pre>{JSON.stringify(currentTheme)}</pre>
    </>
  );
}

export default App;
