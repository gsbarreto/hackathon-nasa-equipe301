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
    textAlign: "center",
    padding: "4%",
    fontSize: 24,
  },
});

export default class IntroductionPage extends Component {
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
    this.props.navigation.navigate("User");
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.fontsLoaded ? (
          <Fragment>
            <View>
              <Text style={styles.title}>We are here to help!</Text>
              <AntDesign
                name="Safety"
                size={54}
                color="white"
                style={{ alignSelf: "center", paddingTop: "5%" }}
              />
              <Text style={styles.text}>
                Create an anonymous user to keep you privacy!
              </Text>

              <AntDesign
                name="form"
                size={54}
                color="white"
                style={{ alignSelf: "center", paddingTop: "5%" }}
              />
              <Text style={styles.text}>
                Fill the form to help us to know your feelings!
              </Text>
              <AntDesign
                name="retweet"
                size={54}
                color="white"
                style={{ alignSelf: "center", paddingTop: "5%" }}
              />
              <Text style={styles.text}>
                Connect and chat with other people!
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
