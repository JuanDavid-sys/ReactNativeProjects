import React, { useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native";
import { Years } from "./Years";

export function CarCard({ car }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: car.image }} style={styles.image} />
      <View style={styles.secondcard}>
        <Text style={styles.title}>{car.model_name}</Text>
        <Years model_year={car.model_year} maxModel_year={2025} />
        <Text style={styles.description}>{car.description}</Text>
      </View>
    </View>
  );
}

export function AnimatedCarCard({ car, index }) {
  const opacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      delay: index * 2000,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <CarCard car={car} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#333",
    padding: 16,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  description: {
    fontSize: 14,
    color: "#ccc",
  },
  secondcard: {
    maxWidth: 150,
  }
});
