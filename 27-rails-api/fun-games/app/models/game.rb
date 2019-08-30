class Game < ApplicationRecord
  validates :name, presence: true, length: {minimum: 5}
  validates :description, presence: true, length: {minimum: 15}
  validates :image_url, presence: true


  has_many :reviews
end
