import React, { Component } from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { showHidePopupMenu } from '../../actions/actions';
import { styles } from './MenuPopupStyles';

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
    const { container, button } = styles;
    return this.state.showPopUpMenu ? <View style={container}>
          <TouchableOpacity style={button} onPress={this.clickHandler}>
            <Icon name='home' size={16} type='font-awesome' color='#5b5e61' />
            <Text>Home Page</Text>
          </TouchableOpacity>
      </View> : null;
  }
}

const mapStateToProps = (state)=> {
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