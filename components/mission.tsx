import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Mission = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTop}>
        <Box />
        <Box />
        <Box />
      </View>
      <View style={styles.containerMiddle}>
        <Box />
        <Box />
        <Box />
      </View>
      <View style={styles.containerBottom}>
        <Box />
        <Box />
        <Box />
      </View>
    </SafeAreaView>
  );
};

const Box = () => {
  return <View style={styles.box} />;
};

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    margin: 5,
  },
  container: {
    justifyContent: "space-between",
    flex: 1,
  },
  containerTop: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  containerMiddle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  containerBottom: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
