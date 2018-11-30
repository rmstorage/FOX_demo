#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

@Homepagefeature
Feature: HomePage
  Test the feature of Home Page

  @HomePage
  Scenario: Test the tab navigations of Home page
  Given Navigate to Shows Page
  And Click on Sports tab
  And Click on Movies tab
  And Click on Live TV tab
  Then Navigate to Respictive pages
  
  
  