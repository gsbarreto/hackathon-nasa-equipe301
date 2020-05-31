import React, { Component, Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Alert,
} from "react-native";
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
    padding: "4%",
    fontSize: 24,
  },
  textInput: {
    height: 40,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "transparent",
    marginRight: "5%",
    marginLeft: "5%",
    paddingLeft: "2%",
  },
});

export default class UserLogin extends Component {
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

  createAlert = () => {
    return Alert.alert(
      "Invalid username",
      "The username require at least 3 characters!",
      [{ text: "OK" }],
      {
        cancelable: false,
      }
    );
  };

  redirectPage = () => {
    const { username } = this.state;
    if (username !== undefined && username !== "" && username.length > 3) {
      this.props.navigation.navigate("Feelings", {
        username: this.state.username,
      });
    } else {
      this.createAlert();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.fontsLoaded ? (
          <Fragment>
            <Text style={styles.title}>First Step!</Text>
            <View>
              <Text style={styles.text}>
                Which username do you want to use?
              </Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => this.onChangeText(text)}
                value={this.state.username}
              />
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
