//starting of my project

// as i am writing test cases for my assesment

// first will be the add sweet test case

/* as i have read about the test drvien development 

first we have to write test cases that check the funcationality which we want to implement then we will run the test cases as it will fail obviously as we have not implemented the functionality yet

but then we will write the code for functionality and then we will run the test as it will pass the test case that how tdd works as per my knowledge

*/

//so here is the first add sweets test case

//exporting the sweetshop accesing the functions
const SweetShop = require("../src/SweetShop");

//test function
describe("sweet shop - add sweet", () => {
  let shop;

  beforeEach(() => {
    //making instance of sweetShop class
    shop = new SweetShop();
  });

  test("should add new item to list ", () => {
    //testing addsweet funcationality by adding sweet
    shop.addSweets({
      id: 1,
      name: "gulab jambu",
      category: "made with chasni",
      price: 50,
      quantity: 10,
    });

    //more of the part of viewSweets testing but here it is necessary to add
    const sweet = shop.viewSweets();

    //checking if added sweet we can see or not
    expect(sweet.length).toBe(1);

    // double checking for better checking
    expect(sweet[0].name).toBe("gulab jambu");
  });

  // i had ran the test case and it was failed due to not implementing the funcationality , now i am gonna write the code for functionality
  //code succesfully written and excuted and tested.

  //now my basic test case have been passed now i can add validation that price should not be negative.
  test("price should not be negative", () => {
    expect(() => {
      shop.addSweets({
        id: 2,
        name: "rasmalai",
        category: "fake",
        price: -10,
        quantity: 2,
      });
    }).toThrow("invalid price");
  });

  //test code run succesfully and failed , now i will write code that will statisfy this conditions
  // written the code for this and test case passed succesfully.

  //now i will write the code for test case for qunatity should not be negative
  test("quantity should not be negative and zero", () => {
    expect(() => {
      shop.addSweets({
        id: 3,
        name: "penda",
        category: "fake",
        price: 200,
        quantity: 0,
      });
    }).toThrow("invalid quantity");
  });
  //succesfully ran the code and it failed , now will write the code that make this functionality possible
  //implemented this function , test case passed now moving to next

  //now we will implement the logic for preventing duplicat id's
  test("duplicates id's are not", () => {
    shop.addSweets({
      id: 4,
      name: "shahi churma",
      category: "fake",
      price: 230,
      quantity: 2,
    });

    expect(() => {
      shop.addSweets({
        id: 4,
        name: "mamra na ladva",
        category: "fake",
        price: 234,
        quantity: 3,
      });
    }).toThrow("sweet this id already exists");
  });
  //ran the test case and failed succesfully
  //implemented the function , test cases passed

  //test case for missing field checking
  test("missing field required", () => {
    expect(() => {
      shop.addSweets({
        id: 5,
        name: "kaju katri",
        category: "fake",
        quantity: 455,
      });
    }).toThrow("Missing required field");
  });
  //code ran succesfully, test case failed
  //feature implemented , test case passed

  //viewsweet testcase that if list is empty return empty list
  test("if sweet shop is empty return empty list", () => {
    const sweets = shop.viewSweets();
    expect(sweets).toEqual([]);
  });

  //added item should be visible in sweet cart
  test("should return all the list that have been", () => {
    shop.addSweets({
      id: 1,
      name: "kaju-katri",
      category: "fake",
      price: 220,
      quantity: 3,
    });

    const sweets = shop.viewSweets();

    expect(sweets.length).toBe(1);
    expect(sweets[0].name).toBe("kaju-katri");
    //test case ran and test failed
    //test cases passed
  });
});

//here is delete sweet test cases

describe("sweet shop- delete sweet", () => {
  //adding the items to cart
  let shop;
  beforeEach(() => {
    shop = new SweetShop();
    shop.addSweets({
      id: 20,
      name: "rasgulla",
      category: "milk -based",
      price: 20,
      quantity: 20,
    });
  });

  test("should delete sweet by id", () => {
    shop.deleteSweet(20);
    const sweets = shop.viewSweets();
    expect(sweets.length).toBe(0);
  });

  test("should throw error if sweet id not found", () => {
    expect(() => {
      shop.deleteSweet(99);
    }).toThrow("Sweet not found");
  });
});

describe("sweet shop - search sweets", () => {
  let shop;

  beforeEach(() => {
    shop = new SweetShop();

    shop.addSweets({
      id: 1,
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 50,
      quantity: 10,
    });
    shop.addSweets({
      id: 2,
      name: "Gulab Jamun",
      category: "Milk-Based",
      price: 30,
      quantity: 20,
    });
    shop.addSweets({
      id: 3,
      name: "Peda",
      category: "Milk-Based",
      price: 20,
      quantity: 15,
    });
  });

  test("should search sweets by name", () => {
    const result = shop.searchSweet({ name: "gulab" });
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Gulab Jamun");
  });

  test("should search sweets by category", () => {
    const result = shop.searchSweet({ category: "Milk-Based" });
    expect(result.length).toBe(2);
  });

  test("should search sweets by price range", () => {
    const result = shop.searchSweet({ minPrice: 25, maxPrice: 40 });
    expect(result.length).toBe(2); // Gulab Jamun and Peda
  });
});
