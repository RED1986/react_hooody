import React, {Fragment} from "react";
import {Dimensions, View, Text, TouchableOpacity, Image, StyleSheet, FlatList, ActivityIndicator} from "react-native";
import {createStackNavigator, createAppContainer} from "react-navigation";
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Storage from 'react-native-storage';
import imgSorting from "./images/sorting.png";
import imgMessenger from "./images/messenger.png";
import AsyncStorage from '@react-native-community/async-storage';
const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
    textViewStyle: {
        fontSize: 40,
        marginRight: 20
    },
    imgViewStyle: {
        width: 50,
        height: 50
    },
    viewStyle: {
        flexDirection: `row`,
        marginTop: 30,
        width: 300,
        justifyContent: `center`
    },
    sorting: {
      height: 50,
      width: 50
    },
    toViewStyle: {
        justifyContent: `center`,
        alignItems: `center`
    },
    mainViewStyle: {
        alignItems: `center`,
        backgroundColor: `rgba(255, 255, 255, 1)`,
        flex: 1,
        justifyContent: `flex-start`,
        flexDirection: `column`
    },
    loadMoreBtn: {
        padding: 10,
        backgroundColor: '#800000',
        color: '#fff',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container:{
        flex:1,
        flexDirection: 'row',
    },
    verticalContainer:{
        flex:1,
        marginTop:20,
        flexDirection: 'column',
    },
    list: {
        //paddingHorizontal: 5,
        backgroundColor:"#E6E6E6",
    },
    listContainer:{
        alignItems:'center'
    },
    /******** card **************/
    card:{
        width: screenWidth / 2,
        height: screenWidth / 2,
        marginHorizontal:2,
        marginVertical:2,
        flexBasis: '48%',
    },
    cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems:"center",
        justifyContent:"center"
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImage:{
        height: 70,
        width: 70,
        alignSelf:'center'
    },
    title:{
        fontSize:16,
        flex:1,
        color:"#FFFFFF",
        fontWeight:'bold'
    },
    subTitle:{
        fontSize:12,
        flex:1,
        color:"#FFFFFF",
    },
    icon:{
        height: 20,
        width: 20,
    }
});
const userInfo =  {
    login: '',
    password: ''
}
const storage = new Storage({
    // maximum capacity, default 1000
    size: 1000,

    // Use AsyncStorage for RN apps, or window.localStorage for web apps.
    // If storageBackend is not set, data will be lost after reload.
    storageBackend: AsyncStorage, // for web: window.localStorage

    // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
    // can be null, which means never expire.
    defaultExpires: null,

    // cache data in the memory. default is true.
    enableCache: true,

    // if data was not found in storage or expired data was found,
    // the corresponding sync method will be invoked returning
    // the latest data.
    sync: {
        // we'll talk about the details later.
    }
});

class HomeScreen extends React.Component {
    componentDidMount(): void {
        storage
            .load({
                key: 'login',
            })
            .then(ret => {
              userInfo.login = ret;
            })
        storage
            .load({
                key: 'password',
            })
            .then(ret => {
                userInfo.password = ret;
            })

    }

    render() {
        return (
            <View style={styles.verticalContainer}>
            <View style={styles.container}>
                <TouchableOpacity style={[styles.card, {backgroundColor:"#FF4500"}]} onPress={() => {this.props.navigation.navigate('Settings')}}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.title}>Вы</Text>
                        <Image style={styles.icon} source={{uri:"https://img.icons8.com/ios/40/000000/settings.png"}}/>
                    </View>
                    <Image style={styles.cardImage} source={{uri:"https://img.icons8.com/color/70/000000/name.png"}}/>
                    <View style={styles.cardFooter}>
                        <Text style={styles.subTitle}>Личный кабинет</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.card, {backgroundColor:"#038860"}]} onPress={() => {this.props.navigation.navigate('Catalog')}}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.title}>Каталог</Text>
                        <Image style={styles.icon} source={{uri:"https://img.icons8.com/ios/40/000000/settings.png"}}/>
                    </View>
                    <Image style={styles.cardImage} source={{uri:"https://img.icons8.com/dusk/70/000000/checklist.png"}}/>
                    <View style={styles.cardFooter}>
                        <Text style={styles.subTitle}>Личный кабинет</Text>
                    </View>
                </TouchableOpacity>
            </View>
                <View style={styles.container}>
                    <TouchableOpacity style={[styles.card, {backgroundColor:"#4682B4"}]} onPress={() => {this.props.navigation.navigate('Catalog')}}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.title}>Любимые</Text>
                            <Image style={styles.icon} source={{uri:"https://img.icons8.com/ios/40/000000/settings.png"}}/>
                        </View>
                        <Image style={styles.cardImage} source={{uri:"https://img.icons8.com/color/70/000000/two-hearts.png"}}/>
                        <View style={styles.cardFooter}>
                            <Text style={styles.subTitle}>Всего: 0</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.card, {backgroundColor:"#038860"}]} onPress={() => {this.props.navigation.navigate('Catalog')}}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.title}>Каталог</Text>
                            <Image style={styles.icon} source={{uri:"https://img.icons8.com/ios/40/000000/settings.png"}}/>
                        </View>
                        <Image style={styles.cardImage} source={imgMessenger}/>
                        <View style={styles.cardFooter}>
                            <Text style={styles.subTitle}>Личный кабинет</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

