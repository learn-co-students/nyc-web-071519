class Cat < Animal
    attr_accessor :name
    attr_reader :breed

    def initialize(name, breed)
        super("cat", 4)
        @name = name 
        @breed = breed
    end

    def meow 
        "meow meow I really love fish"
    end
end