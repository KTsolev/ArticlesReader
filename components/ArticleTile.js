
import React from "react";
import { View, Text, Image } from "react-native";
import { Icon } from 'react-native-elements';
import ProgressiveImage from './ProgresiveImage';

class ArticleTile extends React.Component {
    render() {
      const { article } = this.props;
      return <View style={{ flex: 1, flexDirection: 'row', padding: 10, alignItems: 'center', justifyContent: 'center'}}>
            <ProgressiveImage
              style={{ width: 65, height: 65, paddingRight: 20, borderRadius: 50}}
              thumbnailSource={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=50&buster=${Math.random()}` }}
              source={{uri: article.media[0]['media-metadata'][0].url}}
              resizeMode="cover" />
            <View style={{ padding: 2, width: '70%', flexDirection: 'column', padding: 10}}>
                <View style={{ padding: 2, width: '100%', flexDirection: 'column'}}>
                    <Text numberOfLines={2} style={{ fontSize: 14, paddingTop: 5, paddingBottom: 5, color: '#383838', fontWeight: 'bold' }}>{article.title}</Text>
                    <Text numberOfLines={2} style={{ fontSize: 12, paddingTop: 5, paddingBottom: 5, color: '#5b5e61' }}>{article.abstract}</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row'}}>
                    <View style={{ padding: 2, width: '50%', alingItems: 'flex-start', justifyContent: 'center', wordWrap: 'wrap'}}>
                        <Text numberOfLines={2} style={{ fontSize: 10, color: '#5b5e61' }}>{article.byline}</Text>
                    </View>
                    <View style={{ padding: 2, paddingLeft: 20, width: '50%', flexDirection: 'row', alingItems: 'flex-end', justifyContent: 'flex-end'}}>
                        <View style={{ width: '30%', paddingTop: '10%', paddingBottom: '10%'}} >
                          <Icon name='calendar' size={14} type='font-awesome' color='#5b5e61' />
                        </View>  
                        <Text style={{ width: '70%', fontSize: 10, color: '#5b5e61', paddingTop: '10%', paddingBottom: '10%'}}>{article.published_date}</Text>
                    </View>
                </View>
            </View>
            <View style={{ paddingLeft: 20 }}>
              <Icon  name='chevron-right' size={16} type='font-awesome' color='#5b5e61' />
            </View>
        </View>;
    }
  }
 
export default ArticleTile;