import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { styles } from "./style";

export const ItemRoomList = ({ item = {} }) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.itemListRoomBG}>
        <ImageBackground
          source={require("../../../../../Media/Game/ItemListRoomBG.png")}
          style={styles.imageBackgroundStyle}
          resizeMode="center"
        >
          <View style={styles.topItemRoomContainer}>
            <Text style={styles.textRoomName}>{item.roomName}</Text>

            <View style={styles.topRightItemContainer}>
              <Image
                source={require("../../../../../Media/Game/multiple-users.png")}
                style={styles.leftArrowStyle}
                resizeMode="center"
              />
              <Text style={styles.textQuantityPlayer}>
                {item.currentQuantity}
              </Text>
            </View>
          </View>

          <Image
            source={require("../../../../../Media/Game/Line1.png")}
            style={styles.lineStyle}
          />

          <View style={styles.midItemRoomContainer}>
            <Text style={styles.textQuantityPlayer}>ID:{item.roomID}</Text>
          </View>

          <View style={styles.bottomItemRoomContainer}>
            <View>
              <Image
                source={require("../../../../../Media/Game/lockIcon.png")}
                style={item.security ? styles.scoreIcon : styles.hideImage}
                resizeMode="center"
              />
            </View>

            <View style={styles.bottomRightItemContainer}>
              <Text style={styles.textQuantityPlayer}>{item.time}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};
