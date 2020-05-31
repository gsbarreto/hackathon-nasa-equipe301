import React, { Component, Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Button,
} from "react-native";
import * as Font from "expo-font";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

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
    paddingRight: "5%",
    paddingLeft: "5%",
  },
  text: {
    color: "#FFF",
    fontFamily: "Nunito-Regular",
    padding: "4%",
    fontSize: 24,
  },
  button: {
    backgroundColor: "#FFF",
    minHeight: "20%",
    minWidth: "80%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "5%",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 32,
    justifyContent: "center",
  },
});

export default class InteractInternetPage extends Component {
  state = {
    fontsLoaded: false,
    username: "",
  };
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  async componentDidMount() {
    await this._loadFontsAsync();
  }

  onChangeText = (username) => {
    this.setState({ username });
  };

  redirectPage = (interactInternet) => {
    const { username, felling, consider, alone } = this.props.route.params;
    this.props.navigation.navigate("Physical", {
      username,
      felling,
      consider,
      alone,
      interactInternet,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.fontsLoaded ? (
          <Fragment>
            <Text style={styles.title}>
              Do you feel good interacting with other people over the internet?
            </Text>
            <MaterialIcons name="computer" size={64} color="#FFF" />
            <View>
              <TouchableHighlight
                style={styles.button}
                onPress={() => this.redirectPage(true)}
              >
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.button}
                onPress={() => this.redirectPage(false)}
              >
                <Text style={styles.buttonText}>No</Text>
              </TouchableHighlight>
            </View>
            <View></View>
          </Fragment>
        ) : (
          <Text>Carregando...</Text>
        )}
      </View>
    );
  }
}
