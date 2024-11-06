import React from 'react';
import RegisterForm from './RegisterForm';
import { MemoryRouter } from 'react-router-dom';

describe('RegisterForm Component', () => {
  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <RegisterForm />
      </MemoryRouter>
    );
  });

  it('renders the registration title correctly', () => {
    cy.get('.title').should('contain', 'Реєстрація');
  });

  it('renders email input field', () => {
    cy.get('input[type="email"]')
      .should('exist')
      .and('have.attr', 'placeholder', 'Пошта');
  });

  it('renders password input field', () => {
    cy.get('input[placeholder="Пароль"]')
      .should('exist')
      .and('have.attr', 'type', 'password');
  });

  it('renders confirm password input field', () => {
    cy.get('input[placeholder="Повторити пароль"]')
      .should('exist')
      .and('have.attr', 'type', 'password');
  });

  it('renders show password checkbox', () => {
    cy.get('input[type="checkbox"]').should('exist');
    cy.get('label').should('contain', 'Показати пароль');
  });

  it('disables the submit button when loading', () => {
    cy.get('button[type="submit"]').as('submitButton');
    cy.get('@submitButton').should('not.be.disabled');

    cy.get('@submitButton').click();
    cy.get('@submitButton').should('contain', 'Завантаження...').and('be.disabled');
  });

  it('shows error message when passwords do not match', () => {
    cy.get('input[type="email"]').type('test@example.com');
    cy.get('input[placeholder="Пароль"]').type('password123');
    cy.get('input[placeholder="Повторити пароль"]').type('password456');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Паролі не збігаються');
    });
  });

  it('renders error message when there is an error', () => {
    cy.get('.errorMessage').should('not.exist');

    cy.intercept('POST', '/api/register', {
      statusCode: 400,
      body: { error: 'Ця електронна адреса вже використовується' },
    }).as('registerError');

    cy.get('input[type="email"]').type('usedemail@example.com');
    cy.get('input[placeholder="Пароль"]').type('password123');
    cy.get('input[placeholder="Повторити пароль"]').type('password123');
    cy.get('button[type="submit"]').click();

    cy.wait('@registerError');
    cy.get('.errorMessage').should('contain', 'Ця електронна адреса вже використовується');
  });
});
