import React from 'react';
import TourInfo from './TourInfo';
import { MemoryRouter } from 'react-router-dom';

describe('TourInfo Component', () => {
  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <TourInfo />
      </MemoryRouter>
    );
  });

  it('renders the combined image', () => {
    cy.get('img')
      .should('have.attr', 'src')
      .and('include', 'combined.png');
    cy.get('img').should('have.attr', 'alt', 'Tours');
  });

  it('renders all tour titles with correct styles', () => {
    const expectedTitles = [
      "Одноденна екскурсія в Чорнобиль",
      "Дводенна екскурсія в Чорнобиль",
      "Індивідуальна екскурсія в Чорнобиль",
      "Авіатур в Чорнобильську зону"
    ];

    expectedTitles.forEach((title, index) => {
      cy.get(`.${styles.overlay}`).eq(index).should('contain', title);
    });
  });

  it('applies correct styles to tour titles', () => {
    cy.get(`.${styles.overlay}`).eq(0).should('have.css', 'top', '10%').and('have.css', 'left', '10%');
    cy.get(`.${styles.overlay}`).eq(1).should('have.css', 'top', '10%').and('have.css', 'right', '10%');
    cy.get(`.${styles.overlay}`).eq(2).should('have.css', 'bottom', '10%').and('have.css', 'left', '10%');
    cy.get(`.${styles.overlay}`).eq(3).should('have.css', 'bottom', '10%').and('have.css', 'right', '10%');
  });
});
