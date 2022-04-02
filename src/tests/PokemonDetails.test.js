import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import App from '../App';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{component}</Router>),
  });
};

describe('Testa se as informações detalhadas do Pokémon são mostradas na tela.',
  () => {
    it('Deve conter um texto <name. Details, sendo <name> = nome do pokemon', () => {
      renderWithRouter(<App />);
      const link = screen.getByRole('link', { name: /more details/i });
      userEvent.click(link);
      const text = screen.getByRole('heading', { name: /pikachu details/i });
      expect(text).toBeDefined();
    });

    it('A seção de detalhes deve conter um heading h2 com o texto Summary', () => {
      renderWithRouter(<App />);
      const link = screen.getByRole('link', { name: /more details/i });
      userEvent.click(link);
      const sumary = screen.getByRole('heading', { level: 2, name: /summary/i });
      expect(sumary).toBeInTheDocument();
    });

    it('A seção de detalhes deve conter um parágrafo com o resumo do Pokémon visualizado',
      () => {
        renderWithRouter(<App />);
        const link = screen.getByRole('link', { name: /more details/i });
        userEvent.click(link);
        const details = screen.getByText(/intelligent Pokémon roasts hard berries/i);
        expect(details).toBeInTheDocument();
      });

    it('Testa de existe um heading h2 com o texto Game Locations of <name>', () => {
      renderWithRouter(<App />);
      const link = screen.getByRole('link', { name: /more details/i });
      userEvent.click(link);
      const sumary = screen.getByRole('heading', { level: 2, name: /game locations/i });
      expect(sumary).toBeInTheDocument();
    });

    it('Testa se o nome da localização e uma imagem do mapa sao mostrados', () => {
      renderWithRouter(<App />);
      const link = screen.getByRole('link', { name: /more details/i });
      userEvent.click(link);
      const altName = screen.getAllByAltText('Pikachu location');
      expect(altName).toHaveLength(2);
      const img1 = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
      const img2 = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';
      const mapsImage = screen.getAllByRole('img', { name: 'Pikachu location' });
      expect(mapsImage[0]).toHaveAttribute('src', img1);
      expect(mapsImage[1]).toHaveAttribute('src', img2);
    });
    it('Testa se o usuário pode favoritar um pokémon através da página de detalhes',
      () => {
        renderWithRouter(<App />);
        const link = screen.getByRole('link', { name: /more details/i });
        userEvent.click(link);
        const checkBox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
        expect(checkBox).toBeInTheDocument();
      });
  });
