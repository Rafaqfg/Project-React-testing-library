import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from '../App';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{component}</Router>),
  });
  // função para contornar o problema do history do Router retirada do course: https://app.betrybe.com/course/front-end/testes-automatizados-com-react-testing-library/rtl-testando-react-router/58c480e0-79ed-47bd-a819-f88d82997927/conteudos/0189511f-5c08-4bea-9c72-0cecefb24011/testando-react-router/81d72a46-fc66-48e1-a69b-d8f3a0388424?use_case=side_bar
};

describe(
  'Testa se o componente <App.js /> exibe corretamente a barra de navegação com os links',
  () => {
    test('testa se a aplicação contém um conjunto de links de navegação em tag `<nav>`',
      () => {
        renderWithRouter(<App />);
        const navBar = screen.getByRole('navigation');
        expect(navBar).toBeInTheDocument();
      });
    it('testa se o primeiro link possui o texto `Home`', () => {
      renderWithRouter(<App />);
      const homeLink = screen.getByText(/Home/i);
      expect(homeLink).toBeInTheDocument();
    });
    it('testa se o segundo link possui o texto `About`', () => {
      renderWithRouter(<App />);
      const aboutLink = screen.getByText(/About/i);
      expect(aboutLink).toBeInTheDocument();
    });
    it('testa se o terceiro link possui o texto `Favorite Pokémons`', () => {
      renderWithRouter(<App />);
      const favoritePokemonsLink = screen.getByText(/Favorite Pokémons/i);
      expect(favoritePokemonsLink).toBeInTheDocument();
    });
  },
);
describe('Testa se os links do componente `<App.js />` funcionam corretamente', () => {
  it(
    'testa se a aplicação é redirecionada para a página inicial ao clicar no link `Home`',
    () => {
      fail();
    },
  );
  it(
    'testa se a aplicação é redirecionada para a página About ao clicar no link `About`',
    () => {
      fail();
    },
  );
  it(
    'testa se a aplicação é redirecionada para a pág Pokémons Favoritados em favorites',
    () => {
      fail();
    },
  );
  it(
    'testa se a aplicação é redirecionada à pág Not Found ao entrar em url desconhecida',
    () => {
      fail();
    },
  );
});
