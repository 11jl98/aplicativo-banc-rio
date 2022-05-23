import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../../components/Hearder";
import Balance from "../../components/Balance";
import Moviments from "../../components/Moviments";
import Actions from "../../components/Actions";

const list = [
  {
    id: 1,
    label: "Boleto conta de luz",
    value: "300,90",
    date: "17/09/2022",
    type: 0,
  },
  {
    id: 2,
    label: "Pix Luiz",
    value: "300,90",
    date: "17/07/2022",
    type: 1,
  },
  {
    id: 3,
    label: "Salario",
    value: "300,90",
    date: "09/12/2022",
    type: 1,
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Balance />
      <Actions/>
      <Text style={styles.title}>Ultimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moviments data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    paddingStart: 14,
    paddingTop: 14,
  },
  list: {
    fontSize: 18,
    paddingStart: 14,
    paddingTop: 14,
  },
});
