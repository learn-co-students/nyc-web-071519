class Animal 
    attr_reader :species 
    attr_accessor :name

    @@all = []

    def initialize(attributes)
        @species = attributes[:species]
        @name = attributes[:name]
        @@all << self 
    end
    
    def self.speak
        puts "Animal is speaking"
    end

    def self.all 
        @@all 
    end
end