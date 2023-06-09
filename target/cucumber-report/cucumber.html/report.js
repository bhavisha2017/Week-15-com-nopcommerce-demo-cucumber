$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 1,
  "name": "ComputerPage Test",
  "description": "As a user I want to arrange products and add them to shopping cart successfully",
  "id": "computerpage-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3473562600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User can arrange the products in alphabetical order",
  "description": "",
  "id": "computerpage-test;user-can-arrange-the-products-in-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on computer",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on desktop",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select sort by position Name: Z to A",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify the Product will arrange in Descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 81596900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTestSteps.iClickOnComputer()"
});
formatter.result({
  "duration": 911689800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTestSteps.iClickOnDesktop()"
});
formatter.result({
  "duration": 400287300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTestSteps.iSelectSortByPositionNameZToA()"
});
formatter.result({
  "duration": 105208400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTestSteps.verifyTheProductWillArrangeInDescendingOrder()"
});
formatter.result({
  "duration": 33700,
  "status": "passed"
});
formatter.after({
  "duration": 649803400,
  "status": "passed"
});
formatter.before({
  "duration": 1560490900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User can add the products to shopping cart successfully",
  "description": "",
  "id": "computerpage-test;user-can-add-the-products-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on computer",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on desktop",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select sort by position Name: A to Z",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "CLick on Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the Text Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I can Select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I can Select ram \"8GB [+$60.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I can Select HDD radio \"400 GB [+$100.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I can Select OS radio \"Vista Premium [+$60.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I can Select check box \"Total Commander\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify the price \"$1,475.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I can Click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify the Message \"The product has been added to your shopping cart\" on Top green Bar",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I can close the bar clicking on close button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I can MouseHover on Shopping cart and Click on GO TO CART button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I can Verify the message \"Shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I can change the Qty to \"2\" and Click on Update shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Verify the Total \"$2,950.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I can click on checkbox I agree with the terms of service",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I can click on checkout",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Verify the Text \"Welcome, Please Sign In!\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I can click on checkout as a guest tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I can fill all mandatory field",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I can click on next day air radio button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Select credit card radio button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Click on the continue",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I can select master card",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I can fill all mandatory field for payment",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Verify payment method is \"Credit Card\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Verify shipping method is \"Next Day Air\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I can click on confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I can Verify text \"Thank you\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Verify the message \"Your order has been successfully processed!\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Verify text \"Welcome to our store\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 31900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTestSteps.iClickOnComputer()"
});
formatter.result({
  "duration": 887760400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTestSteps.iClickOnDesktop()"
});
formatter.result({
  "duration": 421071700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTestSteps.iSelectSortByPositionNameAToZ()"
});
formatter.result({
  "duration": 109729300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTestSteps.clickOnAddToCart()"
});
formatter.result({
  "duration": 5062258400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTestSteps.verifyTheTextBuildYourOwnComputer()"
});
formatter.result({
  "duration": 857901000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 24
    }
  ],
  "location": "ComputerTestSteps.iCanSelectProcessor(String)"
});
formatter.result({
  "duration": 83435500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 18
    }
  ],
  "location": "ComputerTestSteps.iCanSelectRam(String)"
});
formatter.result({
  "duration": 74198200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 24
    }
  ],
  "location": "ComputerTestSteps.iCanSelectHDDRadio(String)"
});
formatter.result({
  "duration": 55620600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 23
    }
  ],
  "location": "ComputerTestSteps.iCanSelectOSRadio(String)"
});
formatter.result({
  "duration": 75547700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander",
      "offset": 24
    }
  ],
  "location": "ComputerTestSteps.iCanSelectCheckBox(String)"
});
formatter.result({
  "duration": 53869000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,475.00",
      "offset": 18
    }
  ],
  "location": "ComputerTestSteps.verifyThePrice(String)"
});
formatter.result({
  "duration": 2033234400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTestSteps.iCanClickOnAddToCartButton()"
});
formatter.result({
  "duration": 46661300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 20
    }
  ],
  "location": "ComputerTestSteps.verifyTheMessageOnTopGreenBar(String)"
});
formatter.result({
  "duration": 278473500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTestSteps.iCanCloseTheBarClickingOnCloseButton()"
});
formatter.result({
  "duration": 52638400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTestSteps.iCanMouseHoverOnShoppingCartAndClickOnGOTOCARTButton()"
});
formatter.result({
  "duration": 1544285400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 26
    }
  ],
  "location": "ComputerTestSteps.iCanVerifyTheMessage(String)"
});
formatter.result({
  "duration": 33153500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "ComputerTestSteps.iCanChangeTheQtyToAndClickOnUpdateShoppingCart(String)"
});
formatter.result({
  "duration": 544297000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,950.00",
      "offset": 18
    }
  ],
  "location": "ComputerTestSteps.verifyTheTotal(String)"
});
formatter.result({
  "duration": 33966100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTestSteps.iCanClickOnCheckboxIAgreeWithTheTermsOfService()"
});
formatter.result({
  "duration": 63182400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTestSteps.iCanClickOnCheckout()"
});
formatter.result({
  "duration": 559777400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 17
    }
  ],
  "location": "ComputerTestSteps.verifyTheText(String)"
});
formatter.result({
  "duration": 28949400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTestSteps.iCanClickOnCheckoutAsAGuestTab()"
});
formatter.result({
  "duration": 628107800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTestSteps.iCanFillAllMandatoryField()"
});
formatter.result({
  "duration": 628721700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTestSteps.iCanClickOnNextDayAirRadioButton()"
});
formatter.result({
  "duration": 318493600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTestSteps.clickOnContinue()"
});
formatter.result({
  "duration": 42052000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTestSteps.selectCreditCardRadioButton()"
});
formatter.result({
  "duration": 302006300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTestSteps.clickOnTheContinue()"
});
formatter.result({
  "duration": 46042500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTestSteps.iCanSelectMasterCard()"
});
formatter.result({
  "duration": 328695500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTestSteps.iCanFillAllMandatoryFieldForPayment()"
});
formatter.result({
  "duration": 433870600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit Card",
      "offset": 26
    }
  ],
  "location": "ComputerTestSteps.verifyPaymentMethodIs(String)"
});
formatter.result({
  "duration": 287926700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next Day Air",
      "offset": 27
    }
  ],
  "location": "ComputerTestSteps.verifyShippingMethodIs(String)"
});
formatter.result({
  "duration": 21420000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTestSteps.iCanClickOnConfirmButton()"
});
formatter.result({
  "duration": 46323600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you",
      "offset": 19
    }
  ],
  "location": "ComputerTestSteps.iCanVerifyText(String)"
});
formatter.result({
  "duration": 654837000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your order has been successfully processed!",
      "offset": 20
    }
  ],
  "location": "ComputerTestSteps.verifyTheMessage(String)"
});
formatter.result({
  "duration": 21325400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTestSteps.clickOnTheContinueButton()"
});
formatter.result({
  "duration": 328449400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to our store",
      "offset": 13
    }
  ],
  "location": "ComputerTestSteps.verifyText(String)"
});
formatter.result({
  "duration": 44083000,
  "status": "passed"
});
formatter.after({
  "duration": 696187700,
  "status": "passed"
});
formatter.uri("electronics.feature");
formatter.feature({
  "line": 1,
  "name": "Electronics Test",
  "description": "As a user I can navigate to any product page and place the order successfully",
  "id": "electronics-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1669769400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User can navigate to cell phones page successfully",
  "description": "",
  "id": "electronics-test;user-can-navigate-to-cell-phones-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I can mouse hover on electronics tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can mouse hover on cell phones and click",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I can verify the text \"Cell phones\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 44700,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iCanMouseHoverOnElectronicsTab()"
});
formatter.result({
  "duration": 160103800,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iCanMouseHoverOnCellPhonesAndClick()"
});
formatter.result({
  "duration": 464623100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 23
    }
  ],
  "location": "ElectronicsTestSteps.iCanVerifyTheText(String)"
});
formatter.result({
  "duration": 30022800,
  "status": "passed"
});
formatter.after({
  "duration": 639246100,
  "status": "passed"
});
formatter.before({
  "duration": 1923819600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User can add the product and place the order successfully",
  "description": "",
  "id": "electronics-test;user-can-add-the-product-and-place-the-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I can mouse hover on electronics tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I can mouse hover on cell phones and click",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I can verify the text \"Cell phones\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should click on list view tab",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should click on nokia lumia product",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the text \"Nokia Lumia 1020\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should verify the price \"$349.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should change the quantity to 2",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should click on add to cart tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should Verify the Message \"The product has been added to your shopping cart\" on Top green Bar",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should click on close button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should mouse hover on shopping cart and click on go to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should verify msg \"Shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should verify the quantity 2",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should verify total \"$698.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should click on the checkbox of agree terms of service",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should click on the checkout",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should verify text \"Welcome, Please Sign In!\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should click on register tab",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should verify \"Register\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should able to fill all mandatory fields",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Verify message \"Your registration completed\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should click on continue tab",
  "keyword": "And "
});
formatter.match({
  "location": "HomeTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27000,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iCanMouseHoverOnElectronicsTab()"
});
formatter.result({
  "duration": 165358600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iCanMouseHoverOnCellPhonesAndClick()"
});
formatter.result({
  "duration": 874250800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 23
    }
  ],
  "location": "ElectronicsTestSteps.iCanVerifyTheText(String)"
});
formatter.result({
  "duration": 35502600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iShouldClickOnListViewTab()"
});
formatter.result({
  "duration": 55345700,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iShouldClickOnNokiaLumiaProduct()"
});
formatter.result({
  "duration": 5821654600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia Lumia 1020",
      "offset": 17
    }
  ],
  "location": "ElectronicsTestSteps.verifyTheText(String)"
});
formatter.result({
  "duration": 53417200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$349.00",
      "offset": 27
    }
  ],
  "location": "ElectronicsTestSteps.iShouldVerifyThePrice(String)"
});
formatter.result({
  "duration": 25938700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 32
    }
  ],
  "location": "ElectronicsTestSteps.iShouldChangeTheQuantityTo(int)"
});
formatter.result({
  "duration": 145285200,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iShouldClickOnAddToCartTab()"
});
formatter.result({
  "duration": 62784000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 29
    }
  ],
  "location": "ElectronicsTestSteps.iShouldVerifyTheMessageOnTopGreenBar(String)"
});
formatter.result({
  "duration": 251502700,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iShouldClickOnCloseButton()"
});
formatter.result({
  "duration": 48558600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iShouldMouseHoverOnShoppingCartAndClickOnGoToCartButton()"
});
formatter.result({
  "duration": 1500332600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 21
    }
  ],
  "location": "ElectronicsTestSteps.iShouldVerifyMsg(String)"
});
formatter.result({
  "duration": 38558700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "ElectronicsTestSteps.iShouldVerifyTheQuantity(int)"
});
formatter.result({
  "duration": 33700100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$698.00",
      "offset": 23
    }
  ],
  "location": "ElectronicsTestSteps.iShouldVerifyTotal(String)"
});
formatter.result({
  "duration": 41688400,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iShouldClickOnTheCheckboxOfAgreeTermsOfService()"
});
formatter.result({
  "duration": 77133600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iShouldClickOnTheCheckout()"
});
formatter.result({
  "duration": 596493400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 22
    }
  ],
  "location": "ElectronicsTestSteps.iShouldVerifyText(String)"
});
formatter.result({
  "duration": 30676200,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iShouldClickOnRegisterTab()"
});
formatter.result({
  "duration": 317223500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 17
    }
  ],
  "location": "ElectronicsTestSteps.iShouldVerify(String)"
});
formatter.result({
  "duration": 41361900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iShouldAbleToFillAllMandatoryFields()"
});
formatter.result({
  "duration": 545024600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iShouldClickOnRegisterButton()"
});
formatter.result({
  "duration": 554787000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 16
    }
  ],
  "location": "ElectronicsTestSteps.verifyMessage(String)"
});
formatter.result({
  "duration": 87265600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsTestSteps.iShouldClickOnContinueTab()"
});
formatter.result({
  "duration": 329359300,
  "status": "passed"
});
formatter.after({
  "duration": 676824900,
  "status": "passed"
});
formatter.uri("homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Homepage Test",
  "description": "As a user I can navigate to various pages successfully",
  "id": "homepage-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1971351700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User can navigate to Computer page successfully",
  "description": "",
  "id": "homepage-test;user-can-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I select computers",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Computers text displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 33900,
  "status": "passed"
});
formatter.match({
  "location": "HomeTestSteps.iSelectComputers()"
});
formatter.result({
  "duration": 924718200,
  "status": "passed"
});
formatter.match({
  "location": "HomeTestSteps.computersTextDisplayed()"
});
formatter.result({
  "duration": 22716700,
  "status": "passed"
});
formatter.after({
  "duration": 638537900,
  "status": "passed"
});
formatter.before({
  "duration": 2039421400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User can navigate to Electronics page successfully",
  "description": "",
  "id": "homepage-test;user-can-navigate-to-electronics-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I select electronics",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Electronics text displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 22400,
  "status": "passed"
});
formatter.match({
  "location": "HomeTestSteps.iSelectElectronics()"
});
formatter.result({
  "duration": 910757400,
  "status": "passed"
});
formatter.match({
  "location": "HomeTestSteps.electronicsTextDisplayed()"
});
formatter.result({
  "duration": 28013000,
  "status": "passed"
});
formatter.after({
  "duration": 653524200,
  "status": "passed"
});
formatter.before({
  "duration": 1670540500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User can navigate to Apparel page successfully",
  "description": "",
  "id": "homepage-test;user-can-navigate-to-apparel-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I select apparel",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Apparel text displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 17800,
  "status": "passed"
});
formatter.match({
  "location": "HomeTestSteps.iSelectApparel()"
});
formatter.result({
  "duration": 922471000,
  "status": "passed"
});
formatter.match({
  "location": "HomeTestSteps.apparelTextDisplayed()"
});
formatter.result({
  "duration": 32599200,
  "status": "passed"
});
formatter.after({
  "duration": 664631700,
  "status": "passed"
});
});