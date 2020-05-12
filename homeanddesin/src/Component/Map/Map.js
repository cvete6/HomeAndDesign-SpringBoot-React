import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    width: '40%',
    height: '40%',
};

export class MapSimple extends Component {
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    }
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 41.342676, lng: 21.569989}}
            >
                <Marker position={{ lat: 41.342676, lng:21.569989}} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDvrnyfcnJhdgfh0KcHsOd2jXmAhUiE-J0'
})(MapSimple);
