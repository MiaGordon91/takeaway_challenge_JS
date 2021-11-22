describe('Menu', function() {

  'use strict';

  let menu;

  beforeEach(() => {
    menu = new Menu();
  });

  it('there are menu items', () => {
    expect(menu.menuItems()).toEqual(['chips - £1.50', 'fish - £3.20', 'pukka pie - £2.00']);
  });

});