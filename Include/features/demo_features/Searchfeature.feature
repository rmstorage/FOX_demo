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

@Searchfeature
Feature: SearchPage
  Test the feature of Search PAge

  @HomePage
  Scenario: Navigate to SEE ALL tab and search for video
  Given Navigate to Shows1 Page
  And Click on NEXT1 tab
  And Click on NEXT2 tab
  And Click on NEXT3 tab
  And Click on SeeAll tab
  And Click on Search field
  Then Click on Searched Video