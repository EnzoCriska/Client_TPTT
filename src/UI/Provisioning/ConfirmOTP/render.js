import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { styles } from "./style";
import Strings from "../../../Util/Strings";

export const RenderConfirmOTP = ({
  OTP = "",
  onChangeOTP = () => {},
  onConfirm = () => {}
}) => {
  return (
    <TouchableWithoutFeedback 
        onPress={Keyboard.dismiss} 
        accessible={false}>
      <ImageBackground
        source={require("../../../../Media/background.png")}
        style={styles.container}
      >
        <View style={styles.content}>
          <Image
            style={styles.logoStyle}
            source={require("../../../../Media/Provisioning/LogoApp.png")}
          />
          <Text style={styles.descripText}>
             {Strings.DESCRIPTION_TEXT_INPUT_OTP}
          </Text>
          <ImageBackground
            source={require("../../../../Media/Provisioning/inputBackground.png")}
            style={styles.textInput}
          >
            <TextInput
              style={styles.input}
              onChangeText={onChangeOTP}
              placeholder={Strings.OTP_VI}
              placeholderTextColor="grey"
              value={OTP}
            />
          </ImageBackground>

          <TouchableOpacity style={styles.loginBtn} onPress={onConfirm}>
            <Text style={styles.textLoginBtn}>{Strings.SIGN_UP}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};
