import React, { Component, Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
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
});

export default class ConsiderPage extends Component {
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

  redirectPage = (consider) => {
    const { username, felling } = this.props.route.params;
    this.props.navigation.navigate("Alone", { username, felling, consider });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.fontsLoaded ? (
          <Fragment>
            <Text style={styles.title}>You consider yourself a person...</Text>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: "10%",
                }}
              >
                <TouchableHighlight
                  onPress={() => this.redirectPage("Happy")}
                  style={{ alignItems: "center", minWidth: "40%" }}
                >
                  <Fragment>
                    <FontAwesome5 name="grin" size={96} color="#FFF" />
                    <Text style={{ color: "#FFF", fontSize: 32 }}>Happy</Text>
                  </Fragment>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => this.redirectPage("Sad")}
                  style={{ alignItems: "center", minWidth: "40%" }}
                >
                  <Fragment>
                    <FontAwesome5 name="frown" size={96} color="#FFF" />
                    <Text style={{ color: "#FFF", fontSize: 32 }}>Sad</Text>
                  </Fragment>
                </TouchableHighlight>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableHighlight
                  onPress={() => this.redirectPage("Anxious")}
                  style={{ alignItems: "center", minWidth: "40%" }}
                >
                  <Fragment>
                    <FontAwesome5 name="flushed" size={96} color="#FFF" />
                    <Text style={{ color: "#FFF", fontSize: 32 }}>Anxious</Text>
                  </Fragment>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => this.redirectPage("Explosive")}
                  style={{ alignItems: "center", minWidth: "40%" }}
                >
                  <Fragment>
                    <FontAwesome5 name="angry" size={96} color="#FFF" />
                    <Text style={{ color: "#FFF", fontSize: 32 }}>
                      Explosive
                    </Text>
                  </Fragment>
                </TouchableHighlight>
              </View>
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
