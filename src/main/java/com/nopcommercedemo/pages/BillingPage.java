package com.nopcommercedemo.pages;

import com.nopcommercedemo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BillingPage extends Utility {
    private static final Logger log = LogManager.getLogger(BillingPage.class.getName());

    public BillingPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(id = "BillingNewAddress_CountryId")
    WebElement country;

    @CacheLookup
    @FindBy(id = "BillingNewAddress_City")
    WebElement city;

    @CacheLookup
    @FindBy(id = "BillingNewAddress_Address1")
    WebElement address;

    @CacheLookup
    @FindBy(id = "BillingNewAddress_ZipPostalCode")
    WebElement postCode;

    @CacheLookup
    @FindBy(id = "BillingNewAddress_PhoneNumber")
    WebElement phoneNumber;

    @CacheLookup
    @FindBy(xpath = "//div/button[4]")
    WebElement continueButton;


    public void fillDeliveryAddressFields() {

        log.info("Select country" + country.toString());
        selectByVisibleTextFromDropDown(country, "United Kingdom");
        log.info("Select city" + city.toString());
        sendTextToElement(city, "Dunstable");
        log.info("Enter address" + address.toString());
        sendTextToElement(address, "123 Leaf Road");
        log.info("Enter postcode" + postCode.toString());
        sendTextToElement(postCode, "LU5 5JQ");
        log.info("Enter phone number" + phoneNumber.toString());
        sendTextToElement(phoneNumber, "01224 567790");
    }

    public void clickOnContinueButton() {
        log.info("Click on continue button" + continueButton.toString());
        clickOnElement(continueButton);
    }
}
