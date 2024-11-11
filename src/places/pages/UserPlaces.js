import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import PlacesList from '../components/PlacesList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Tokyo Sky Tree',
    description:
      'A broadcasting and observation tower in Sumida, Tokyo.It became the tallest tower in Japan in 2010',
    imageUrl:
      'https://www.nippon.com/en/ncommon/contents/guide-to-japan/1814073/1814073.jpg',
    address: '1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-0045, Japan',
    location: {
      lat: 35.710306,
      lng: 139.809499,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Tokyo Sky Tree',
    description:
      'A broadcasting and observation tower in Sumida, Tokyo.It became the tallest tower in Japan in 2010',
    imageUrl:
      'https://www.nippon.com/en/ncommon/contents/guide-to-japan/1814073/1814073.jpg',
    address: '1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-0045, Japan',
    location: {
      lat: 35.710306,
      lng: 139.809499,
    },
    creator: 'u2',
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;

  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlacesList items={loadedPlaces} />;
};

export default UserPlaces;
