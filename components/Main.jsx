import React, { useState } from "react";
import { View, FlatList, StyleSheet, Text, SafeAreaView } from "react-native";
import { AnimatedCarCard } from "./CarCard";
import carsData from "../assets/carsData.json";
import { Link } from "expo-router";

export function Main() {
  const [cars] = useState(carsData);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Exclusivos Automóviles</Text>
      </View>
      <Link href="/about" style={{ color: "blue" }}>
        Voy a about
      </Link>

      <FlatList
        data={cars}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <AnimatedCarCard car={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  listContent: {
    paddingHorizontal: 10,
  },
});
