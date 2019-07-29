	
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity  } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { showHideFiltersMenu } from '../actions/actions';

const Main = (props) => {
  return <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', maxWidth: '40%' }}></View>
}

class FiltersMenu extends Component {
  constructor(props) {
      super(props);
      this.state = {
          showFilters: props.showFilters || false,
      };
  }  

  componentDidUpdate(prevProps) {
      if(prevProps.showFilters !== this.props.showFilters) {
        this.setState({showFilters: this.props.showFilters});
      }
    } 


  clickHandler = () => {
    this.props.toggleFilters(!this.state.showFilters);
  };


  render () {
    return <Main />
  }
}

const mapStateToProps = (state)=> {
    return {
        showFilters: state.uiElementsState.showFilters
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      toggleFilters:(toggle) => {
        dispatch(showHideFiltersMenu(toggle))
      }
    }
  }
  
 
  export default connect(mapStateToProps, mapDispatchToProps)(FiltersMenu);