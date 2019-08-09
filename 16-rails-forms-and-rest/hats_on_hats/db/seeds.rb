# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Hat.create(
  hat_type: "sombrero",
  color: "black",
  size: 5,
  cool: true
)
Hat.create(
  hat_type: "baby fedora",
  color: "tan",
  size: 2,
  cool: true
)
Hat.create(
  hat_type: "trilby",
  color: "yellow",
  size: 7,
  cool: false
)
Hat.create(
  hat_type: "porkpie",
  color: "blue",
  size: 6,
  cool: false
)