describe('Menu', function() {

  'use strict';

  let menu;

  beforeEach(() => {
    menu = new Menu();
  });

  it('displays menu', () => {
    expect(menu.menuItems()).toEqual('Chips - £1.50, Fish - £3.20, Pukka Pie - £2.00');
  });

});