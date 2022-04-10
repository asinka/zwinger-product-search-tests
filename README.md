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

| Test case name | Result and notes | Steps |
| ------ | ------ | ------ |
| Suggest correct product | OK | 1. Fill the search field by existing product name <br> 2. Wait for suggesting <br> 3. Check the suggest will show correct product |
| Search for something what`s not exists | OK | 1. Write in search field product name which doesn't exists and press Enter <br> 2. Check that nothing founded |
| Search product by one word with exactly the same as presented | OK | 1. Write in search field one word from product name as it presented at site case sensitive and press Enter<br> 2. Check that application founds correct product |
| Search product by two words | OK | 1. Write in search field two words from product name and press Enter <br> 2. Check that first product name in search result contains the both words |
| Search product by two words when only one is valid | OK | 1. Write in search field two words (where one is not presented at products list) from product name and press Enter <br> 2. Check the first product name contains at least one word |
| Search from categories page (should work globally) | OK | 1. Go to the category page <br> 2. Write in search fild the product name wich not presented at this page <br> 3. Check if the product is found |
| Search product by one word with lower case | OK | 1. Write in search field product name by lower case and press Enter <br> 2. Check that application founds correct product |
| Search product by one word with upper case | OK | 1. Write in search field product name by upper case and press Enter <br> 2. Check that application founds correct product |
| Search product by one word with not entire word | OK |  1. Write in search field two letters of product name <br> 2. Check that application founds correct product |
| Search product by one word with typo | OK | 1. Write in search field existing product name with typo <br> 2. Check that application founds correct product |
| Search product by one word with extra spaces before word | OK |  1. Write in search field existing product name with extra spaces before word <br> 2. Check that application founds correct product |
| Fill the field by spaces | Actyally OK, but receives bad request with error code 400 | 1. Write in search only spaces <br> 2. Check if application doesn't react to this request |
| Search product by description with more than 200 symbols | OK | 1. Write to search field fully description of product and press Enter <br> 2. Check if site doesn't fail with long string request <br> 3. Check that application founds correct product | 
| Search product by keyword | OK | 1. Write in search field the keyword of product <br> 2. Check that application founds correct product |
| Search product by essential features | OK |  1. Write in search field the essential feature of product <br> 2. Check that application founds correct product |
| Check the app doesn't fail with special symbols | OK | 1. Write to search special symbols and press Enter <br> 2. Check if site doesn't fail with after this request and shows correct message |
| Search product with special symbols | Fails with some symbols. I think the application should remove special characters from searchString. It works with '?' but doesn't work with '!' | 1. Write to search correct product name with special symbols and press Enter <br> 2. Check that application remove special symbols and shows correct products |

I usually run cypress test with Chrome and watch how it looks. In addition, I would manually check scenarios "Search product by one word with exactly the same as presented" and "Search for something what`s not exists" in other browsers (FireFox, Safari, IE/Edge, desktop and mobile versions or emulators) to see that everything looks good. I don't think it's needed to execute all functional scenarios at all browsers because logic is not depends on browsers.
