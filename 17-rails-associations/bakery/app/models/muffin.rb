class Muffin < ApplicationRecord
  belongs_to :baker, optional: true
  validates :flavor, length: { minimum: 2 }
  validates :flavor, uniqueness: true

  validate :bigger_than_5

  def bigger_than_5
    if self.size < 5
       errors.add(:size, "no muffin for you!")
    end
  end
end
