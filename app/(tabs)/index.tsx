import { Mission } from "@/components/mission";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    // <SafeAreaView>
    //   <View style={styles.parent}>
    //     <View style={styles.container}>
    //       <Text style={styles.text}>텍스트</Text>
    //     </View>
    //     {/* <TextInput value={text} onChangeText={(value) => setText(value)} style={styles.input} />
    //   <Button title="버튼이름" onPress={() => console.log("pressed!")} /> */}
    //     <View style={styles.container2}>
    //       <Text style={styles.text}>Home</Text>
    //       <Text style={styles.text}>Home</Text>
    //       <Text style={styles.text}>Home</Text>
    //     </View>
    //   </View>
    // </SafeAreaView>
    <Mission />
  );
}

const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "yellow",
  },
  container2: {
    backgroundColor: "blue",
  },
  text: {
    color: "red",
    fontSize: 30,
  },
  input: {
    fontSize: 30,
  },
});
