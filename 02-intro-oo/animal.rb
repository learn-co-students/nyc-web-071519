class Animal 
    attr_reader :species 
    attr_accessor :name

    @@all_animals = []

    def initialize(attributes)
        @species = attributes[:species]
        @name = attributes[:name]
        Animal.all << self 
    end
    
    def self.speak
        puts "Animal is speaking"
    end

    def self.all 
        @@all_animals 
    end
end