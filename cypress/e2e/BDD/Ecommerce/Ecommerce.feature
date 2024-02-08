Feature: Ecommerce site - GreenKart

@focus
Scenario: E-commerce product delivery
Given visiting the site
When searching the product which starts with ca
And add to cart Cashews
When place order and select country
Then validate the thank you message