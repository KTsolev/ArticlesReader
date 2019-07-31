import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    filterMenuContainer: { width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center', backgroundColor: '#00dbb7' },
    filterMenuInnerContainer: { width: '100%', height: '30%'},
    filterMnuDivider: { width: '100%', height: 2, margin: 2, backgroundColor: '#fff' },
    filerMenuText: { color: '#00dbb7', fontSize: 14, fontWeight: 'bold', padding: 5 },
    filterMenuTextWholeRowSpanned: { width: '100%', color: '#fff', fontSize: 14, 
        fontWeight: 'bold', padding: 5 },
    filterMenuButtonWrapper: { flexDirection: 'row', flexWrap: 'wrap', width: '100%',
         height: '70%' },
    mainButtonStyle: { flexDirection: 'column', justifyContent: 'center', 
    alignItems: 'center', minHeight: 30, padding: 2, height: 'auto' },
    inActiveButton: { borderWidth: 1, borderColor: '#00dbb7', backgroundColor: '#fff' },
    activeButton: { borderWidth: 1, borderColor: '#fff', backgroundColor: '#31bd85' },
    mainButtonText: { fontSize: 12, flexWrap: 'wrap' },
    activeButtonText: { color: '#fff' },
    inActiveButtonText: { color: '#00dbb7' }
})