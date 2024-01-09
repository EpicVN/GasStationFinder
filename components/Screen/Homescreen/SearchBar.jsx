// import { View, Text, StyleSheet } from 'react-native'
// import React from 'react'
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import Colors from '../../../assets/Utils/Colors';
// import { Ionicons } from '@expo/vector-icons';

// export default function SearchBar({searchLocation}) {
//   return (
//     <View style={styles.searchBar}>

//       <Ionicons name="location-sharp" size={24} color={Colors.GRAY} style={{paddingTop: 10}} />

//       <GooglePlacesAutocomplete
//           placeholder='Tìm kiếm trạm xăng'
//           fetchDetails={true}
//           onPress={(data, details = null) => {
//             searchLocation(details?.geometry?.location)
//           }}
//           query={{
//             key: 'AIzaSyDEAsUnL5QvqXy3cknjZA8IrpgOOKcvxj4',
//             language: 'vi',
//           }}
//         />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   searchBar: {
//     display: 'flex',
//     flexDirection: 'row',
//     marginTop: 15,
//     paddingHorizontal: 5,
//     backgroundColor: Colors.WHITE,
//     borderRadius: 6
//   },
// });