class SweetShop {
  constructor() {
    //invoking the constructor method for adding sweets in empty array
    this.sweets = [];
  }

  //addsweets method that adds the sweet in static array
  addSweets(sweet) {
    const requiredField = ["id", "name", "category", "price", "quantity"];
    for (const field of requiredField) {
      if (sweet[field] === undefined || sweet[field] === null) {
        throw new Error("Missing required field");
      }
    }
    if (sweet.price <= 0) {
      throw new Error("invalid price");
    }
    if (sweet.quantity <= 0) {
      throw new Error("invalid quantity");
    }
    const duplicate = this.sweets.find(s => s.id === sweet.id);
    if (duplicate) {
      throw new Error("sweet this id already exists");
    }
    this.sweets.push(sweet);
  }

  //view sweets method for viewing the current sweet array
  viewSweets() {
    return this.sweets;
  }

  //delete sweet functionality
  deleteSweet(id) {
    const index = this.sweets.findIndex(s => s.id === id);

    if (index === -1) {
      throw new Error("Sweet not found");
    }
    this.sweets.splice(index, 1);
  }

  //search sweet
  searchSweet({ name, category, minPrice, maxPrice }) {
    return this.sweets.filter(sweet => {
      if (name && !sweet.name.toLowerCase().includes(name.toLowerCase())) {
        return false;
      }
      if (category && sweet.category !== category) {
        return false;
      }
      if (minPrice !== undefined && sweet.price < minPrice) {
        return false;
      }
      if (maxPrice !== undefined && sweet.price > maxPrice) {
        return false;
      }

      return true;
    });
  }

  purchase(id, qty) {
    const sweet = this.sweets.find(s => s.id === id);
    if (!sweet) {
      throw new Error("Sweet not found");
    }
    if (qty > sweet.quantity) {
      throw new Error("Not enough stock");
    }
    sweet.quantity -= qty;
  }

  restock(id, qty) {
    const sweet = this.sweets.find(s => s.id === id);
    if (!sweet) {
      throw new Error("Sweet not found");
    }
    sweet.quantity += qty;
  }
}
//exporting for accessibilty by test folder
module.exports = SweetShop;
