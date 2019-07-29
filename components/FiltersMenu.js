	
import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { ButtonGroup, Divider } from 'react-native-elements';
import { connect } from 'react-redux';
import { showHideFiltersMenu, addNewFilter } from '../actions/actions';
import { Categories , Days } from '../config';

class FiltersMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showFilters: props.showFilters || false,
        days: props.filters.days || 0,
        category: props.filters || null
    };
    this.updateIndex = this.updateIndex.bind(this);  
  }  

  componentDidUpdate(prevProps) {
    if(prevProps.showFilters !== this.props.showFilters) {
      this.setState({showFilters: this.props.showFilters});
    }
  } 

  updateIndex(selectedIndex) {
    this.props.addNewFilter({ days: Days[selectedIndex] });
    this.setState({ days: selectedIndex })
  }

  onPressHandler(category) {
    this.setState({ category: category });
    this.props.addNewFilter({ category: category });
  }


  render () {
    const mainButtonStyle = {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 30,
      padding: 2,
      height: 'auto',
    };
    
    const inActiveButton = {
      borderWidth: 1, borderColor: '#00dbb7', backgroundColor: '#fff',
    };
   
    const activeButton = {
      borderWidth: 1, borderColor: '#fff', backgroundColor: '#31bd85',
    };
        
    const categories = Categories.map(item => <TouchableOpacity
      activeOpacity={0.7}
      onPress={this.onPressHandler.bind(this, item)}
      style={this.state.category === item ? [mainButtonStyle, activeButton] : [mainButtonStyle, inActiveButton]}>
        <Text style={this.state.category === item ? [{ size: 10, overflowWrap: 'break-word' }, {color: '#fff'}] : [{ size: 10, overflowWrap: 'break-word' }, {color: '#00dbb7'}]}>{item}</Text>
      </TouchableOpacity>)
    
    return (
    <ScrollView 
      contentContainerStyle={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#00dbb7' }}>
      <View style={{ width: '100%', height: '20%'}}>    
        <Divider style={{ width: '100%', height: 2, margin: 2, backgroundColor: '#fff' }} />
        <Text style={{ width: '100%', color: '#fff', size: 18, fontWeight: 'bold', padding: 5 }}>Choose most popular articles for days back:</Text>
        <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={this.state.days}
            containerStyle={{color: '#00dbb7'}}
            selectedButtonStyle={{backgroundColor: '#31bd85'}}
            selectedTextStyle={{color: '#fff'}}
            textStyle={{color: '#00dbb7'}}
            buttons={Days} />
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%', height: '80%' }}>
        <Divider style={{ width: '100%', height: 2, margin: 2, backgroundColor: '#fff' }} />
        <Text style={{ width: '100%', color: '#fff', size: 18, fontWeight: 'bold', padding: 5 }}>Choose most category for articles</Text>
        {categories}
      </View>
    </ScrollView>);
  }
}

const mapStateToProps = (state)=> {
  console.log(state);
    return {
        showFilters: state.uiElementsState.showFilters,
        filters: state.articles.filters
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      toggleFilters:(toggle) => {
        dispatch(showHideFiltersMenu(toggle))
      },
      addNewFilter: (filter) => {
        dispatch(addNewFilter(filter));
      }
    }
  }
  
 
  export default connect(mapStateToProps, mapDispatchToProps)(FiltersMenu);