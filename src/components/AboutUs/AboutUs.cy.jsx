// cypress/component/AboutUs.cy.js

import React from 'react';
import AboutUs from './AboutUs';

describe('AboutUs Component', () => {
  beforeEach(() => {
    cy.mount(<AboutUs />);
  });

  it('renders header image with correct alt text', () => {
    cy.get('img')
      .first()
      .should('have.attr', 'src')
      .and('include', 'header.jpg');
    cy.get('img')
      .first()
      .should('have.attr', 'alt', 'Sculpture of firefighters');
  });

  it('renders title correctly', () => {
    cy.get('h1').should('contain', 'Про нас');
  });

  it('renders group images with correct alt texts', () => {
    cy.get('img[alt="Group photo 1"]').should('exist');
    cy.get('img[alt="Group photo 2"]').should('exist');
  });

  it('renders all paragraphs with expected text', () => {
    cy.get('p').eq(0).should('contain', 'Ми — команда професіоналів');
    cy.get('p').eq(1).should('contain', 'Наші гіди');
    cy.get('p').eq(2).should('contain', 'Наша компанія прагне');
    cy.get('p').eq(3).should('contain', 'Наші тури — це більше, ніж просто подорожі');
    cy.get('p').eq(4).should('contain', 'Долучайтеся до нас у подорож');
  });
});
