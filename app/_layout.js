import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Pressable, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";
import { Logo } from "../components/Logo";
import { CircleinfoIcon } from "../components/icons";

export default function Layout() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack 
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                <CircleinfoIcon />
              </Pressable>
            </Link>
          )
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
