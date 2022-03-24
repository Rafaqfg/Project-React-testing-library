import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

const HREF = '/pokemons/25';
const PIKACHU_URL = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
const STAR_IMG = '/star-icon.svg';

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
      const pokemonType = screen.getByTestId('pokemon-type');
      expect(pokemonType).toHaveTextContent(/electric/i);
      expect(pokemonImg).toHaveAttribute('src', PIKACHU_URL);
      expect(pokemonName).toBeDefined();
      expect(pokemonImg).toBeInTheDocument();
    });

  it('1.2Testa se o card do Pokémon na Pokédex contém um link para exibir mais detalhes.',
    () => {
      renderWithRouter(<App />);
      const moreDetails = screen.getByRole('link', { name: /more details/i });
      expect(moreDetails).toHaveAttribute('href', HREF);
    });

  it('1.3 Testa se ao clicar no link é'
  + 'feito o redirecionamento para a página de detalhes do Pokémon', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);
    const pokemonDetails = screen.getByRole('heading', { name: /pikachu details/i });
    expect(pokemonDetails).toBeInTheDocument();
  });

  it('1.4 Testa se existe um ícone de estrela nos Pokémons favoritados', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);
    const favoriteCheckBox = screen.getByLabelText(/pokémon favoritado?/i);
    userEvent.click(favoriteCheckBox);
    const starIcon = screen.getByAltText(/is marked as favorite/i);
    expect(starIcon).toHaveAttribute('src', STAR_IMG);
  });
});
