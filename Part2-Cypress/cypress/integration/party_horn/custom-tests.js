describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then($el => { expect($el).to.have.value(75); });
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val',33).trigger('input');
    cy.get('#volume-number').then($el => { expect($el).to.have.value(33); });
  });

  it('Volume of audio changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val',33).trigger('input');
    cy.get('#horn-sound').then($el => { expect($el).to.have.prop('volume',.33); });
  });

  it('Image source changes when party horn radio is selected', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then($el => { expect($el).to.have.attr('src','./assets/media/images/party-horn.svg'); });
  });

  it('Sound source changes when party horn radio is selected', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#horn-sound').then($el => { expect($el).to.have.attr('src','./assets/media/audio/party-horn.mp3'); });
  });

  it('Volume image changes to 0 when changing volume', () =>{
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then($el => { expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg'); });
  });

  it('Volume image changes to 1 when changing volume', () =>{
    cy.get('#volume-number').clear().type('25');
    cy.get('#volume-image').then($el => { expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg'); });
  });

  it('Volume image changes to 2 when changing volume', () =>{
    cy.get('#volume-number').clear().type('50');
    cy.get('#volume-image').then($el => { expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg'); });
  });

  it('Volume image changes to 3 when changing volume', () =>{
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-image').then($el => { expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg'); });
  });

  it('Honk button is disabled when textbox input is empty', () =>{
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then($el => { expect($el).to.be.disabled; });
  });

  it('Honk button is disabled when textbox input is a non-number', () =>{
    cy.get('#volume-number').clear().type('hi');
    cy.get('#honk-btn').then($el => { expect($el).to.be.disabled; });
  });

  it('Error is shown when textbox input is outside valid range', () =>{
    cy.get('#volume-number').clear().type('120');
    cy.get('#honk-btn').click();
    cy.get('#volume-number').then($el => {expect($el).to.match(':invalid') });
  });

});
