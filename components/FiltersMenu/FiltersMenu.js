	
import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { ButtonGroup, Divider } from 'react-native-elements';
import { connect } from 'react-redux';
import { showHideFiltersMenu, addNewFilter, resetFilter } from '../../actions/actions';
import { Categories , Days } from '../../config';
import { styles } from './FilterMenuStyles';

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

  resetFilters() {
    this.props.resetAll();
    this.setState({ category: null, days: 0 });
  }

  render () {
    const { 
      filterMenuContainer,
      filterMenuInnerContainer,
      filterMnuDivider,
      filerMenuText,
      filterMenuButtonWrapper,
      filterMenuTextWholeRowSpanned,
      mainButtonStyle,
      inActiveButton,
      activeButton,
      mainButtonText,
      activeButtonText,
      inActiveButtonText
    } = styles;


    const categories = Categories.map((item, index) => <TouchableOpacity
      activeOpacity={0.7}
      key={index}
      onPress={this.onPressHandler.bind(this, item)}
      style={this.state.category === item ? [mainButtonStyle, activeButton] : [mainButtonStyle, inActiveButton]}>
        <Text style={this.state.category === item ? [mainButtonText, activeButtonText] : [mainButtonText, inActiveButtonText]}>{item}</Text>
      </TouchableOpacity>)
    
    return (
      <ScrollView contentContainerStyle={filterMenuContainer}>
        <View style={filterMenuInnerContainer}>
          <Divider style={filterMnuDivider} />
          <TouchableOpacity 
            onPress={this.resetFilters.bind(this)}
            style={[mainButtonStyle, inActiveButton]}>
            <Text style={filerMenuText}>Reset Filters</Text>
          </TouchableOpacity>
          <Divider style={filterMnuDivider} />
          <Text style={filterMenuTextWholeRowSpanned}>Choose most popular articles for days back:</Text>
          <ButtonGroup
              onPress={this.updateIndex}
              selectedIndex={this.state.days}
              containerStyle={{color: '#00dbb7'}}
              selectedButtonStyle={{backgroundColor: '#31bd85'}}
              selectedTextStyle={{color: '#fff'}}
              textStyle={{color: '#00dbb7'}}
              buttons={Days} />
        </View>
        <View style={filterMenuButtonWrapper}>
          <Divider style={filterMnuDivider} />
          <Text style={filterMenuTextWholeRowSpanned}>Choose most category for articles</Text>
          {categories}
          <Divider style={filterMnuDivider} />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state)=> {
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
      },
      resetAll: (filter) => {
        dispatch(resetFilter(filter));
      }
    }
  }
  
 
  export default connect(mapStateToProps, mapDispatchToProps)(FiltersMenu);