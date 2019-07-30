import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { showHidePopupMenu } from '../../actions/actions';
import { connect } from 'react-redux';
import MenuPopup from '../MenuPopup/MenuPopup';
import { styles } from './HeaderRightElementStyles';

class HeaderRightElement extends React.Component {
   render(){ 
       const { container } = styles;
       return <View style={container}>
            <Icon
            name='search' 
            size={20} 
            type='font-awesome'
            color='#fff' />
            <TouchableOpacity onPress={() => this.props.togglePopup(!this.props.showPopUpMenu)}>  
              <Icon 
                name='ellipsis-v' 
                size={20} 
                type='font-awesome'
                color='#fff' />
            </TouchableOpacity>
            <MenuPopup navigation={this.props.navigation}/>
        </View>
    }
}     

const mapStateToProps = (state)=> {
  return {
      showPopUpMenu: state.uiElementsState.showPopUpMenu
  }
}
  
const mapDispatchToProps = dispatch => {
    return {
      togglePopup: (toggle) => {
        dispatch(showHidePopupMenu(toggle));
      }
    }
}
  
 
export default connect(mapStateToProps, mapDispatchToProps)(HeaderRightElement);