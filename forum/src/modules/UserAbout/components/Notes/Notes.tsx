import React, { useRef, useState } from 'react';
import styles from './Notes.module.scss';
import etc from '../../../../assets/etc.svg';
import { IUser } from '../../../../interfaces&types/interfaces&types';
import GoogleMapReact from 'google-map-react';
import Note from '../Note/Note';

interface IProps {
  user: IUser;
}

const Notes = ({ user }: IProps) => {
  const [more, setMore] = useState(false);
  const mapRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const mapProps = {
    center: {
      lat: user.lat,
      lng: user.lng,
    },
    zoom: user.zoom,
  };
  return (
    <div className={styles.notebook}>
      {user.notes.map((el) => (
        <Note note={el} key={el.date.getMilliseconds()}></Note>
      ))}
      <div className={styles.map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD13_wGqhL8aeUDXedWw-lizMxofu3Qdpk' }}
          defaultCenter={mapProps.center}
          defaultZoom={mapProps.zoom}
          yesIWantToUseGoogleMapApiInternals
        ></GoogleMapReact>
      </div>
    </div>
  );
};

export default Notes;
