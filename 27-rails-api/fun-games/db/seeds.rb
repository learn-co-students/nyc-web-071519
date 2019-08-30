# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


data = [
  {
    name: "Settlers of Catan",
    description: "Friendships will be tested.",
    image_url: "https://crowscastle.com/375-large_default/the-settlers-of-catan.jpg"
  },
  {
    name: "Azul",
    description: "Great fun with the friends!.",
    image_url: "https://cf.geekdo-images.com/itemrep/img/ql-0-t271LVGqbmWA1gdkIH7WvM=/fit-in/246x300/pic3718275.jpg"
  }
]


data.each do |game|
  Game.create(game)
end