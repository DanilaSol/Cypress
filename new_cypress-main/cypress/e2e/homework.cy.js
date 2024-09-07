describe('Тесты', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('grgrgregrgerger');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('Верный пароль и НЕверный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
        cy.get('#mail').type('еgerman@dolnikov.ru');
        cy.get('#pass').type('gegegegegegegrgrgr');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    
    it('НЕверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('gergegregergege');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('Валидация', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('gegregergergerge');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#messageHeader').should('be.visible');
    })

    it('Строчные буквы логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('igergegergregerg');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация успешна');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('e2e тест на покупку нового аватара для тренера', function () {   
        cy.visit('https://pokemonbattle.ru/');                          
        cy.get('input[type="email"]').type('sdkwwe@icloud.com');                  
        cy.get('input[type="password"]').type('gergergergegegeg');              
        cy.get('button[type="submit"]').click();                        
        cy.wait(2000);
        cy.get('.header__container > .header__id').click({ force: true }); 
        cy.get('[href="/shop"]').click();                               
        cy.get('.available > button').first().click({ force: true });   
        cy.get('.credit').type('4444 3333 2222 1111');                     
        cy.get('.k_input_ccv').type('123');                            
        cy.get('.k_input_date').type('1224');                           
        cy.get('.k_input_name').type('NAME');                          
        cy.get('.pay-btn').click();                                 
        cy.get('#cardnumber').type('56456');                         
        cy.get('.payment__submit-button').click();                      
        cy.contains('Покупка прошла успешно').should('be.visible');     
    });
})