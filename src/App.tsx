import { AppButton, AppConditional, AppTitle } from "./App.style";

export function App() {
  return (
    <div className="App">
      <AppTitle>
        Hello world
      </AppTitle>
      <AppButton>
        Click
      </AppButton>
      <AppConditional hasBorder>
        TESTE
      </AppConditional>
    </div>
  );
}

