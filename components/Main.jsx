import React, { useState } from "react";
import { Pressable,View, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { AnimatedCarCard } from "./CarCard";
import carsData from "../assets/carsData.json";
import { Link } from "expo-router";
import { Logo } from "./Logo"; 
import { CircleinfoIcon } from "./icons";

export function Main() {
  const [cars] = useState(carsData);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} className="flex-row justify-between items-center mb-4 mx-2">
        <View>
          <Logo />
        </View>
        <Link asChild href="/about">
          <Pressable>
            <CircleinfoIcon />
          </Pressable>
        </Link>
      </View>

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
  listContent: {
    paddingHorizontal: 10,
  },
});
