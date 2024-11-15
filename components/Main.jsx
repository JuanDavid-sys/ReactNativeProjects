import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, SafeAreaView } from 'react-native';
import { AnimatedCarCard } from './CarCard';
import carsData from '../assets/carsData.json';
import { Link } from "expo-router"

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
        keyExtractor={(car) => car.id.toString()} // keyExtractor es una funcion que le dice a FlatList como obtener una clave unica para cada elemento en la lista. toString() se asegura de que cada valor sea de tipo string
        renderItem={({ item }) => <AnimatedCarCard car={item} />} // recibimos el objeto que tiene un item osea cada objeto individual del json, luego se lo pasamos a CarCard
        contentContainerStyle={styles.listContent} // estilo que se aplica al contenedor interior de la lista
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', 
  },
  listContent: {
    paddingHorizontal: 10,
  },
});
