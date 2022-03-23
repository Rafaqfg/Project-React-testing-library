import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';

export const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{component}</Router>),
  });
  // função para contornar o problema do history do Router retirada do course: https://app.betrybe.com/course/front-end/testes-automatizados-com-react-testing-library/rtl-testando-react-router/58c480e0-79ed-47bd-a819-f88d82997927/conteudos/0189511f-5c08-4bea-9c72-0cecefb24011/testando-react-router/81d72a46-fc66-48e1-a69b-d8f3a0388424?use_case=side_bar
};

export const everyCheck = (nextPokemonBtn, arr) => {
  arr.every((pokemon, index) => {
    if (arr[index] === 0) return true;
    userEvent.click(nextPokemonBtn);
    const currentPokemon = screen.getByTestId('pokemon-name');
    const result = expect(currentPokemon).toHaveTextContent(pokemon.name);
    if (result) return true;
    return false;
    
  });
};