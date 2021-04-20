import React, {Component} from 'react';

import {StyleSheet, View} from 'react-native';
import DivisionInfoContainer from '../../containers/DivisionInfo';
import DivisionTabBarContainer from '../../containers/DivisionTabBar';

export default class DivisionScreen extends Component {
  state = {
    division: {},
  };

  componentDidMount() {
    const {navigation, route} = this.props;
    this._unsubscribe = navigation.addListener('focus', () => {
      this.fetchDivision();
      navigation.setOptions({title: route.params.division.title});
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  fetchDivision() {
    const {route} = this.props;
    this.setState({division: route.params.division});
  }

  render() {
    const {division} = this.state;
    return (
      <View style={styles.container}>
        <DivisionInfoContainer data={division} />
        <DivisionTabBarContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
