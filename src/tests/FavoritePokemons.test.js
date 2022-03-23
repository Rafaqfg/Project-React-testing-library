import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../services/helpers';
import App from '../App';
import FavoritePokemons from '../components/FavoritePokemons';

describe('Testa o componente `<FavoritePokemons />`', () => {
  it('1.Testa se é exibido No favorite pokemon found, se não houver pokémons favoritos',
    () => {
      render(<FavoritePokemons />);
      const noFavoritePokemon = screen.getByText(/No favorite pokemon found/i);
      expect(noFavoritePokemon).toBeInTheDocument();
      const img = screen.queryAllByRole('img');
      expect(img).toHaveLength(0);
    });
  it('2.Testa se é exibido todos os cards de pokémons favoritados.', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByText(/More details/i);
    userEvent.click(moreDetails);
    const favoriteInput = screen.getByLabelText(/Pokémon favoritado?/i);
    userEvent.click(favoriteInput);
    const favoriteStar = screen.getAllByAltText(/is marked as favorite/i);
    expect(favoriteStar).toBeDefined();
  });
});
