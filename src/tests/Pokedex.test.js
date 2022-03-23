import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../services/helpers';
import App from '../App';
import Pokedex from '../components/Pokedex';

describe('1 - Testa o componente `<Pokedex.js />`', () => {
  it('1.1 Testa se página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const title = screen
      .getByRole('heading', { level: 2, name: /Encountered pokémons/i });
    expect(title).toBeInTheDocument();
  });
  it('1.2 Testa se é mostrado apenas um Pokémon por vez', () => {
    renderWithRouter(<App />);
    const displayPokemon = screen.getAllByTestId('pokemon-name');
    expect(displayPokemon).toHaveLength(1);
  });
});

describe('2 - Testa a funcionalidade do botão `Próximo pokémon`', () => {
  it('2.1 O botão deve conter o texto `Próximo pokémon`', () => {
    fail()
  });
  it('2.2 Os próximos Pokémons da lista devem ser mostrados, um a um, ao clicar no botão',
    () => {
      fail()
    });
  it('2.3 O 1o Pokémon deve ser mostrado ao clicar no botão,se estiver no último Pokémon',
    () => {
      fail()
    });
  it('2.4 Testa se é exibido o próximo Pokémon ao clicar no botão `Próximo pokémon`',
    () => {
      fail()
    });
});

describe('3 - Testa a funcionalidade dos botões de filtro', () => {
  it('3.1 Testa se a Pokédex tem os botões de filtro', () => {
    fail()
  });
  it('3.2 Deve existir um botão de filtragem para cada tipo de Pokémon, sem repetição',
    () => {
      fail()
    });
  it('3.3 A partir da seleção de 1 tipo, deve circular somente pelos pokémons deste tipo',
    () => {
      fail()
    });
  it('3.4 O texto do botão deve corresponder ao nome do tipo, `ex. Psychic`', () => {
    fail()
  });
  it('3.5 O botão `All` precisa estar sempre visível', () => {
    fail()
  });
});

describe('4 - Testa a funcionalidade do botão de resetar os filtros', () => {
  it('4.1 Testa se a Pokédex contém um botão para resetar os filtros', () => {
    fail()
  });
  it('4.2 O texto do botão deve ser `All`', () => {
    fail()
  });
  it('4.3 A Pokedéx mostra os Pokémons normalmente, quando o botão `All` for clicado',
    () => {
      fail()
    });
  it('4.4 Ao carregar a página, o filtro selecionado deverá ser `All`', () => {
    fail()
  });
});
