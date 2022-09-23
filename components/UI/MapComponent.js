import MapView, { PROVIDER_GOOGLE,Polyline } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { StyleSheet, View, Text } from 'react-native';
const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default () => (
//    <View style={styles.container}>
//      <MapView
//        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//        style={styles.map}
//        region={{
//          latitude: 37.78825,
//          longitude: -122.4324,
//          latitudeDelta: 0.015,
//          longitudeDelta: 0.0121,
//        }}
//      >
//      </MapView>
//    </View>
<MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
>
	<Polyline
		coordinates={[
			{ latitude: 37.8025259, longitude: -122.4351431 },
			{ latitude: 37.7896386, longitude: -122.421646 },
			{ latitude: 37.7665248, longitude: -122.4161628 },
			{ latitude: 37.7734153, longitude: -122.4577787 },
			{ latitude: 37.7948605, longitude: -122.4596065 },
			{ latitude: 37.8025259, longitude: -122.4351431 }
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={6}
	/>
</MapView>
);