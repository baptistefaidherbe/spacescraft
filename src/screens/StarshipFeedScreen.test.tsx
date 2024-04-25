import React from 'react';
import { render,  screen } from '@testing-library/react-native';
import StarshipFeedScreen from './StarshipFeedScreen';
import { UseStarships } from '~/hook/useStarships';

jest.mock('~/hook/useStarships');

// jest.mock('react-native-safe-area-context', () => {
//   const inset = { top: 0, right: 0, bottom: 0, left: 0 };
//   return {
//     SafeAreaProvider: jest.fn().mockImplementation(({ children }) => children),
//     SafeAreaConsumer: jest
//       .fn()
//       .mockImplementation(({ children }) => children(inset)),
//     useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
//   };
// });


const mockData = [
  {
    name: 'Millennium Falcon',
    manufacturer: 'Corellian Engineering Corporation',
    crew: '4',
    hyperdrive_rating: '0.5',
  },
];

describe('StarshipFeedScreen', () => {
    beforeEach(() => {
        (UseStarships as jest.Mock).mockReturnValue({
          data: mockData,
          isLoading: false,
          isError: false,
          error: null,
          refetch: jest.fn(),
        });
      });
  fit('renders correctly', () => {
    render(<StarshipFeedScreen />);
    expect(screen.getByText('Millennium Falcon')).toBeTruthy();
  });

 
});
