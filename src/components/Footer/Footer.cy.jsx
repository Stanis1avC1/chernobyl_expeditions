import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

describe('Footer Component', () => {
  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
  });

  it('renders the logo with correct alt text', () => {
    cy.get('img')
      .should('have.attr', 'src')
      .and('include', 'logo.png');
      
    cy.get('img')
      .should('have.attr', 'alt', 'Chernobyl Expeditions Logo');
  });

  it('renders navigation links with correct text', () => {
    cy.get('nav .navLink').eq(0).should('contain', 'Про зону').and('have.attr', 'href', '/about-zone');
    cy.get('nav .navLink').eq(1).should('contain', 'Про нас').and('have.attr', 'href', '/about-us');
    cy.get('nav .navLink').eq(2).should('contain', 'Тури').and('have.attr', 'href', '/tours');
    cy.get('nav .navLink').eq(3).should('contain', 'Контакти').and('have.attr', 'href', '/contacts');
  });
});
