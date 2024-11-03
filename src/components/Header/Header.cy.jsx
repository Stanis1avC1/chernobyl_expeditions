import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header Component', () => {
  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <Header />
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

  it('renders the site title correctly', () => {
    cy.get('.logo span').should('contain', 'Chernobyl Expeditions');
  });

  it('renders navigation links with correct text and hrefs', () => {
    cy.get('.navMenu a').eq(0).should('contain', 'Головна').and('have.attr', 'href', '/');
    cy.get('.navMenu a').eq(1).should('contain', 'Про зону').and('have.attr', 'href', '/about-zone');
    cy.get('.navMenu a').eq(2).should('contain', 'Про нас').and('have.attr', 'href', '/about-us');
    cy.get('.navMenu a').eq(3).should('contain', 'Тури').and('have.attr', 'href', '/tours');
    cy.get('.navMenu a').eq(4).should('contain', 'Контакти').and('have.attr', 'href', '/contacts');
  });

  it('renders auth buttons with correct text and hrefs', () => {
    cy.get('.authButtons .loginButton')
      .should('contain', 'Вхід')
      .and('have.attr', 'href', '/login');

    cy.get('.authButtons .registerButton')
      .should('contain', 'Реєстрація')
      .and('have.attr', 'href', '/register');
  });
});
