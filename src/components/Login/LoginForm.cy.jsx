import React from 'react';
import LoginForm from './LoginForm';
import { MemoryRouter } from 'react-router-dom';

describe('LoginForm Component', () => {
  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
  });

  it('renders the login title correctly', () => {
    cy.get('.title').should('contain', 'Вхід');
  });

  it('renders email input field', () => {
    cy.get('input[type="email"]')
      .should('exist')
      .and('have.attr', 'placeholder', 'Електронна адреса');
  });

  it('renders password input field', () => {
    cy.get('input[type="password"]')
      .should('exist')
      .and('have.attr', 'placeholder', 'Пароль');
  });

  it('renders submit button', () => {
    cy.get('button[type="submit"]').should('exist');
    cy.get('button[type="submit"]').should('contain', 'Увійти');
  });

  it('disables the button when loading', () => {
    cy.get('button[type="submit"]').as('submitButton');
    cy.get('@submitButton').should('not.be.disabled');

    // Simulate loading state
    cy.get('@submitButton').click();
    cy.get('@submitButton').should('contain', 'Завантаження...').and('be.disabled');
  });

  it('renders error message when there is an error', () => {
    cy.get('.errorMessage').should('not.exist');

    // Simulate an error
    cy.intercept('POST', '/api/login', {
      statusCode: 400,
      body: { error: 'Невірні дані' },
    }).as('loginError');

    cy.get('input[type="email"]').type('wrongemail@example.com');
    cy.get('input[type="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();

    cy.wait('@loginError');
    cy.get('.errorMessage').should('contain', 'Невірні дані');
  });
});
