
import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import ProgressiveImage from '../ProgresiveImage/ProgresiveImage';
import { styles } from './ArticleStyles';

class ArticleTile extends React.Component {
    render() {
      const { article } = this.props;
      const {
        articleContainer,
        articleImageHolder,
        articleTileMain,
        articleHaederContainer,
        articleHeaderTitle,
        articleHeaderSubTitle,
        articleTileFooter,
        articleAuthorHolder,
        articleAuthorText,
        articleFooterDateHolder,
        articleFooterIconHolder,
        articleDateText,
        articleAsside
      } = styles;
     
     return <View style={articleContainer}>
            <ProgressiveImage
              style={articleImageHolder}
              thumbnailSource={require('../../images/dummy-image.png')}
              source={{uri: article.media[0]['media-metadata'][0].url}}
              resizeMode="contain" />
            <View style={articleTileMain}>
                <View style={articleHaederContainer}>
                    <Text numberOfLines={2} style={articleHeaderTitle}>{article.title}</Text>
                    <Text numberOfLines={2} style={articleHeaderSubTitle}>{article.abstract}</Text>
                </View>
                <View style={articleTileFooter}>
                    <View style={articleAuthorHolder}>
                        <Text numberOfLines={2} style={articleAuthorText}>{article.byline}</Text>
                    </View>
                    <View style={articleFooterDateHolder}>
                        <View style={articleFooterIconHolder} >
                          <Icon name='calendar' size={14} type='font-awesome' color='#5b5e61' />
                        </View>  
                        <Text style={articleDateText}>{article.published_date}</Text>
                    </View>
                </View>
            </View>
            <View style={articleAsside}>
              <Icon  name='chevron-right' size={16} type='font-awesome' color='#5b5e61' />
            </View>
        </View>;
    }
  }
 
export default ArticleTile;