class CatalogScreen extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            isLoading: true,
            dataSource: [],
            page: 1,
        }
        this.loadPage = function() {
            return fetch('http://hooody.ru/shop/catalog?json=true&page='+encodeURIComponent(this.state.page++))
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        isLoading: false,
                        dataSource: this.state.dataSource.concat(responseJson.data),
                    }, function () {

                    });
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Каталог',
            headerStyle: {
                backgroundColor: '#038860',
            },
            headerTintColor: '#fbdfa1',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerRight: (
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}
                                  style={styles.sorting}>
                    <Image style={styles.sorting} source={imgSorting}/>
                </TouchableOpacity>
            ),
        }
    };
    componentDidMount() {
        this.loadPage()
    }
    _renderItem = ({item}) => {
        return (
            <Image source = {{uri: 'http://hooody.ru/item/'+item.gimg+'-'+item.defaultcolor+'-woman-300.png'}} style = {{margin: 1,
                height: Dimensions.get('screen').height / 3,
                width: Dimensions.get('screen').width / 3,
                resizeMode: 'cover'}}
                   onPress={() =>  this.state.isLoading = true}
            />
        )
    }
    _renderFooter() {
        return (
            //Footer View with Load More button
            <View style={styles.footer}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() =>  this.loadPage()}
                    //On Click of button calling loadMoreData function to load more data
                    style={styles.loadMoreBtn}>
                    <Text style={styles.btnText}>Загрузить еще {this.state.page}</Text>
                </TouchableOpacity>
            </View>
        );
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator/>
                </View>
            );
        }
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <FlatList
                    data={this.state.dataSource}
                    numColumns={3}
                    renderItem={this._renderItem}
                    ListFooterComponent={this._renderFooter.bind(this)}
                    keyExtractor={(item, gimg) => gimg.toString()}
                />
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: userInfo.login,
            password: userInfo.password,
        };
        this.saveData = (name, value) => {
            storage.save({
                key: name,
                data: value,
                expires: null
            });
        }
    }

    static navigationOptions = () => {
        return {
            title: 'Настройки',
            headerStyle: {
                backgroundColor: '#FF4500',
            },
            headerTintColor: '#fbdfa1',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    };
    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Input
                    placeholder='Логин'
                    onChange={(event) =>  {
                        let data = event.nativeEvent.text;
                        this.setState({login: data});
                        userInfo.login = data;
                        this.saveData('login', data);
                    }}
                    value={this.state.login}
                    leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}

                />
                <Input
                    placeholder='Пароль'
                    onChange={(event) =>  {
                        let data = event.nativeEvent.text;
                        this.setState({password: data});
                        userInfo.password = data;
                        this.saveData('password', data);
                    }}
                    value={this.state.password}
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='black'
                        />
                    }
                />
                <Button
                    icon={
                        <Icon
                            name="arrow-right"
                            size={15}
                            color="white"
                        />
                    }
                    onPress={()=>this.saveData()}
                    title="Сохранить"
                />
            </View>
        );
    }
}

const AppNavigator = createStackNavigator({

    Home: {
        screen: HomeScreen
    },
    Catalog: {
        screen: CatalogScreen
    },
    Settings: {
        screen: SettingsScreen
    }
});

export default createAppContainer(AppNavigator);
