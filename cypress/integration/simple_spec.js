describe('Los estudiantes login', function() {
    beforeEach(function(){
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();
    });


    it('Fails at login', function() {
        cy.contains('Ingresar').click();
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("wrongemail@example.com");
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234");
        cy.get('.cajaLogIn').contains('Ingresar').click();
        cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.');
        cy.wait(2000);
    });

    it('Create acount', function() {
        cy.contains('Ingresar').click();
        cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Jorge");
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Rubiano");
        cy.get('.cajaSignUp').find('input[name="correo"]').click().type("jh.rubiano10@uniandes.edu.co");
        cy.get('.cajaSignUp').find('select[name=idDepartamento]').select('3');
        cy.get('.cajaSignUp').find('input[name="password"]').click().type("123456");
        cy.get('.cajaSignUp').find('input[name="acepta"]').click();
        cy.get('.cajaSignUp').contains('Registrarse').click();
        cy.wait(2000);
    });
    
    
    it('Search Teacher - Go to Page', function() {
        cy.get(".buscador").find(".Select").click();
        cy.get(".buscador").find('input[role="combobox"]').type("Jorge");
        cy.wait(2000);
        cy.get(".buscador").find('input[role="combobox"]').type('{downarrow}{downarrow}{enter}');
        cy.wait(2000);
    });
    

    it('Filter courses', function() {
        cy.visit('https://losestudiantes.co/universidad-de-los-andes/derecho/profesores/juan-francisco-ortega-diaz');
        cy.get(".materias").find('[type="checkbox"]').first().check();
        cy.wait(3000);
        cy.get(".materias").find('[type="checkbox"]').first().uncheck();
        cy.wait(3000);
    });
});