// cypress/component/Contacts.cy.js

import React from 'react';
import Contacts from './Contacts';

describe('Contacts Component', () => {
  beforeEach(() => {
    cy.mount(<Contacts />);
  });

  it('renders contact images with correct alt texts', () => {
    cy.get('img[alt="WhatsApp"]')
      .should('exist')
      .and('have.attr', 'src')
      .and('include', 'whatsapp.png');

    cy.get('img[alt="InФstagram"]')
      .should('exist')
      .and('have.attr', 'src')
      .and('include', 'instagram.png');

    cy.get('img[alt="Telegram"]')
      .should('exist')
      .and('have.attr', 'src')
      .and('include', 'telegram.png');

    cy.get('img[alt="Facebook"]')
      .should('exist')
      .and('have.attr', 'src')
      .and('include', 'facebook.png');

    cy.get('img[alt="Gmail"]')
      .should('exist')
      .and('have.attr', 'src')
      .and('include', 'gmail.png');
  });

  it('renders contact information correctly', () => {
    cy.get('.contactItem').eq(0).should('contain', '+380995210251');
    cy.get('.contactItem').eq(1).should('contain', '@Chernobyl Expeditions');
    cy.get('.contactItem').eq(2).should('contain', '@Chernobyl Expeditions');
    cy.get('.contactItem').eq(3).should('contain', 'Chernobyl Expeditions');
    cy.get('.contactItem').eq(4).should('contain', 'ChernobylExpeditions@gmail.com');
  });

  it('renders contact image with correct alt text', () => {
    cy.get('img.contactImage')
      .should('have.attr', 'src')
      .and('include', 'Contacts.jpg');
      
    cy.get('img.contactImage')
      .should('have.attr', 'alt', 'Chernobyl Expedition');
  });
});
