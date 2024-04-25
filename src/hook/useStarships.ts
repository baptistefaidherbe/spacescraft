import { useQuery } from '@tanstack/react-query';

async function fetchData() {
    try {
      const result = await fetch(`https://swapi.py4e.com/api/starships/`);
    
      const data = await result.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throwing the error for handling at a higher level, if needed
    }
  }

export function UseStarships() {
  return useQuery({ queryKey: ['starships'], queryFn: fetchData });
}
