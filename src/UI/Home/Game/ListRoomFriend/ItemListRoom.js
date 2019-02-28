import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { styles } from "./style";

import * as IMG from '../../../../Util/Common/Image'
import Strings from "../../../../Util/Common/Strings";
export const ItemRoomList = ({ item = {} }) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.itemListRoomBG}>
        <ImageBackground
          source={IMG.ITEM_LIST_ROOM_FRIEND_BG_IMG}
          style={styles.imageBackgroundStyle}
          resizeMode= {Strings.CENTER}
        >
          <View style={styles.topItemRoomContainer}>
            <Text style={styles.textRoomName}>{item.roomName}</Text>

            <View style={styles.topRightItemContainer}>
              <Image
                source={IMG.MULTIPLE_USER_ICON_IMG}
                style={styles.leftArrowStyle}
                resizeMode={Strings.CENTER}
              />
              <Text style={styles.textQuantityPlayer}>
                {item.currentQuantity}
              </Text>
            </View>
          </View>

          <Image
            source={IMG.LINE_IN_ROOM_ITEM_IMG}
            style={styles.lineStyle}
          />

          <View style={styles.midItemRoomContainer}>
            <Text style={styles.textQuantityPlayer}>ID:{item.roomID}</Text>
          </View>

          <View style={styles.bottomItemRoomContainer}>
            <View>
              <Image
                source={IMG.LOCK_ICON_IMG}
                style={item.security ? styles.scoreIcon : styles.hideImage}
                resizeMode={Strings.CENTER}
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
