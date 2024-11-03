import React from 'react';
import AboutZone from './AboutZone';

describe('AboutZone Component', () => {
  beforeEach(() => {
    cy.mount(<AboutZone />);
  });

  it('renders header image with correct alt text', () => {
    cy.get('img.headerImage')
      .should('have.attr', 'src')
      .and('include', 'header-image.jpg');
    cy.get('img.headerImage')
      .should('have.attr', 'alt', 'Abandoned room in the exclusion zone');
  });

  it('renders title correctly', () => {
    cy.get('h1').should('contain', 'Все про зону');
  });

  it('renders worker image with correct alt text', () => {
    cy.get('img.workerImage')
      .should('have.attr', 'src')
      .and('include', 'worker-image.jpg');
    cy.get('img.workerImage')
      .should('have.attr', 'alt', 'Worker in protective suit near reactor');
  });

  it('renders all paragraphs with expected text', () => {
    cy.get('p').eq(0).should('contain', 'Населення з забруднених територій було евакуйовано');
    cy.get('p').eq(1).should('contain', 'Одним з факторів радіоактивного забруднення стали випари радіоактивних елементів');
    cy.get('p').eq(2).should('contain', 'В результаті природних процесів, а також цілеспрямованої діяльності спеціальних команд');
  });
});
