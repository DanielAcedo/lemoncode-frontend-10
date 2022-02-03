const employeeRoute = '/employees';

describe('Employee page test', () => {
  it('visit employee page', () => {
    cy.visit(employeeRoute);
  });

  it('employee table loads 5 results', () => {
    // Arrange
    cy.visit(employeeRoute);

    // Act

    // Assert
    cy.findByRole('table').get('tbody').findAllByRole('row').as('rows');
    cy.get('@rows').should('have.length', 5);
  });

  it('typing employee name in search box filter results', () => {
    // Arrange
    cy.visit(employeeRoute);

    // Act
    cy.findByRole('textbox').as('searchTextBox');
    cy.get('@searchTextBox').type('Daniel');

    // Assert
    cy.findByRole('table').get('tbody').findAllByRole('row').as('rows');

    cy.get('@rows').should('have.length', 1);
    cy.get('@rows').findByText('Daniel Perez').should('exist');
  });

  it('click "New empleado" navigates to edit screen', () => {
    // Arrange
    cy.visit(employeeRoute);

    // Act
    cy.findByText('Nuevo empleado').click();

    // Assert
    cy.url().should('eq', Cypress.config().baseUrl + '/employees/0');
  });

  it('click edit navigates to edit screen', () => {
    // Arrange
    cy.visit(employeeRoute);
    cy.findByRole('table').get('tbody').findAllByRole('row').as('rows');

    // Act
    cy.get('@rows')
      .findByText('Daniel Perez')
      .prev()
      .invoke('text')
      .then((id) => {
        cy.get('@rows')
          .findByText('Daniel Perez')
          .parent()
          .findByRole('button', { name: 'edit employee' })
          .click();

        // Assert
        cy.url().should('eq', Cypress.config().baseUrl + `/employees/${id}`);
      });
  });
});
