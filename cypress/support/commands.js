import { faker } from '@faker-js/faker';

Cypress.Commands.add('selectRandomOption', { prevSubject: true }, (subject) => {
    cy.wrap(subject).find('.sc-cVLQNM > .sc-ktaQEB').then(($options) => {
      const randomIndex = Cypress._.random(1, $options.length);
      cy.get($options).contains($options[randomIndex].innerHTML).click()
    });
  });
  
  Cypress.Commands.add('enterRandomSearchTerm', { prevSubject: true }, (subject) => {
    const randomSearchTerm = faker.random.words(Cypress._.random(1, 3));
    cy.wrap(subject).type(randomSearchTerm);
  });

  