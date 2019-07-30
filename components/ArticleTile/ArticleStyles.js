import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   articleContainer: { flex: 1, flexDirection: 'row', padding: 10, alignItems: 'center',
      justifyContent: 'center'},
   articleImageHolder: { width: 65, height: 65, paddingRight: 20, borderRadius: 50},
   articleHaederContainer: { padding: 2, width: '100%', flexDirection: 'column'},
   articleHeaderTitle: { fontSize: 14, paddingTop: 5, paddingBottom: 5, 
      color: '#383838', fontWeight: 'bold' },
   articleHeaderSubTitle: { fontSize: 12, paddingTop: 5, paddingBottom: 5, color: '#5b5e61' },
   articleTileFooter: { width: '100%', flexDirection: 'row'},
   articleAuthorHolder: { padding: 2, width: '50%', alignItems: 'flex-start',
      justifyContent: 'center', flexWrap: 'wrap'},
   articleAuthorText: { fontSize: 10, color: '#5b5e61' },
   articleFooterDateHolder: { padding: 2, paddingLeft: 20, width: '50%',
      flexDirection: 'row', alignContent: 'center', justifyContent: 'flex-end'},
   articleFooterIconHolder: { width: '30%', paddingTop: '10%', paddingBottom: '10%',
      alignContent: 'center'},
   articleTileMain: {width: '70%', fontSize: 10, color: '#5b5e61', paddingLeft: 5,
      paddingTop: '10%', paddingBottom: '10%'},
   articleDateText: {width: '70%', fontSize: 10, color: '#5b5e61', paddingTop: '10%',
      paddingBottom: '10%'},
   articleAsside: { paddingLeft: 20 }
});