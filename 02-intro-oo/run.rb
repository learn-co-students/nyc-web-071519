require 'pry'
require_relative './animal.rb'

Animal.new({name:"bruce", species:"dog"})
Animal.new({name:"bruce jr", species:"dog"})
Animal.new({name:"bruce jr", species:"dog"})


def select(name)
    animal_array = Animal.all.select do |animal_instance|
        animal_instance.name == name
    end
    animal_array.each do |animal|
        puts animal.name
    end
end

select("bruce jr")