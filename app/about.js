import { Pressable, ScrollView, Text } from "react-native";
import { Link } from "expo-router"
import { HomeIcon } from "../components/icons";
import { Screen } from "../components/Screen";

export default function About() {
  return (
    <Screen>
    <ScrollView> 
      <Text style={{ color: "white" }}>
        About, proyecto juanete
      </Text>
      <Link asChild href="/">
        <Pressable>
          {({ pressed }) => <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }}/>}
        </Pressable>
      </Link>

      <Text style={{ color: "white", marginBottom: "8px" }}>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
        las industrias desde el año 1500, cuando un impresor (N. del T. persona
        que se dedica a la imprenta) desconocido usó una galería de textos y los
        mezcló de tal manera que logró hacer un libro de textos especimen. No
        sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno
        en documentos electrónicos, quedando esencialmente igual al original.
        Fue popularizado en los 60s con la creación de las hojas "Letraset", las
        cuales contenian pasajes de Lorem Ipsum, y más recientemente con
        software de autoedición, como por ejemplo Aldus PageMaker, el cual
        incluye versiones de Lorem Ipsum.
      </Text>
    </ScrollView>
    </Screen>
  );
}
