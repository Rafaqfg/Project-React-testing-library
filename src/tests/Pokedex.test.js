import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
// import { renderWithRouter } from '../services/helpers';
import { Router } from 'react-router-dom';
import App from '../App';
import pokemons from '../data';
import { Pokedex } from '../components';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{component}</Router>),
  });
  // função para contornar o problema do history do Router retirada do course: https://app.betrybe.com/course/front-end/testes-automatizados-com-react-testing-library/rtl-testando-react-router/58c480e0-79ed-47bd-a819-f88d82997927/conteudos/0189511f-5c08-4bea-9c72-0cecefb24011/testando-react-router/81d72a46-fc66-48e1-a69b-d8f3a0388424?use_case=side_bar
};

const POKEMON_NAME = 'pokemon-name';
const TYPES = 7;

describe('1 - Testa o componente `<Pokedex.js />`', () => {
  it('1.1 Testa se página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const title = screen
      .getByRole('heading', { level: 2, name: /Encountered pokémons/i });
    expect(title).toBeInTheDocument();
  });
  it('1.2 Testa se é mostrado apenas um Pokémon por vez', () => {
    renderWithRouter(<App />);
    const displayPokemon = screen.getAllByTestId(POKEMON_NAME);
    expect(displayPokemon).toHaveLength(1);
  });
});

describe('2 - Testa a funcionalidade do botão `Próximo pokémon`', () => {
  it('2.1 O botão deve conter o texto `Próximo pokémon`', () => {
    renderWithRouter(<App />);
    const nextPokemonBttn = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(nextPokemonBttn).toBeDefined();
  });
  it('2.2 Os próximos Pokémons da lista devem ser mostrados, um a um, ao clicar no botão',
    () => {
      renderWithRouter(<Pokedex
        pokemons={ pokemons }
        isPokemonFavoriteById={ {} }
      />);
      const nextPokemonBttn = screen.getByTestId('next-pokemon');
      pokemons.forEach((pokemon) => {
        const currentPokemon = screen.getByTestId(POKEMON_NAME);
        expect(currentPokemon).toHaveTextContent(pokemon.name);
        userEvent.click(nextPokemonBttn);
      });
      const currentPokemon = screen.getByTestId(POKEMON_NAME);
      expect(currentPokemon).toHaveTextContent('Pikachu');
    });
});

describe('3 - Testa a funcionalidade dos botões de filtro', () => {
  it('3.1 Testa se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const allBttn = screen.getByRole('button', { name: /all/i });
    expect(allBttn).toBeDefined();
    const typesBttn = screen.getAllByTestId('pokemon-type-button');
    expect(typesBttn).toHaveLength(TYPES);
    typesBttn.forEach((type) => {
      expect(type).toBeInTheDocument();
    });
  });
  it('3.2 Testa se a Pokédex contém um botão para resetar os filtros',
    () => {
      renderWithRouter(<App />);
      const allBttn = screen.getByRole('button', { name: /all/i });
      userEvent.click(allBttn);
      const currentPokemon = screen.getByTestId(POKEMON_NAME);
      expect(currentPokemon).toHaveTextContent('Pikachu');
    });
  it('3.3 A partir da seleção de 1 tipo, deve circular somente pelos pokémons deste tipo',
    () => {
      renderWithRouter(<App />);
      const typesBttn = screen.getAllByTestId('pokemon-type-button');
      const targetType = typesBttn[3];
      userEvent.click(targetType);
      const selectedType = screen.getByTestId('pokemon-type');
      expect(targetType.innerHTML).toEqual(selectedType.textContent);
    });
  //   it('3.4 O texto do botão deve corresponder ao nome do tipo, `ex. Psychic`', () => {
  //     fail()
  //   });
  //   it('3.5 O botão `All` precisa estar sempre visível', () => {
  //     fail()
  //   });
  // });

// describe('4 - Testa a funcionalidade do botão de resetar os filtros', () => {
//   it('4.1 Testa se a Pokédex contém um botão para resetar os filtros', () => {
//     fail()
//   });
//   it('4.2 O texto do botão deve ser `All`', () => {
//     fail()
//   });
//   it('4.3 A Pokedéx mostra os Pokémons normalmente, quando o botão `All` for clicado',
//     () => {
//       fail()
//     });
//   it('4.4 Ao carregar a página, o filtro selecionado deverá ser `All`', () => {
//     fail()
//   });
});
