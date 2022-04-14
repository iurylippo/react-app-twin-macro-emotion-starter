import { AppButton, AppTitle } from "./App.style";

export function App() {
  return (
    <div className="App">
      <AppTitle>
        Hello world
      </AppTitle>
      <AppButton tw="bg-primary-300">
        Click
      </AppButton>
    </div>
  );
}

