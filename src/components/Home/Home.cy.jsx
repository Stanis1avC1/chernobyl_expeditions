import React from 'react';
import Home from './Home';
import { MemoryRouter } from 'react-router-dom';

describe('Home Component', () => {
  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });

  it('renders the banner image with correct alt text', () => {
    cy.get('.bannerImage')
      .should('have.attr', 'src')
      .and('include', 'home.jpg');

    cy.get('.bannerImage')
      .should('have.attr', 'alt', 'Home');
  });

  it('renders the statistics section correctly', () => {
    cy.get('.statItem').eq(0).find('.statNumber').should('contain', '99999');
    cy.get('.statItem').eq(1).find('.statNumber').should('contain', '1');
    cy.get('.statItem').eq(2).find('.statNumber').should('contain', '100');

    cy.get('.statItem').eq(0).should('contain', 'туристів в рік');
    cy.get('.statImageContainer').find('img.statImage').should('have.attr', 'src').and('include', 'phoneIcon.jpg');
    cy.get('.statItem').eq(1).should('contain', 'з екстремальних місць планети');
    cy.get('.statItem').eq(2).should('contain', '% безпечно та легально');
  });

  it('renders the Pripyat image with correct alt text', () => {
    cy.get('.pripyatImage')
      .should('have.attr', 'src')
      .and('include', 'pripyatImage.jpg');

    cy.get('.pripyatImage')
      .should('have.attr', 'alt', 'Pripyat');
  });

  it('renders team members images with correct alt texts', () => {
    cy.get('.teamMember').eq(0).find('img').should('have.attr', 'alt', 'Команда 1');
    cy.get('.teamMember').eq(1).find('img').should('have.attr', 'alt', 'Команда 2');
    cy.get('.teamMember').eq(2).find('img').should('have.attr', 'alt', 'Команда 3');
    cy.get('.teamMember').eq(3).find('img').should('have.attr', 'alt', 'Команда 4');
  });

  it('renders the button with correct text', () => {
    cy.get('.moreButton').should('contain', 'Більше про нас');
  });
});
