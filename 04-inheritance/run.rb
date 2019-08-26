require 'pry'
require_relative './animal'
require_relative './owner'
require_relative './pet'
require_relative './dog'

owner = Owner.new("Steven", 17, "new york")
owner3 = Owner.new("Steven", 78, "berlington")
owner1 = Owner.new("Ali", 21, "long island")
owner2 = Owner.new("Ian", 33, "suttens bay")

dog = Dog.new("Rex", "german shepherd")
dog1 = Dog.new("John", "bassenji")
# animal3 = Animal.new("Mamba", "dog")
# animal2 = Animal.new("Fluffy", "dog")
# animal4 = Animal.new("Jaws", "fish")

# pet = Pet.new(owner, animal)
# pet1 = Pet.new(owner1, animal1)
# pet2 = Pet.new(owner2, animal2)
# pet3 = Pet.new(owner3, animal3)
# pet4 = Pet.new(owner1, animal4)

binding.pry 

0