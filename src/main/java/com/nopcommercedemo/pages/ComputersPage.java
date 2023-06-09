package com.nopcommercedemo.pages;

import com.nopcommercedemo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ComputersPage extends Utility {
    private static final Logger log = LogManager.getLogger(ComputersPage.class.getName());
    public ComputersPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//img[@alt='Picture for category Desktops']")
    WebElement desktops;

    public void clickOnDesktops() {
        log.info("Click on desktops" + desktops.toString());
        clickOnElement(desktops);
    }
}
