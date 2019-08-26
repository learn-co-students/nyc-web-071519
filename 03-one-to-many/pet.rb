class Pet
    attr_accessor :owner, :animal 
    @@all = []
    def initialize(owner, animal)
        @owner = owner 
        @animal = animal
        Pet.all << self
    end
    def self.all 
        @@all
    end
end