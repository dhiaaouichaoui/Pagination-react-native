import React from 'react';
import { DataTable } from 'react-native-paper';
//import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image
  } from 'react-native';
  import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
  loading: true,
  UserData: [],
  loadingExtraData: false,
  page:0
  }
  }
  componentDidMount() {
    
    this.getusers()
  }
  // getting users data from the api
  getusers(){
    axios
        .get(
          `https://reqres.in/api/users?page=2`,
          {
            headers: {
              // TOKEN
              Authorization: `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`,
            },
          }
        )
        .then((res) => {
          this.setState({ UserData: res.data });
          
          console.log("statemeeee", res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
        const from = this.state.page * this.state.UserData.per_page;
        const to = Math.min((page + 1) * this.state.UserData.per_page, this.state.UserData.page);
  
  }
  render() {
   
  return (
    <View style={{ marginTop: 50 }}>
    
    {/* {this.state.UserData} */}
    {console.log(this.state.UserData,'dfdfdf')}
    {Object.keys(this.state.UserData).map((e)=>{
      <View>
       <Image
       style={{
         width: 105,
         height: 150,
         marginTop: "-10%",
         justifyContent: "center",
         alignItems: "center",
       }}
       source={e.avatar}
     />
      <Text > {e.email}</Text> 
      <Text > {e.first_name}</Text> 
      <Text>{e.last_name}</Text>

      </View>
   
    })}
        <TouchableOpacity >
            <View>
              
              <Text  onPress={() =>this.setState({ page: page + 3 })}>page 2</Text>
            </View>
          </TouchableOpacity>       
    {this.state.UserData}
    </View>
  )
  }
  }