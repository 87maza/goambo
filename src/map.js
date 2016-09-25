import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
    lat: 28.619570,
    lng: 77.088104
};
const coordsHosp1 = {
    lat: 28.621875,
    lng: 77.0877143
};
const coordsHosp2 = {
    lat: 28.619727,
    lng: 77.0761943
};

const ambo1 = {
    lat: 28.616446,
    lng: 77.0816173
};
const ambo2 = {
    lat: 28.620955,
    lng: 77.0764733
};



const Map = React.createClass({

    onMapCreated(map) {
        map.setOptions({
            disableDefaultUI: true
        });
    },

    onDragEnd(e) {
        console.log('onDragEnd', e);
    },

    onCloseClick() {
        console.log('onCloseClick');
    },

    onClick(e) {
        console.log('onClick', e);
    },
    render() {
        return (
            <Gmaps
                width={'800px'}
                height={'600px'}
                lat={coords.lat}
                lng={coords.lng}
                zoom={15}
                loadingMessage={'Be happy'}
                params={{v: '3.exp', key: 'AIzaSyB1vrulFHGxbmbbPKx1mMgLX0xQ5r5zd1A'}}
                onMapCreated={this.onMapCreated}>
                <Marker
                    lat={coords.lat}
                    lng={coords.lng}
                    draggable={true}
                    onDragEnd={this.onDragEnd}
                />
                <Marker
                    lat={coordsHosp1.lat}
                    lng={coordsHosp1.lng}
                    draggable={true}
                    onDragEnd={this.onDragEnd}
                    icon={"http://maps.google.com/mapfiles/ms/icons/hospitals.png"}
                />
                <Marker
                    lat={coordsHosp2.lat}
                    lng={coordsHosp2.lng}
                    draggable={true}
                    onDragEnd={this.onDragEnd}
                    icon={"http://maps.google.com/mapfiles/ms/icons/hospitals.png"}
                />
                <Marker
                    lat={coordsHosp2.lat}
                    lng={coordsHosp2.lng}
                    draggable={true}
                    onDragEnd={this.onDragEnd}
                    icon={"http://maps.google.com/mapfiles/ms/icons/hospitals.png"}
                />
                <Marker
                    lat={ambo1.lat}
                    lng={ambo1.lng}
                    draggable={true}
                    onDragEnd={this.onDragEnd}
                    icon={"http://maps.google.com/mapfiles/kml/pal4/icon55.png"}
                />
                <Marker
                    lat={ambo2.lat}
                    lng={ambo2.lng}
                    draggable={true}
                    onDragEnd={this.onDragEnd}
                    icon={"http://maps.google.com/mapfiles/kml/pal4/icon55.png"}
                />
                <InfoWindow
                    lat={coords.lat}
                    lng={coords.lng}
                    content={"Hurry Ambo! I'm here!"}
                    onCloseClick={this.onCloseClick} />
                <InfoWindow
                    lat={coordsHosp1.lat}
                    lng={coordsHosp1.lng}
                    content={"Janakpuri Super Speciality Hospital"}
                    onCloseClick={this.onCloseClick} />
                <InfoWindow
                    lat={coordsHosp2.lat}
                    lng={coordsHosp2.lng}
                    content={"Mata Chanan Devi Hospital"}
                    onCloseClick={this.onCloseClick} />
                <InfoWindow
                    lat={ambo1.lat}
                    lng={ambo1.lng}
                    content={"ETA 20mins"}
                    onCloseClick={this.onCloseClick} />
                <InfoWindow
                    lat={ambo2.lat}
                    lng={ambo2.lng}
                    content={"ETA 10mins"}
                    onCloseClick={this.onCloseClick} />
                <Circle
                    lat={coords.lat}
                    lng={coords.lng}
                    radius={450}
                    onClick={this.onClick} />
            </Gmaps>
            
            
        );
    }
});
export default Map;