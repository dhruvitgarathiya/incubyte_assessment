sweet management shop system

here's simple sweet management shop system built with javascript
using
test driven development
with the help of jest library provided by npm.

i have primarly used chatgpt for learning how to work with jest and apply test driven development
using jest.

i have mainly used javascript for writing classes and regarding functions to perform the below operation

1. add sweets
   Wrote test to add a valid sweet
   Wrote test to handle:
   Negative price
   Zero/negative quantity
   Missing fields
   Duplicate ID
   Implemented feature to pass all tests
   Committed and pushed

2. delete sweets
   Wrote test to delete a sweet by ID
   Wrote test to handle invalid ID (sweet not found)
   Implemented `deleteSweet(id)` to pass tests
   Committed and pushed

3. view sweets
   Wrote test to check initial empty state of sweet shop
   Wrote test to verify all added sweets are returned
   Implemented `viewSweets()` method to return the sweets array
   All test cases passed and feature committed

4. search and filter sweets
   Wrote test cases for:
   Name (case-insensitive)
   Category
   Price range
   Implemented `searchSweet()` with flexible filter support
   Committed and pushed

5. purchase sweet

6. increase and decrease the quantity of sweets
