import React from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import {Card, Icon, Avatar, List} from 'antd';


var myIconDanger = L.icon({
    iconUrl:'pinDanger.png',
    iconSize:[35, 41],
    iconAnchor:[17.5, 41],
    popupAnchor:[0, -41],
})

var myIconSave = L.icon({
    iconUrl:'pinSafe.png',
    iconSize:[35, 41],
    iconAnchor:[17.5, 41],
    popupAnchor:[0, -41]
})

var myIconRisky = L.icon({
    iconUrl:'pinRisky.png',
    iconSize:[35, 41],
    iconAnchor:[17.5, 41],
    popupAnchor:[0, -41],
})
export default class RobiMap extends React.Component{
    state = {
        lat: 23.8103,
        lng: 90.4125,
        zoom: 7,
    }
    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <div className="map-container">
                <Map className="map" center={position} zoom={this.state.zoom}>
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {this.props.data.map(item=>
                        item.Vulnerability>=4?
                        <Marker
                        icon={myIconDanger} 
                        position={[item.Latitude, item.Longitude]}
                        >
                            <Popup>
                                <Card
                                    style={{ width: 300, marginTop: 16 }}
                                    // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                >
                                    <Card.Meta
                                    avatar={<Avatar size={64} src="https://image.jimcdn.com/app/cms/image/transf/none/path/sa6fff2b3b75ec564/image/ib76b190624988e19/version/1505123486/image.png" />}
                                    description={
                                        <List>
                                            <List.Item color="blue">Region: {item.Region}</List.Item>
                                            <List.Item color="blue">Zone:{item.Zone}</List.Item>
                                            <List.Item color="blue">Quickly MP: {item.Quickly_MP}</List.Item>
                                            <List.Item color="blue">Division: {item.Division}</List.Item>
                                            <List.Item color="blue">District: {item.District}</List.Item>
                                            <List.Item color="blue">Thana: {item.Thana}</List.Item>
                                            <List.Item color="blue">Union:{item.Union}</List.Item>
                                            <List.Item color="blue">Pakage:{item.Pakage}</List.Item>
                                            <List.Item color="blue">Site Category:{item.Site_Category}</List.Item>
                                            <List.Item color="blue">Site Priority:{item.Site_Priority}</List.Item>
                                            <List.Item color="blue">Importance:{item.Importance}</List.Item>
                                            <List.Item color="blue">Own Shared:{item.Own_Shared}</List.Item>
                                            <List.Item color="blue">Battery Back Up Time:{item.Battery_Back_Up_Time}</List.Item>
                                            <List.Item color="blue">Vulnerability Score:{item.Vulnerability_Score}</List.Item>
                                        </List>
                                    }
                                    />
                                </Card>    
                            </Popup>
                        </Marker>:item.Vulnerability<3?
                        <Marker
                        icon={myIconSave} 
                        position={[item.Latitude, item.Longitude]}
                        >
                            <Popup>
                            <Card
                                    style={{ width: 300, marginTop: 16 }}
                                    // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                >
                                    <Card.Meta
                                    avatar={<Avatar size={64} src="https://image.jimcdn.com/app/cms/image/transf/none/path/sa6fff2b3b75ec564/image/ib76b190624988e19/version/1505123486/image.png" />}
                                    description={
                                        <List>
                                            <List.Item color="blue">Region: {item.Region}</List.Item>
                                            <List.Item color="blue">Zone:{item.Zone}</List.Item>
                                            <List.Item color="blue">Quickly MP: {item.Quickly_MP}</List.Item>
                                            <List.Item color="blue">Division: {item.Division}</List.Item>
                                            <List.Item color="blue">District: {item.District}</List.Item>
                                            <List.Item color="blue">Thana: {item.Thana}</List.Item>
                                            <List.Item color="blue">Union:{item.Union}</List.Item>
                                            <List.Item color="blue">Pakage:{item.Pakage}</List.Item>
                                            <List.Item color="blue">Site Category:{item.Site_Category}</List.Item>
                                            <List.Item color="blue">Site Priority:{item.Site_Priority}</List.Item>
                                            <List.Item color="blue">Importance:{item.Importance}</List.Item>
                                            <List.Item color="blue">Own Shared:{item.Own_Shared}</List.Item>
                                            <List.Item color="blue">Battery Back Up Time:{item.Battery_Back_Up_Time}</List.Item>
                                            <List.Item color="blue">Vulnerability Score:{item.Vulnerability_Score}</List.Item>
                                        </List>
                                    }
                                    />
                                </Card>
                            </Popup>
                        </Marker>:
                        <Marker
                        icon={myIconRisky} 
                        position={[item.Latitude, item.Longitude]}
                        >
                            <Popup>
                            <Card
                                    style={{ width: 300, marginTop: 16 }}
                                    // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                >
                                    <Card.Meta
                                    avatar={<Avatar size={64} src="https://image.jimcdn.com/app/cms/image/transf/none/path/sa6fff2b3b75ec564/image/ib76b190624988e19/version/1505123486/image.png" />}
                                    description={
                                        <List>
                                            <List.Item color="blue">Region: {item.Region}</List.Item>
                                            <List.Item color="blue">Zone:{item.Zone}</List.Item>
                                            <List.Item color="blue">Quickly MP: {item.Quickly_MP}</List.Item>
                                            <List.Item color="blue">Division: {item.Division}</List.Item>
                                            <List.Item color="blue">District: {item.District}</List.Item>
                                            <List.Item color="blue">Thana: {item.Thana}</List.Item>
                                            <List.Item color="blue">Union:{item.Union}</List.Item>
                                            <List.Item color="blue">Pakage:{item.Pakage}</List.Item>
                                            <List.Item color="blue">Site Category:{item.Site_Category}</List.Item>
                                            <List.Item color="blue">Site Priority:{item.Site_Priority}</List.Item>
                                            <List.Item color="blue">Importance:{item.Importance}</List.Item>
                                            <List.Item color="blue">Own Shared:{item.Own_Shared}</List.Item>
                                            <List.Item color="blue">Battery Back Up Time:{item.Battery_Back_Up_Time}</List.Item>
                                            <List.Item color="blue">Vulnerability Score:{item.Vulnerability_Score}</List.Item>
                                        </List>
                                    }
                                    />
                                </Card>
                            </Popup>
                        </Marker>
                    )}
                </Map>
            </div>
        )
    }
}