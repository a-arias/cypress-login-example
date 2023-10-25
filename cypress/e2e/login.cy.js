describe('login functionality', () => {
    beforeEach(() => {
        cy.visit('/practice-test-login');
      })
    it('should be able to login with correct credentials', () => {
        //#using cypress fixtures to get user and password info.
        cy.fixture("users").then((fixtureData) => {
            const username = fixtureData.username;
            const password = fixtureData.password;

            cy.get('#username').type(username);
            cy.get('#password').type(password);
            cy.get('#submit').click();

            cy.get('h1.post-title').should('have.text', 'Logged In Successfully');
        })
    })
    it('should not be able to login with incorrect username', () => {
        //#using cypress custom command to login.
        cy.login('incorrectUser','Password123');

        cy.get('div#error').should('have.text', 'Your username is invalid!');
    })
    it('should not be able to login with incorrect password', () => {
        //#using cypress custom command to login.
        cy.login('student','incorrectPassword');

        cy.get('div#error').should('have.text', 'Your password is invalid!');
    })
  })
