import React, { useState } from "react";
import { Pressable,View, FlatList, StyleSheet, SafeAreaView, ScrollView  } from "react-native";
import { AnimatedCarCard } from "./CarCard";
import carsData from "../assets/carsData.json";
import { Link } from "expo-router";
import { Logo } from "./Logo"; 
import { CircleinfoIcon } from "./icons";

export function Main() {
  const [cars] = useState(carsData);

  return (
    <FlatList
      className="bg-black"
      data={cars}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <AnimatedCarCard car={item} />}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
}

const styles = StyleSheet.create({
  
});
