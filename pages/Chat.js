import React, { Component, Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Button,
  Image,
} from "react-native";
import * as Font from "expo-font";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

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

export default class MedicationsPage extends Component {
  state = {
    fontsLoaded: false,
    username: "",
  };
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  async componentDidMount() {
    console.log("Props", this.props.route.params);
    await this._loadFontsAsync();
  }

  onChangeText = (username) => {
    this.setState({ username });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.fontsLoaded ? (
          <Fragment>
            <Text>{this.props.route.params.alone}</Text>
            <Text>{this.props.route.params.consider}</Text>
            <Text>{this.props.route.params.felling}</Text>
            <Text>{this.props.route.params.username}</Text>
            <Text>
              interactInternet:{" "}
              {this.props.route.params.interactInternet ? "TRUE" : "FALSE"}
            </Text>
            <Text>
              medications:{" "}
              {this.props.route.params.medications ? "TRUE" : "FALSE"}
            </Text>
            <Text>
              physical: {this.props.route.params.physical ? "TRUE" : "FALSE"}
            </Text>
            <Text>
              physicalHealth:{" "}
              {this.props.route.params.physicalHealth ? "TRUE" : "FALSE"}
            </Text>
          </Fragment>
        ) : (
          <Text>Carregando...</Text>
        )}
      </View>
    );
  }
}
