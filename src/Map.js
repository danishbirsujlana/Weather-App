import React, {useState, useEffect} from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import Icon from './marker.png'

require('dotenv').config();

const MapBox = ({citydata}) => {
    const {location} = citydata;
    const [viewport, setViewPort] = useState({
        latitude: 31.326015,
        longitude: 75.59288,
        width: '100%',
        height: '633px',
        zoom: 12,
    })
    const [popup, setPopup] = useState(false);

    useEffect(() => {
        setViewPort({...viewport, latitude: location.lat, longitude: location.lon})
    }, [location]);

    return (
        <div className='map'>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
                mapStyle='mapbox://styles/mapbox/light-v10'
                onViewportChange={(viewport) => setViewPort(viewport)}
            >
                <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
                    <button className='marker-btn' onClick={() => setPopup(true)}>
                        <img src={Icon} alt='marker-icon' />
                    </button>
                </Marker>
                {
                    popup && (
                        <Popup latitude={viewport.latitude} longitude={viewport.longitude} onClose={() => setPopup(false)}>
                            <div>
                                <h2>{location.name}</h2>
                                <p>({viewport.latitude}, {viewport.longitude})</p>
                            </div>
                        </Popup>
                    )
                }
            </ReactMapGL>
        </div>
    )
}

export default MapBox
