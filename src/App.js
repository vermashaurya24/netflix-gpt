import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={appStore}>
      <QueryClientProvider client={queryClient}>
        <Body />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
