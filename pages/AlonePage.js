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
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

let customFonts = {
  "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "10%",
  },
  title: {
    color: "#6C4FBB",
    fontWeight: "900",
    fontSize: 36,
    fontFamily: "Roboto-Bold",
    maxWidth: "100%",
    textAlign: "center",
    paddingRight: "5%",
    paddingLeft: "5%",
  },
  text: {
    color: "#6C4FBB",
    fontFamily: "Nunito-Regular",
    padding: "4%",
    fontSize: 24,
  },
  button: {
    backgroundColor: "#6C4FBB",
    minHeight: "20%",
    minWidth: "80%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "5%",
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 32,
    justifyContent: "center",
  },
});

export default class AlonePage extends Component {
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

  redirectPage = (alone) => {
    const { username, felling, consider } = this.props.route.params;
    this.props.navigation.navigate("InteractInternet", {
      username,
      felling,
      consider,
      alone,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.fontsLoaded ? (
          <Fragment>
            <Text style={styles.title}>
              When you are alone, do you feel freedom or loneliness?{" "}
            </Text>
            <View>
              <TouchableHighlight
                style={styles.button}
                onPress={() => this.redirectPage("Freedom")}
              >
                <Text style={styles.buttonText}>Freedom</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.button}
                onPress={() => this.redirectPage("Loneliness")}
              >
                <Text style={styles.buttonText}>Loneliness</Text>
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
