class SweetShop {
  constructor() {
    //invoking the constructor method for adding sweets in empty array
    this.sweets = [];
  }

  //addsweets method that adds the sweet in static array
  addSweets(sweet) {
    if (sweet.price <= 0) {
      throw new Error("invalid price");
    }
    if (sweet.quantity <= 0) {
      throw new Error("invalid quantity");
    }
    this.sweets.push(sweet);
  }

  //view sweets method for viewing the current sweet array
  viewSweets() {
    return this.sweets;
  }
}

//exporting for accessibilty by test folder
module.exports = SweetShop;
