import { View, StyleSheet } from "react-native";

export function Screen({ children }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Asegura que ocupe todo el espacio disponible
    backgroundColor: "black"
  },
});
