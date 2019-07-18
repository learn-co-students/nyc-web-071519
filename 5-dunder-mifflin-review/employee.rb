class Employee
    attr_accessor :name, :salary 
    @@all = []
    def initialize(name, salary)
        @name = name
        @salary = salary
        Employee.all << self
    end

    def self.all 
        @@all
    end
end