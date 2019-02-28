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
import Strings from "../../../Util/Common/Strings";
import * as IMG from "../../../Util/Common/Image";
import Colors from "../../../Util/Common/Colors";

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
        source={IMG.BACKGROUND_IMG}
        style={styles.container}
      >
        <View style={styles.content}>
          <Image
            style={styles.logoStyle}
            source={IMG.LOGO_APP_IMG}
          />
          <Text style={styles.descripText}>
             {Strings.DESCRIPTION_TEXT_INPUT_OTP}
          </Text>
          <ImageBackground
            source={IMG.INPUT_BACKGROUND_IMG}
            style={styles.textInput}
          >
            <TextInput
              style={styles.input}
              onChangeText={onChangeOTP}
              placeholder={Strings.OTP_VI}
              placeholderTextColor={Colors.GREY}
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
