import { StyleSheet } from "react-native";
import { AuthGuard } from "../components/AuthGuard";
import { CreateContentScreen } from "../components/CreateContentScreen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <AuthGuard>
      <CreateContentScreen />
    </AuthGuard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
