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
  },
  text: {
    color: "#6C4FBB",
    fontFamily: "Nunito-Regular",
    padding: "4%",
    fontSize: 24,
  },
});

export default class FeelingsPage extends Component {
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

  redirectPage = (felling) => {
    const { username } = this.props.route.params;
    console.log(username);
    this.props.navigation.navigate("Consider", { username, felling });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.fontsLoaded ? (
          <Fragment>
            <Text style={styles.title}>How do you feel today?</Text>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: "15%",
                }}
              >
                <TouchableHighlight
                  onPress={() => this.redirectPage("Calm")}
                  style={{ alignItems: "center", minWidth: "40%" }}
                >
                  <Fragment>
                    <FontAwesome5 name="grin" size={96} color="#6C4FBB" />
                    <Text style={{ color: "#6C4FBB", fontSize: 32 }}>Calm</Text>
                  </Fragment>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => this.redirectPage("Anxious")}
                  style={{ alignItems: "center", minWidth: "40%" }}
                >
                  <Fragment>
                    <FontAwesome5 name="flushed" size={96} color="#6C4FBB" />
                    <Text style={{ color: "#6C4FBB", fontSize: 32 }}>
                      Anxious
                    </Text>
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
                  style={{ alignItems: "center", minWidth: "40%" }}
                  onPress={() => this.redirectPage("Angry")}
                >
                  <Fragment>
                    <FontAwesome5 name="angry" size={96} color="#6C4FBB" />
                    <Text style={{ color: "#6C4FBB", fontSize: 32 }}>
                      Angry
                    </Text>
                  </Fragment>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ alignItems: "center", minWidth: "40%" }}
                  onPress={() => this.redirectPage("Sad")}
                >
                  <Fragment>
                    <FontAwesome5 name="frown" size={96} color="#6C4FBB" />
                    <Text style={{ color: "#6C4FBB", fontSize: 32 }}>Sad</Text>
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
