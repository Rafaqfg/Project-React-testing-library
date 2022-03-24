import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{component}</Router>),
  });
};

describe('1 - Testa o componente `<Pokemon />`', () => {
  it('1.1 Testa se é renderizado um card com as informações de determinado pokémon',
    () => {
      renderWithRouter(<App />);
      const pokemonName = screen.getByText(/pikachu/i);
      const pokemonImg = screen.getByRole('img', { name: /pikachu sprite/i });
      expect(pokemonName).toBeDefined();
      expect(pokemonImg).toBeInTheDocument();
    });

  it('Teste se o card do Pokémon Pokédex contém um link para exibir mais detalhes.',
    () => {
      renderWithRouter(<App />);
      const moreDetails = screen.getByRole('link', { name: /more details/i });
      const hRef = '/pokemons/25';
      expect(moreDetails).toHaveAttribute('href', hRef);
    });
});
