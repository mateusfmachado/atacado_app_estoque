import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class InitialScreen extends Component {

    componentDidMount(){
        this.props.commonTeste();
    }

    render(){
        const { teste } = this.props
        return (
            <View style={styles.container}>
              <Text> 
                ERP Estoque - { teste ? "Redux ativado" : "Redux Desativado" }
              </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    padding: 10,
  }
});

const mapStateToProps = state => ({
    teste: state.common.teste
})

export default connect(mapStateToProps, actions)(InitialScreen)