import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Routes from "~/routes/Routes";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="black" />
      <Routes />
    </SafeAreaProvider>
  );
}
