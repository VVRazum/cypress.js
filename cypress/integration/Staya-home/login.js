describe('Проверка формы логина', function () {

    it('Позитивный кейс: верный логин, верный пароль', function () {
         cy.visit('https://staya.dog/');
         cy.get('.header-bottom__right--link').click();
         cy.get('.auth-form > form > [type="email"]').type('spamov@internet.ru');
         cy.get('.auth-form > form > [type="password"]').type('Spam_qa2');
         cy.get('.auth-form__submit > .s-button__content').click();
         cy.contains('Мои заказы');
                               })
            })

      