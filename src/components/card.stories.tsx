// cardComponent.stories.tsx
import React from 'react';
import CardComponent from './card';
import { starShip } from '~/type';

const mockStarShip: starShip = {
    name: 'Millennium Falcon',
    manufacturer: 'Corellian Engineering Corporation',
    crew: '4',
    hyperdrive_rating: '0.5',
    MGLT: '',
    cargo_capacity: '',
    consumables: '',
    cost_in_credits: '',
    created: '',
    edited: '',
    films: [],
    length: '',
    max_atmosphering_speed: '',
    model: '',
    passengers: '',
    pilots: [],
    starship_class: '',
    url: ''
};

export default {
  title: 'CardComponent',
  component: CardComponent,
};

export const Default = (args: { item: starShip }) => <CardComponent {...args} />;
Default.args = {
    item: mockStarShip,
};