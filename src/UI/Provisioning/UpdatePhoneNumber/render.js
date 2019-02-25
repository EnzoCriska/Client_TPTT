import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { styles } from "./style";
import * as IMG from "../../../Util/Image";
import Strings from "../../../Util/Strings";
import Colors from "../../../Util/Colors";

export const RenderUpdatePhoneNumber = ({
  phone = "",
  onChangePhone = () => {},
  onUpdate = () => {}
}) => {
  return (
    <TouchableWithoutFeedback 
      onPress={Keyboard.dismiss} 
      accessible={false}>
      <ImageBackground
        source={IMG.BACKGROUND_IMG}
        style={styles.container}
      >
        <View style={styles.LogoContainer}>
          <Image
            source={IMG.LOGO_APP_IMG}
            style={styles.logoStyle}
          />
          <Text style={styles.descripText}>{Strings.UPDATE_YOUR_PHONE_NUMBER}</Text>
        </View>
        <View style={styles.body}>
          <ImageBackground
            source={IMG.INPUT_BACKGROUND_IMG}
            style={styles.textInput}
          >
            <Image
              source={IMG.SMARTPHONE_ICON_IMG}
              style={styles.iconTextInput}
            />
            <TextInput
              style={styles.input}
              textContentType={Strings.TELEPHONENUMBER}
              keyboardType={Strings.NUMRIC}
              placeholder={Strings.PHONE_NUMBER_VI}
              placeholderTextColor={Colors.GREY}
              onChangeText={onChangePhone}
              value={phone}
            />
          </ImageBackground>
          <TouchableOpacity style={styles.loginBtn} onPress={onUpdate}>
            <Text style={styles.textLoginBtn}>{Strings.UPDATE}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};
