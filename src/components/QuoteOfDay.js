import * as React from 'react';
import styles from '../components/ReusableStyleSheet';
import {View, Text, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';



class QuoteOfDay extends React.Component {

    constructor(){
      super()
      this.state = {value:0, data: []}
    }
  
    update = () => {
      this.setState({value: this.state.value + 1})
    }
  
    fetchData = async () => {
      fetch('https://zenquotes.io/api/today', {
        method: 'POST',
        headers: {
          "Accept": 'application/json',
          "Content-Type": 'application/json'
        }
      }).then(response => { return response.json() }).then( d => { this.setState({ data: d[0]}) } ).catch(err => {console.log(`ERROR: ${err}`)})
    }
  
    componentDidUpdate(){
      console.log(`the new value is: ${this.state.value}`)
      console.log(this.state.data)
    }
  
    componentDidMount(){
      console.log(`the about us screen successfully exists: ${Date.now()}`)
    }
  
    render(){
    
    return(
      <View style={styles.container}>
        <Button title="Press me to get the data!!" color='blue' onPress={this.fetchData}></Button>
        <Text>quote: {this.state.data.q}</Text>
        <Text>author: {this.state.data.a}</Text>
        <StatusBar style="auto" />
        </View>
    )}
  }

  export default QuoteOfDay;