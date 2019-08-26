class AddArtistIdToFans < ActiveRecord::Migration[5.2]
  def change
    add_column :fans, :artist_id, :integer
  end
end
