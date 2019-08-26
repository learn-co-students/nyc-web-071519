class Manager
    attr_accessor :name, :age
    @@all = []

    def initialize(name, age)
        @name = name
        @age = age
        Manager.all << self 
    end

    def self.all 
        @@all  
    end

    def tasks 
        Task.all.select do |task_inst|
            task_inst.manager == self
        end
    end 

    def employees 
        #Get a list of their tasks 
        #Iterate through those tasks and grab the employees 
        tasks.map do |task_inst|
            task_inst.employee 
        end

    end

    def assign_employee(employee, title)
        Task.new(employee, self, title)
    end

end