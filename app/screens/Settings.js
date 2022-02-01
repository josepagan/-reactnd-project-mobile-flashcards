import { View, StyleSheet } from "react-native";
import Notifications from "../components/Notifications";
import DeleteAll from "../components/DeleteAll";


const Settings = () => {
  return (
    <View style={{ backgroundColor: "#ededed", padding: 20 }}>
      <View style={styles.container}>
        <Notifications />
      </View>
      <View style={styles.container}>
        <DeleteAll />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  }
})

export default Settings;

