import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Option from "./Option";

function Options({ options = [], selectedOption, visible = true }) {
  return (
    <View style={[styles.container, { opacity: visible ? 1 : 0 }]}>
      <FlatList
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={{ width: 20 }}></View>}
        data={options}
        renderItem={({ item }) => (
          <Option option={item} onPress={(option) => selectedOption(option)} />
        )}
        keyExtractor={(item) => options.indexOf(item).toString()}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default Options;
