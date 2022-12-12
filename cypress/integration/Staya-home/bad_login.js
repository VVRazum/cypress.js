describe('Проверка формы логина', function () {

it('Негативный кейс: неверный логин, неверный пароль', function () {
    cy.visit('https://staya.dog/');
    cy.get('.header-bottom__right--link').click();
    cy.get('.auth-form > form > [type="email"]').type('test@internet.ru');
    cy.get('.auth-form > form > [type="password"]').type('Spasss32');
    cy.get('.auth-form__submit > .s-button__content').click();
    cy.contains('Невозможно войти с предоставленными учетными данными');
})
})