import React, { useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Animated, Pressable } from "react-native";
import { Years } from "./Years";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export function CarCard({ car }) {
  return (
    <Link href={`/${car.model_name}`} asChild>
      <StyledPressable className="active:opacity-70 border border-black active:border-white/50 mb-2 bg-gray-400/25 rounded-xl p-4">
        <View style={styles.card}>
          <Image source={{ uri: car.image }} style={styles.image} />
          <View style={styles.secondcard} className="flex-shrink">
            <Text style={styles.title}>{car.model_name}</Text>
            <Years model_year={car.model_year} maxModel_year={2025} />
            <Text style={styles.description}>{car.description}</Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
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
    gap: 4,
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
});
