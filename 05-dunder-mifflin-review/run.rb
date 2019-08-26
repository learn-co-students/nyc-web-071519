require 'pry'
require_relative "./employee"
require_relative "./manager"
require_relative "./task"

beef = Manager.new("John", 33)
steak = Employee.new("John", 3300)
task = Task.new(steak, beef, "Trying things out")

binding.pry 

0