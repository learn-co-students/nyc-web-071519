class Owner
    attr_accessor :name, :age, :city
    @@all = []
    def initialize(name, age, city)
        @name = name
        @age = age 
        @city = city
        Owner.all << self 

    end

    def self.all 
        @@all
    end

    def pets
        Pet.all.select do |pet_instance|
            pet_instance.owner == self 
        end
    end
    def animals
        pets.map do |pet_instance|
            pet_instance.animal
        end
    end
    def species
        animals.map do |animal_instance|
            animal_instance.species
        end
    end

end