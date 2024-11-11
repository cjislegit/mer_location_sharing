import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/components/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import './PlaceForm.css';

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

const UpdatePlacePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    setFormData(
      {
        title: {
          value: identifiedPlace.title,
          isValid: true,
        },
        description: {
          value: identifiedPlace.description,
          isValid: true,
        },
      },
      true
    );
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className='center'>
        <h2>Could not find place!</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='center'>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form onSubmit={placeUpdateSubmitHandler} className='place-form'>
      <Input
        id='title'
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title.'
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id='description'
        element='textarea'
        label='Description'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid description (min. 5 characters).'
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type='submit' disabled={!formState.isValid}>
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlacePage;
