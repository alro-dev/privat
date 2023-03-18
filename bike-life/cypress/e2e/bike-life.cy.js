import 'cypress-each'

const menuItems = [
    ['comp-ihkffuqo1label', 'Portfolio'],
    ['comp-ihkffuqo2label', 'Videos'],
    ['comp-ihkffuqo3label','Offer'],
    ['comp-ihkffuqo4label', 'Contact']
]

var addressPage = 'https://alarogala.wixsite.com/bikelife'

describe('Home Page', () => {
  it('page is loaded', () => {
    cy.visit(addressPage);
    cy.url().should('include', addressPage);
    });

    it.each(menuItems)('%s page has %s header', (id, text) => {
      cy.visit(addressPage);
      cy.get("#" + id).click(); //"#comp-ihkffuqo1label"
    });

  it('buttom Get to the mood links', () => {
    //Given
    cy.visit(addressPage);
    //When 
    cy.contains('.M3I7Z2', 'GET IN THE MOOD').click();
    //Then
    cy.url().should('include', '/portfolio');
  });
  })
