require 'rest-client'
require 'json'
require 'pry'

response = RestClient.get("https://pokeapi.co/api/v2/pokemon/2")
sleep(5)

puts "Welcome to Pokemon World!!!!"

pokemon = JSON.parse(response)
puts "Your pokemon is #{pokemon["name"]}!"

