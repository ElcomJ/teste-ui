describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um item da lista', () => {
        cy.get('[class="product-block grid"]')
            // .first()
            // .last()
            // .eq(3)
            .contains('Aether Gym Pant')
            .click()
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        let quantity = 10;

        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie')
            .click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantity)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantity)
        cy.get('.woocommerce-message').should('contain', quantity + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });

});