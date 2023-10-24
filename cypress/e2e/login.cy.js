describe('login functionality', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
      })
    it('should not be able to login with incorrect credentials', () => {
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("wrong password")
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user in this service')
    })
    it('should be able to login with standard user', () => {
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click();

        cy.url().should('include', '/inventory.html')
        cy.get('span.title').should('contain', 'Products')
    })
  })
