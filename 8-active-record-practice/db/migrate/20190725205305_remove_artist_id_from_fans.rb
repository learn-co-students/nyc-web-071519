class RemoveArtistIdFromFans < ActiveRecord::Migration[5.2]
  def change
    remove_column(:fans, :artist_id, :integer)
  end
end
