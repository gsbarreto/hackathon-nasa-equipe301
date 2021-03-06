import React, { Component, Fragment } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import * as Font from "expo-font";
import { AntDesign } from "@expo/vector-icons";

let customFonts = {
  "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6C4FBB",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "10%",
  },
  title: {
    color: "#FFF",
    fontWeight: "900",
    fontSize: 36,
    fontFamily: "Roboto-Bold",
    maxWidth: "100%",
    textAlign: "center",
  },
  text: {
    color: "#FFF",
    fontFamily: "Nunito-Regular",
    padding: "5%",
    fontSize: 24,
  },
});

export default class InitialPage extends Component {
  state = {
    fontsLoaded: false,
  };
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  async componentDidMount() {
    await this._loadFontsAsync();
  }

  redirectPage = () => {
    this.props.navigation.navigate("Introduction");
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.fontsLoaded ? (
          <Fragment>
            <View>
              <Text style={styles.title}>Welcome to Arara!</Text>
              <Text style={styles.text}>
                An app to help you in this hard time that we are living! Social
                isolation doesn't seems to be hard, but it is! Human beings need
                to comunicate and made connection.
              </Text>
              <Text style={styles.text}>
                Our app is here to help you to communicate with other people in
                this complicated period. We have several activities where you
                can expose your interior.
              </Text>
            </View>
            <TouchableHighlight onPress={() => this.redirectPage()}>
              <AntDesign name="caretright" size={50} color="white" />
            </TouchableHighlight>
          </Fragment>
        ) : (
          <Text>Carregando...</Text>
        )}
      </View>
    );
  }
}
