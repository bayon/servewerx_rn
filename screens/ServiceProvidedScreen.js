//we want to fetch the token when the page loads
import AsyncStorage from "@react-native-async-storage/async-storage";
//const jwtDecode = require("jwt-decode");
import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import FormStyles from "./FormStyles";
import Card from "./ui_components/Card";

const styles = FormStyles;

const ServiceProvidedScreen = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const loadProfile = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      const decoded = jwt_decode(token);
      //make use of decoded data. useState
      setFullName(decoded.fullName);
      setEmail(decoded.email);
    }
  };

  useEffect(() => {
    loadProfile();
  });

  var auth = useSelector((state) => state.auth.authorized);
  if (!auth) {
    return (
      <View style={styles.warning_wrapper}>
        <Text style={styles.warning_text}>
          Sorry, you need to register for an account to see this page.
        </Text>
        <Button
          onPress={() => props.navigation.navigate("Register")}
          title="Register"
          style={styles.redirect_button}
        />
      </View>
    );
  }
  const defaultLogo="https://www.servewerx.com/static/media/servewerx_logo.53c6010f.png"

  const serviceProvidedTitle = `Construction and Residential Remodeling`
  const serviceProvidedDescription = `No job too small. Licensed, Insured, and Free Estimates. `
  return (
    <ScrollView>
       <Card
        image={defaultLogo}
        resizeMode="contain"
        title={serviceProvidedTitle}
        description={serviceProvidedDescription}
        linkName="John B. Smith Construction LLC"
        linkURL="https://www.servewerx.com/john-b-smith"
      ></Card>
      
      <Card
        image={defaultLogo}
        resizeMode="contain"
        title={serviceProvidedTitle}
        description={serviceProvidedDescription}
        linkName="John B. Smith Construction LLC"
        linkURL="https://www.servewerx.com/john-b-smith"
      ></Card>

<Card
        image={defaultLogo}
        resizeMode="contain"
        title={serviceProvidedTitle}
        description={serviceProvidedDescription}
        linkName="John B. Smith Construction LLC"
        linkURL="https://www.servewerx.com/john-b-smith"
      ></Card>

      
    </ScrollView>
 
  );
};

export default ServiceProvidedScreen;

/*
Games:
http://www.forteworks.com/forteworks-16.9.19/games/index-games.php

Rough Est: 
https://drive.google.com/file/d/0B6WIP-y6MAiEYm11b1hQN1Z0Sms/view
http://www.forteworks.com/roughest/

*/
