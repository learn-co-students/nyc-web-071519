class Task
    attr_accessor :employee, :manager, :title
    @@all = []
    def initialize(employee, manager, title)
        @employee = employee 
        @manager = manager
        @title = title
        Task.all << self
    end

    def self.all 
        @@all
    end
end