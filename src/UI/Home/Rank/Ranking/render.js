import React from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Avatar } from "react-native-elements";
import { styles } from './style';
import { ItemRank } from './itemRank';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { HeaderComponent } from '../../../../Util/Component Util/HeaderComponent';

export const RenderRank = ({
    thisRank = '',
    listRanking = [],
    currentUserRank = '',
    showMenu = () => {},
    showRankTotal = () => {},
    showRankMonth = () => {},
    showRankWeek = () => {},
    showRankDay = () => {},
    setMenuRef = () => {},

    onGoProfile = () => {}
}) => {
    return (
        <ImageBackground
            source={require('../../../../../Media/background.png')}
            style = {styles.container}>

            <HeaderComponent
                onGoProfile = {() => onGoProfile()}
            />

            <View style = {styles.bodyContainer}>
                <View style = {styles.menuDropDown}>
                    <Menu
                        ref={setMenuRef}
                        button={
                            <TouchableOpacity onPress={showMenu} style = {styles.buttonMenu} >
                                <Text  style = {{color:'#fff'}}>{thisRank}</Text>
                                <Image
                                    source = {require('../../../../../Media/Rank/dropdownIcon.png')}
                                    style = {{width:20, height:10}}
                                    resizeMode = 'center'
                                />
                            </TouchableOpacity>
            
                            }
                    >
                    <MenuItem onPress={showRankTotal}>Total</MenuItem>
                    <MenuItem onPress={showRankMonth}>Month</MenuItem>
                    <MenuItem onPress={showRankWeek}>Week</MenuItem>
                    <MenuItem onPress={showRankDay}>Day</MenuItem>
                    <MenuDivider />

                    </Menu>
                </View>

                <View style={styles.topThree}>

                    <View style={styles.threeLevel}>

                            <Image
                                source={require('../../../../../Media/Rank/silver.png')}
                                resizeMode='center'
                                style = {styles.crownStyle}
                            />

                            <View style={styles.avatarTopContainer}>
                                <Avatar
                                    size="large"
                                    rounded
                                    source = {{uri:listRanking[1].avatarUrl}}
                                    onPress={() => console.log("Works!")}
                                    activeOpacity={0.7}
                                />
                            </View>
                            <View style={styles.silverBottom}>
                                <Text style={styles.levelTextTitle}>2</Text>
                                <Text style={styles.topUserName}>{listRanking[1].userName}</Text>
                            </View>
                    </View>

                    <View style={styles.threeLevel}>
                            <Image
                                source={require('../../../../../Media/Rank/golden.png')}
                                resizeMode='center'
                                style = {styles.crownStyle}
                            />
                            
                            <View style={styles.avatarTopContainer}>
                                <Avatar
                                    size="large"
                                    rounded
                                    source = {{uri:listRanking[0].avatarUrl}}
                                    onPress={() => console.log("Works!")}
                                    activeOpacity={0.7}
                                />
                            </View>
                            <View style={styles.goldenBottom}>
                                <Text style={styles.levelTextTitle}>1</Text>
                                <Text style={styles.topUserName}>{listRanking[0].userName}</Text>
                            </View>
                    </View>

                    <View style={styles.threeLevel}>
                            <Image
                                source={require('../../../../../Media/Rank/cropper.png')}
                                resizeMode='center'
                                style = {styles.crownStyle}
                            />
                            
                            <View style={styles.avatarTopContainer}>
                                <Avatar
                                    size="large"
                                    rounded
                                    source = {{uri:listRanking[2].avatarUrl}}
                                    onPress={() => console.log("Works!")}
                                    activeOpacity={0.7}
                                />
                            </View>
                            <View style={styles.cropperBottom}>
                                <Text style={styles.levelTextTitle}>3</Text>
                                <Text style={styles.topUserName}>{listRanking[2].userName}</Text>
                            </View>
                    </View>


                </View>

                <View style={styles.otherTopRank}>
                    <FlatList
                        data={listRanking.slice(3, listRanking.length)}
                        extraData={this.state}
                        showsVerticalScrollIndicator = {false}
                        keyExtractor={(item, index) => item.avatarUrl.toString()}
                        renderItem={({item, index}) => {
                           console.log(item.avatarUrl + ' ' + index)
                            return(
                            <ItemRank
                                index = {index}
                                avatarUrl = {item.avatarUrl}
                                userName = {item.userName}
                                level = {item.level}
                            />
                        )}}
                    />
                    <View>
                        <ImageBackground
                            style = {styles.itemRank}
                            source = {require('../../../../../Media/Rank/CurrentRank.png')}
                            resizeMode = 'stretch'>
                            <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
                                <Text style = {{color:'#FFA927', fontSize:16}}>{currentUserRank.index}</Text>
                            </View>
                            {/* {console.log(avatarUrl)} */}
                            <View style = {{flex:1}}>
                                <Avatar
                                    source = {{uri:currentUserRank.avatarUrl}}
                                    size = 'medium'
                                    rounded
                                />
                            </View>

                            <View style = {{flex:4}}>
                                <Text style = {{color: '#fff', fontSize:16}}>{currentUserRank.userName}</Text>
                                <Text style = {{color:'grey'}}>Level {currentUserRank.level}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </View>

            </View>
            
            </ImageBackground>
            
    )
}

