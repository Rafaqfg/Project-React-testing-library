import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotFound } from '../components';

const IMG = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

describe('Teste o componente `<NotFound.js />`', () => {
  it('1.Teste se página contém um heading h2 com o texto Page requested not found 😭',
    () => {
      render(<NotFound />);
      const notFoundMessage = screen
        .getByRole('heading', { level: 2, name: /Page requested not found/i });
      expect(notFoundMessage).toBeInTheDocument();
    });
  it('2.Teste se página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    render(<NotFound />);
    const notFoundImage = screen.getByAltText(/not found/i);
    expect(notFoundImage.src).toContain(IMG);
  });
});
