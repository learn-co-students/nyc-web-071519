Artist.destroy_all 
Fan.destroy_all 

a1 = Artist.create!(name: "Ali", band_name: "Band 1", genre: "classical")
a2 = Artist.create!(name: "Rutger", band_name: "Shitty Weekend", genre: "classical")
a3 = Artist.create!(name: "Alena", band_name: "Band 2", genre: "classical")
a4 = Artist.create!(name: "John", band_name: "Band 3", genre: "classical")
a5 = Artist.create!(name: "Bruce Jr", band_name: "Band 4", genre: "rock")
a6 = Artist.create!(name: "Nikole", band_name: "Band 5", genre: "rap")
a7 = Artist.create!(name: "Matt", band_name: "Band 6", genre: "rock")
a8 = Artist.create!(name: "Sumaiya", band_name: "Band 7", genre: "rock")

f1 = Fan.create!(name: "Tashawn", age: 29)
f2 =Fan.create!(name: "Clarence", age: 28)
f3 =Fan.create!(name: "Shaquil", age: 27)
f4 =Fan.create!(name: "Quintell", age: 23)
f5 =Fan.create!(name: "Tyquan", age: 21)
f6 =Fan.create!(name: "Andrew C", age: 21)
f7 =Fan.create!(name: "Andrew S", age: 21)
f8 =Fan.create!(name: "Tyler", age:21)


Show.create!(name: "Gov Ball", artist: a6, fan: f3)
Show.create!(name: "Total Fest", artist:a2, fan: f6)
Show.create!(name: "Burning Man", artist:a8, fan: f8)
Show.create!(name: "Bonaroo", artist: a5, fan: f1)
Show.create!(name: "Electric Zoo", artist: a3, fan:f7)