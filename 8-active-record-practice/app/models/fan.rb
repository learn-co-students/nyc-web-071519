class Fan < ActiveRecord::Base 
    has_many :shows 
    has_many :artists, through: :shows
end