
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import Pdf from 'react-native-pdf';

// export default function PDFViewer(uri) {
//       const PdfResource = { uri, cache: true };
//   return (
//        <View style={styles.container}>
//       <Text style={styles.title}>{title}</Text>
//       <Pdf
//         trustAllCerts={false}
//         source={PdfResource}
//         style={styles.pdf}
//         onLoadComplete={(numberOfPages, filePath) => {
//           console.log(`Number of pages: ${numberOfPages}`);
//         }}
//         onError={(error) => {
//           console.log('PDF load error:', error);
//         }}
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 20,
//   },
//   title: {
//     textAlign: 'center',
//     fontSize: 20,
//     marginVertical: 10,
//     fontWeight: 'bold',
//   },
//   pdf: {
//     flex: 1,
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
// });
