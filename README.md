# zwinger-product-search-tests

After clonning this repository, please go to root directory of project and run
```
npm install
```

Then you can open Cypress GUI interface
```
./node_modules/.bin/cypress open
```
You will see the tests files.

Or just run all tests. If you want to see execution, please, add ```--headed``` flag.
```
./node_modules/.bin/cypress run --headed
```

Here are the test suites

| Test case name | Wich cypress test check this |  |
| ------ | ------ | ------ |
| Check the suggesting positive | Suggest correct product |  |
| Check the suggesting negative | Search for something what`s not exists |  |
| Search for something by one word positive | Search product by one word with exactly the same as presented |  |
| Search for something by two words positive | Search product by two words |  |
| Search product by two words when only one is valid | Search product by two words when only one is valid |  |
| Search for something what's not exists | Search for something what's not exists |  | 
| Search should work globally | Search from categories page (should work globally) |  | 
| Check case sensitivity | Search product by one word with lower case |  | 
|  | Search product by one word with upper case |  |
| Search by minimum count of letters | Search product by one word with not entire word |  | 
| Search with a typo | Search product by one word with typo |  |
| Extra spaces before text | Search product by one word with extra spaces before word |  |
| Search by only spaces | Fill the field by spaces | receives bad request with error code 400 |
| Check the upper bound of symbols in field | Search product by description with more than 200 symbols |  |
| Search by description | Search product by description with more than 200 symbols |  |
| Search by keywords | Search product by keyword |  |
| Search by essential features | Search product by essential features |  |
| Search product with special symbols | Search product with special symbols |  |
| Search product by product name with special symbol | Search product by product name with special symbol |  |
