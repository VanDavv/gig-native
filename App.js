import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            },
            markers: []
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <MapView
                    initialRegion={this.state.region}
                    style={styles.map}
                    onPress={event => this.setState({markers: this.state.markers.concat({
                            coordinate: event.nativeEvent.coordinate
                    })})}
                >
                    {
                        this.state.markers.map((marker, key) => (
                            <Marker
                                key={key}
                                coordinate={marker.coordinate}
                                title={`TEST${key}`}
                                description={'some description'}
                            />
                        ))
                    }
                </MapView>
            </View>
        );
    }
}
