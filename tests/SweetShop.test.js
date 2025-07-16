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
});
