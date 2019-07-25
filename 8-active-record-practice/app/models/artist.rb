class Artist < ActiveRecord::Base
    has_many :shows 
    has_many :fans, through: :shows


    def self.select_by_genre(genre)
        # Artist.all.select do |artist|
        #     artist.genre == genre 
        # end
        Artist.where(["genre = ?", "#{genre}"])        
    end
end