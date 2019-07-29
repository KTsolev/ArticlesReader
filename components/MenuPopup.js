	
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity  } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { showHidePopupMenu } from '../actions/actions';

class MenuPopup extends Component {
  constructor(props) {
      super(props);
      this.state = {
          showPopUpMenu: props.showPopUpMenu || false,
      };
  }

  componentDidUpdate(prevProps) {
    if(prevProps.showPopUpMenu !== this.props.showPopUpMenu) {
        this.setState({showPopUpMenu: this.props.showPopUpMenu});
    }
  } 


  clickHandler = () => {
    this.props.togglePopup(!this.state.showPopUpMenu);
    this.props.navigation.navigate('Home');
  };

  render() {
    return this.state.showPopUpMenu ? <View style={{ position: 'absolute', top: '100%', right: 0, width: 120, height: 40, borderWidth: 1, borderColor: '#a8a8a8', backgroundColor: '#ededed' }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', padding: 5, width: '100%', height: '100%' }} onPress={this.clickHandler}>
            <Icon name='home' size={16} type='font-awesome' color='#5b5e61' />
            <Text>Home Page</Text>
          </TouchableOpacity>
      </View> : null;
  }
}

const mapStateToProps = (state)=> {
    console.log(state);
    return {
        showPopUpMenu: state.uiElementsState.showPopUpMenu
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      togglePopup:(toggle) => {
        dispatch(showHidePopupMenu(toggle))
      }
    }
  }
  
 
  export default connect(mapStateToProps, mapDispatchToProps)(MenuPopup);