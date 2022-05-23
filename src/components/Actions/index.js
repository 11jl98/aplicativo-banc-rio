import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function Actions() {
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.content}>
        <View style={styles.buttons}>
          <AntDesign name="addfolder" size={24} color="black" />
        </View>
        <Text style={styles.fontWeight}>Entrada</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.content}>
        <View style={styles.buttons}>
          <AntDesign name="tagso" size={24} color="black" />
        </View>
        <Text style={styles.fontWeight}>Compras</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.content}>
        <View style={styles.buttons}>
          <AntDesign name="creditcard" size={24} color="black" />
        </View>
        <Text style={styles.fontWeight}>Carteira</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.content}>
        <View style={styles.buttons}>
          <AntDesign name="barcode" size={24} color="black" />
        </View>
        <Text style={styles.fontWeight}>Boletos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.content}>
        <View style={styles.buttons}>
          <AntDesign name="setting" size={24} color="black" />
        </View>
        <Text style={styles.fontWeight}>Configurações</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14,
  },
  content: {
    alignItems: "center",
    marginRight: 32,
  },
  buttons: {
    width: 60,
    height: 60,
    backgroundColor: "#DADADA",
    padding: 15,
    borderRadius: 60/2,
    justifyContent:'center',
    alignItems: 'center'
  },
  Text:{
      fontWeight: 'bold'
  }
});
