import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

const IMG = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

describe('Testa o componente `<About />`', () => {
  test('1.Teste se a página contém as informações sobre a Pokédex.', () => {
    render(<About />);
    const pokedexInfo = screen.getByText(/This application simulates/i);
    expect(pokedexInfo).toBeInTheDocument();
    const pokedexInfo2 = screen.getByText(/One can filter/i);
    expect(pokedexInfo2).toBeInTheDocument();
  });
  it('2.Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    render(<About />);
    const aboutPokedexText = screen
      .getByRole('heading', { level: 2, name: 'About Pokédex' });
    expect(aboutPokedexText).toBeInTheDocument();
  });
  it('3.Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    render(<About />);
    const paragraphOne = screen.getByText(/This application simulates/i);
    expect(paragraphOne).toBeInTheDocument();
    const paragraphTwo = screen.getByText(/One can filter/i);
    expect(paragraphTwo).toBeInTheDocument();
  });
  it('4.Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    render(<About />);
    const imgTest = screen.getByAltText(/Pokédex/i);
    expect(imgTest.src).toContain(IMG);
  }); // https://stackoverflow.com/questions/60509527/jestreact-native-testing-library-how-to-test-an-image-src
});
