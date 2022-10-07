import React from "react";
import image from './img/zapato.jpg';
import {
  Image,
  View,
  Text, 
  TextInput,
  StyleSheet,
  ScrollView,
  ViewBase,
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  AntDesign,
  Foundation, 
  Feather,
  FontAwesome5,
  Entypo,
  MaterialIcons,
  Fontisto,
} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.nav}>
        <Feather name="menu" style={styles.menu}/>
          <Text style={styles.title}>Any Ecommerce</Text>
          <Feather name="shopping-cart" style={styles.car}/>
        </View>   
        <View style={styles.messagge}>
          <Text style={styles.messagge1}>Shop for</Text>
          <Text style={styles.messagge2}> AED 75 more free shippinig</Text>
          </View>  
          <Text style={styles.mycart}>My Cart</Text>
          <View style={styles.product}>
            <Image
            source={image}
            style={{height:100 , width:175}}
            />
            <View style={styles.detalle}>
            <Text>Aldo</Text>
            <Text>Almond Toe</Text>
            <Text>Size: 39 us</Text>
            <Text>AED 45</Text>
            </View>
            <View>
            <AntDesign name="plus" />
            <Text>1</Text>
            <Ionicons name ="remove-outline" />
            </View>
          </View>

          <View style={styles.product}>
            <Image
            source={image}
            style={{height:100 , width:175}}
            />
            <View style={styles.detalle}>
            <Text>Aldo</Text>
            <Text>Almond Toe</Text>
            <Text>Size: 39 us</Text>
            <Text>AED 45</Text>
            </View>
            <View>
            <AntDesign name="plus" />
            <Text>1</Text>
            <Ionicons name ="remove-outline" />
            </View>
          </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav:{
    paddingTop:50,
    flexDirection:'row',
  },
menu:{
  paddingLeft:20,
  paddingEnd:80,
  fontSize:27,
},
car:{
  paddingLeft:80,
  fontSize:27,
},
  title:{
    fontSize:27,
  },
  messagge1:{
    fontStyle:'normal',
    fontSize:18,
    color:'white',
  },
  messagge2:{
    fontWeight: "bold",
    fontSize:18,
    color:'white',
  },
  messagge:{
    marginTop:12,
    padding:10,
    paddingRight:87,
    paddingLeft:87,
    backgroundColor:'#333333',
    flexDirection:'row',
    fontSize:25,
  },
  mycart:{
    paddingTop:30,
    textAlign:'center',
    fontSize:30,
  },
  product:{
    margin:10,
    padding:20,
    backgroundColor:'#F5F5F5',
    marginTop:50,
    flexDirection:'row',
  },
  detalle:{
    marginLeft:20,
  },
});
