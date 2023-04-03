describe('SignUp', () => {
  beforeEach(() => cy.visit('/sign-up'));

  it('should have minimal required info for sign-up', () => {
    cy.get('header');
    cy.get('.sign-up');
    cy.get('.sign-up__form');
    cy.get('.sign-up-form__title');
    cy.get('.sign-up-form__radios');
    cy.get('.sign-up-form__birth-field');
    cy.get('.sign-up-form__fields');
    cy.get('.sign-up-form__toggle');
    cy.get('.sign-up-form__submit-button');
    cy.get('.sign-up-form__info');
    cy.get('footer');
  });

  it(`user get error messages if he enter not correct data`, () => {
    cy.get('[placeholder="Имя"]').type('u').should('have.value', 'u');
    cy.get('[placeholder="Фамилия"]').type('u').should('have.value', 'u');

    cy.contains('Женщина').click();

    cy.get('[value="woman"].radio__input').should('be.checked');

    cy.get('[name="birthdate"]')
      .type('11.11.1111')
      .should('have.value', '11.11.1111');

    cy.get('.sign-up-form [placeholder="Email"]')
      .type('111')
      .should('have.value', '111');
    cy.get('[name="password"]').type('111').should('have.value', '111');

    cy.get('.toggle__slider').click();
    cy.get('[name="special"]').should('be.checked');

    cy.get('.submit-button').click();

    cy.contains('Фамилия должна содержать не менее 2 символов');
    cy.contains('Имя должно содержать не менее 2 символов');
    cy.contains('Вы должны быть моложе 100 лет');
    cy.contains(
      `Пароль должен содержать 8 символов, один символ верхнего регистра, один символ нижнего регистра, одну цифру и один символ специального регистра.`
    );
  });

  it(`user sign up if he enter correct data`, () => {
    cy.get('[placeholder="Имя"]').type('User').should('have.value', 'User');
    cy.get('[placeholder="Фамилия"]').type('User').should('have.value', 'User');

    cy.get('[name="birthdate"]')
      .type('01.01.1990')
      .should('have.value', '01.01.1990');

    cy.get('.sign-up-form [placeholder="Email"]')
      .type('user@user.user')
      .should('have.value', 'user@user.user');
    cy.get('[name="password"]')
      .type('User1234!')
      .should('have.value', 'User1234!');

    cy.get('.submit-button').click();
    cy.contains('Идёт регистрация...');
  });

  it('should be redirect from sign-up when user is auth', () => {
    cy.visit('/sign-up', {
      onBeforeLoad(win) {
        win.localStorage.setItem('userId', '111');
        win.localStorage.setItem('userName', 'User');
        win.localStorage.setItem('userSurname', 'User');
        win.localStorage.setItem('token', '111');
        win.localStorage.setItem('isAuth', 'true');
        win.localStorage.setItem('refreshToken', '123');
      },
    });
    cy.url().should('include', '/');
  });
});
