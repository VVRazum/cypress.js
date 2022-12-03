describe('Проверка формы логина', function () {

    it('Позитивный кейс: верный логин, верный пароль', function () {
         cy.visit('https://staya.dog/');
         cy.get('.header-bottom__right--link').click();
         cy.get('.auth-form > form > [type="email"]').type('spamov@internet.ru');
         cy.get('.auth-form > form > [type="password"]').type('Spam_qa2');
         cy.get('.auth-form__submit > .s-button__content').click();
         cy.contains('Мои заказы');
      
             })

             it('Негативный кейс: неверный логин, неверный пароль', function () {
                cy.visit('https://staya.dog/');
                cy.get('.header-bottom__right--link').click();
                cy.get('button.profile__nav-link').click();
                cy.get('.box__button_ok > .s-button__content').click();
                cy.get('.header-bottom__right--link').click();
                cy.get('.auth-form > form > [type="email"]').type('test@internet.ru');
                cy.get('.auth-form > form > [type="password"]').type('Spasss32');
                cy.get('.auth-form__submit > .s-button__content').click();
                cy.contains('Невозможно войти с предоставленными учетными данными');
            })
        })