class Recipe
  attr_reader :name
  
  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def ingredients
    recipe_ingredeints = RecipeIngredient.all.filter do |ri|
      ri.recipe == self
    end

    recipe_ingredeints.map do |ri|
      ri.ingredient
    end
  end

end