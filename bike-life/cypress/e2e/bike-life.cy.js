import 'cypress-each'

const menuItems = [
    ['comp-ihkffuqo1label', 'Portfolio'],
    ['comp-ihkffuqo2label', 'Videos'],
    ['comp-ihkffuqo3label','Offer'],
    ['comp-ihkffuqo4label', 'Contact']
]

describe('Home Page', () => {
  it('page is loaded', () => {
    var addressPage = 'https://alarogala.wixsite.com/bikelife'
    cy.visit(addressPage);
    cy.url().should('include', addressPage);
    });

    it.each(menuItems)('%s page has %s header', (id, text) => {
      var addressPage = 'https://alarogala.wixsite.com/bikelife';
      cy.visit(addressPage);
      cy.get("#" + id).click(); //"#comp-ihkffuqo1label"
    })
  })