class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_url, :reversed_name

  has_many :reviews


  def reversed_name
    object.name.reverse
  end


end
