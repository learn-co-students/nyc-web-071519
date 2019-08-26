class Animal 
    attr_reader :species, :num_of_legs
    attr_accessor :name, :owner
    @@all = []
    def initialize(species, num_of_legs)
        @species = species
        @num_of_legs = num_of_legs
        Animal.all << self 
    end
    
    def self.all 
        @@all
    end
end