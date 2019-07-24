class User
  attr_reader :name

  @@all = []
  def initialize(name)
    @name = name
    @@all << self
  end 

  def self.all
    @@all
  end

  # User#recipe_cards
  # User#recipes
  def recipes
    # should return all of the recipes this user has recipe cards for
    recipe_cards = RecipeCard.all.filter do |recipe_card|
      recipe_card.user == self
    end
    recipe_cards.map do |recipe_card|
      recipe_card.recipe
    end
  end

  # - `User#add_recipe_card`
  # should accept a recipe instance as an argument, as well as a date and rating, 
  # and create a new recipe card for this user and the given recipe
  def add_recipe_card(recipe_inst, date, rating)
    RecipeCard.new(self, recipe_inst, date, rating)
  end

  # should accept an`Ingredient` instance as an argument, 
  # and create a new `Allergy` instance for this `User` and the given `Ingredient`
  def declare_allergy(ing_inst)
    Allergy.new(self, ing_inst)
  end

  # should return all of the ingredients this user is allergic to
  def allergens
    allergies = Allergy.all.select do |allergy|
      allergy.user == self
    end

    allergies.map do |allergy|
      allergy.ingredient
    end
  end

  def top_three_recipes
    # get all the recipe cards for this user instance
    recipe_cards = RecipeCard.all.select do |rc|
      rc.user == self
    end

    # sort through the recipe cards by rating
    sorted_recipe_cards = recipe_cards.sort_by do |rc|
      rc.rating
    end

    # map through the sorted cards to get just the recipes
    recipes = sorted_recipe_cards.map do |rc|
      rc.recipe
    end

    # return the last three elements of the array
    recipes.reverse[0..2]
  end

  # should return all recipes that do not contain ingredients the user is allergic to
  def safe_recipes
    # get all the recipes
    Recipe.all.select do |recipe|
      # find the ingredients in each recipe
      recipe.ingredients.any? do |ingredient| 
        # compare the ingredients in each recipe to allergens for this user
        # reject the recipes that contain items that are allergens for this user
        self.allergens.include?(ingredient)
      end
    end # return an array of recipes

  end

end