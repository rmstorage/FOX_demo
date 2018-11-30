$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/Katalon/Blank_BDD/Include/features/demo_features/Fox_homepage.feature");
formatter.feature({
  "name": "HomePage",
  "description": "  Test the feature of Home Page",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Homepagefeature"
    }
  ]
});
formatter.scenario({
  "name": "Test the tab navigations of Home page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Homepagefeature"
    },
    {
      "name": "@HomePage"
    }
  ]
});
formatter.step({
  "name": "Navigate to Shows Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Homepage.Navigateto_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Sports tab",
  "keyword": "And "
});
formatter.match({
  "location": "Homepage.Sportstab_click()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Movies tab",
  "keyword": "And "
});
formatter.match({
  "location": "Homepage.Moviesstab_click()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Live TV tab",
  "keyword": "And "
});
formatter.match({
  "location": "Homepage.TVtab_click()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Respictive pages",
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.naviaget()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("E:/Katalon/Blank_BDD/Include/features/demo_features/Searchfeature.feature");
formatter.feature({
  "name": "SearchPage",
  "description": "  Test the feature of Search PAge",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Searchfeature"
    }
  ]
});
formatter.scenario({
  "name": "Navigate to SEE ALL tab and search for video",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Searchfeature"
    },
    {
      "name": "@HomePage"
    }
  ]
});
formatter.step({
  "name": "Navigate to Shows1 Page",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchVideo.Navigateto_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on NEXT1 tab",
  "keyword": "And "
});
formatter.match({
  "location": "SearchVideo.Next1_click()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on NEXT2 tab",
  "keyword": "And "
});
formatter.match({
  "location": "SearchVideo.Next2_click()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to click on object \u0027Object Repository/FOX_homepage/Page_FOX Broadcasting Company  Full/circle\u0027 (Root cause: org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton class\u003d\"slick-arrow slick-next\" type\u003d\"button\" data-role\u003d\"none\"\u003e...\u003c/button\u003e is not clickable at point (1168, 21). Other element would receive the click: \u003cdiv class\u003d\"Header_headerContentWrapper_1qip1\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d70.0.3538.110)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:07:36.161Z\u0027\nSystem info: host: \u0027NIBC2466\u0027, ip: \u0027192.168.21.107\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: com.kms.katalon.selenium.driver.CChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.35.528161 (5b82f2d2aae0ca..., userDataDir: C:\\Users\\RAVIND~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.110, webStorageEnabled: true}\nSession ID: 43de6e65adada1b1ad1d0147f3c11963)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:36)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:65)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:27)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:86)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:53)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:616)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$click$1.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat com.fox.SearchVideo.Next2_click(SearchVideo.groovy:66)\r\n\tat ✽.Click on NEXT2 tab(E:/Katalon/Blank_BDD/Include/features/demo_features/Searchfeature.feature:28)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click on NEXT3 tab",
  "keyword": "And "
});
formatter.match({
  "location": "SearchVideo.Next3_click()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on SeeAll tab",
  "keyword": "And "
});
formatter.match({
  "location": "SearchVideo.seeAll_click()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Search field",
  "keyword": "And "
});
formatter.match({
  "location": "SearchVideo.Search()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Searched Video",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchVideo.playandclose()"
});
formatter.result({
  "status": "skipped"
});
});