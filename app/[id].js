import { Link, Stack } from "expo-router";
import { Text, View, ActivityIndicator, ScrollView, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { useState, useEffect } from "react";
import carsData from "../assets/carsData.json";
import { Years } from "../components/Years";

export default function Detail() {
  const { id } = useLocalSearchParams(); 
  const [carInfo, setCarInfo] = useState(null);

  useEffect(() => {
    if (id) {
      const car = carsData.find(car => car.id === id);
      setCarInfo(car || null); 
    }
  }, [id]);

  if (!id) {
    return (
      <Text style={{ color: "red", textAlign: "center", marginTop: 20 }}>
        Error: ID no recibido.
      </Text>
    );
  }

  if (carInfo === null) {
    return <ActivityIndicator color={"#fff"} size={"large"} />;
  }

  if (!carInfo) {
    return (
      <Text style={{ color: "red", textAlign: "center", marginTop: 20 }}>
        Error: No se encontró información para el ID proporcionado: {id}.
      </Text>
    );
  }

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#000080" },
          headerTintColor: "white",
          headerTitle: `Carro ID: ${id}`,
          headerLeft: () => {},
          headerRight: () => {},
        }}
      />
      {carInfo === null ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Text style={{ color: "white", fontWeight: "bold", marginBottom: 16, fontSize: 24 }}>
          Detalle del carro: {carInfo.model_name}
        </Text>
        <Image
          source={{ uri: carInfo.image }}
          style={{ width: 300, height: 200, borderRadius: 10, marginBottom: 20 }}
        />
        <Years
            model_year={carInfo.model_year}
          />
        <Text style={{ color: "white", marginBottom: 20 }}>
          {carInfo.description}
        </Text>
      </ScrollView>
      )}
    </Screen>
  );
}
