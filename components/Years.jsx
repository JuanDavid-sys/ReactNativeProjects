import { View, Text, StyleSheet } from 'react-native'

export function Years({ model_year, maxModel_year }) {
    const getColors = () => {
        if (model_year < 2010) return styles.redBackground;
        if (model_year < 2017) return styles.yellowBackground;
        return styles.greenBackground;
    }

    const className = getColors();

    return (
        <View style={[styles.year, className]}>
            <Text>{model_year}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    year: {
      width: 100,
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "bold",
      color: "white",
      backgroundColor: "green",
      borderRadius: 20,
    },
    text: {
        fontWeight: "bold",
        color: "white",
    },
    redBackground: {
        backgroundColor: "#f87171", // Red
    },
    yellowBackground: {
        backgroundColor: "#fbbf24", // Yellow
    },
    greenBackground: {
        backgroundColor: "#34d399", // Green
    },
  });