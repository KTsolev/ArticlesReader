import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements';
import { showHideFiltersMenu } from '../actions/actions';
import { connect } from 'react-redux';
import FiltersMenu from './FiltersMenu';

class HeaderLeftElement extends React.Component {
   render(){ 
       return <View style={{ 
           flexDirection: 'row',
           justifyContent: 'flex-start',
           padding: 5, 
           maxWidth: 50}}>
       <TouchableOpacity onPress={() => this.props.toggleFilters(!this.props.showFilters)}>
        <Icon
            name='bars' 
            size={20} 
            type='font-awesome'
            color='#fff' />
       </TouchableOpacity>
       <FiltersMenu />
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
  
 