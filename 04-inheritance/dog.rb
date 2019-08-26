class Dog < Animal
    attr_accessor :name
    attr_reader :breed

    def initialize(name, breed)
        super("dog", 4)
        @name = name
        @breed = breed
    end

    def bark
       puts "woof woof I love fish"
        self.poop
    end
    
    private 

    def poop
        "poop"
    end
end