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

| Test case name | Result and notes |
| ------ | ------ |
| Suggest correct product | OK |
| Search for something what`s not exists | OK |
| Search product by one word with exactly the same as presented | OK |
| Search product by two words | OK |
| Search product by two words when only one is valid | OK |
| Search for something what's not exists | OK | 
| Search from categories page (should work globally) | OK |
| Search product by one word with lower case | OK | 
| Search product by one word with upper case | OK |
| Search product by one word with not entire word | OK | 
| Search product by one word with typo | OK |
| Search product by one word with extra spaces before word | OK |
| Fill the field by spaces | Actyally OK, but receives bad request with error code 400 |
| Search product by description with more than 200 symbols | OK |
| Search product by keyword | OK |
| Search product by essential features | OK |
| Check the app doesn't fail with special symbols | OK |
| Search product with special symbols | Fails with some symbols. I think the application should remove special characters from searchString. It works with '?' but doesn't work with '!' |
