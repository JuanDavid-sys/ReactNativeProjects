import { Link, Stack, Slot } from "expo-router";
import { Pressable, View } from "react-native";

export default function Layout() {
  return (
    <View className="flex-1 bg-black" style={{ backgroundColor: "black" }}>
        <Slot />
    </View>
  );
}