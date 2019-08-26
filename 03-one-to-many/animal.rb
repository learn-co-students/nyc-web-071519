class Animal 
    attr_reader :species 
    attr_accessor :name, :owner
    @@all = []
    def initialize(name, species)
        @name = name
        @species = species
        Animal.all << self 
    end
    
    def self.all 
        @@all
    end

   
end