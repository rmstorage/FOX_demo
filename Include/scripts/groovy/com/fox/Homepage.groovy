package com.fox
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords

import internal.GlobalVariable

import MobileBuiltInKeywords as Mobile
import WSBuiltInKeywords as WS
import WebUiBuiltInKeywords as WebUI

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When


class Homepage {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given("Navigate to Shows Page")
	def Navigateto_homepage() {
		WebUI.openBrowser('')

		WebUI.navigateToUrl('https://www.fox.com/')
	}

	@When("Click on Sports tab")
	def Sportstab_click() {
		WebUI.click(findTestObject('Object Repository/FOX_homepage/Page_FOX Broadcasting Company  Full/a_Shows'))
	}
	@Then("Click on Movies tab")
	def Moviesstab_click() {
		WebUI.click(findTestObject('Object Repository/FOX_homepage/Page_Stream and Watch Full Episodes/a_Sports'))
	}
	@Then("Click on Live TV tab")
	def TVtab_click() {
		WebUI.click(findTestObject('Object Repository/FOX_homepage/Page_FOX Broadcasting Company  Full/a_Movies'))
	}


	@Then("Navigate to Respictive pages")
	def naviaget() {
		print "Respective Pages are displayed"
		WebUI.closeBrowser()
	}
}