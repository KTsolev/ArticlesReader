import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { showHideFiltersMenu } from '../../actions/actions';
import { connect } from 'react-redux';
import { styles } from './HeaderLeftElementStyles';

class HeaderLeftElement extends React.Component {
    render(){
       const { container } = styles; 
       return <View style={container}>
       <TouchableOpacity onPress={() => this.props.toggleFilters(!this.props.showFilters)}>
        <Icon
            name='bars' 
            size={20} 
            type='font-awesome'
            color='#fff' />
       </TouchableOpacity>
     </View>
    }
}

const mapStateToProps = (state)=> {
    return {
        showFilters: state.uiElementsState.showFilters
    }
}
    
const mapDispatchToProps = dispatch => {
    return {
        toggleFilters: (toggle) => {
            dispatch(showHideFiltersMenu(toggle));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLeftElement);
  
 