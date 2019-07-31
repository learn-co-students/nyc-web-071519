require 'pry'

# TODO: write palindrome? method
# racecar
# a man, a plan, a canal panama

def palindrome?(string)
  if string.is_a? String
    parsed_string = string.gsub(/[^0-9A-z]/, '').downcase
    return false if parsed_string.empty? 
    
    parsed_string == parsed_string.reverse
  else
    raise ArgumentError
  end
end