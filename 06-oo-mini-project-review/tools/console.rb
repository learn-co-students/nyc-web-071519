require_relative '../config/environment.rb'

recipe1 = Recipe.new("Recipe 1")
pizza = Recipe.new("Pizza")
pb_and_j = Recipe.new("PB&J")
pie = Recipe.new("Pie")
brownies = Recipe.new("Brownies")
plain_kale = Recipe.new("Just a head of kale.")

taytay = User.new("Taylor Swift")
gordo = User.new("Gordon Ramsey")
simba = User.new("Simba, the True King")
tommy_w = User.new("Tommy 'oh hai' Wiseau")
bruce_jr = User.new("Bruce Jr.")

peps = Ingredient.new("Pepperoni")
salt = Ingredient.new("Salt")
ing1 = Ingredient.new("Ingredient the 1st")
choco = Ingredient.new("Chocolate")
kale = Ingredient.new("Kale")

a1 = Allergy.new(taytay, salt)
a2 = Allergy.new(taytay, peps)
a3 = Allergy.new(simba, choco)
a4 = Allergy.new(tommy_w, kale)
a5 = Allergy.new(gordo, salt)

rc1 = RecipeCard.new(taytay, brownies, "07/22/19", 2)
rc2 = RecipeCard.new(taytay, plain_kale, "07/22/19", 5)
rc3 = RecipeCard.new(taytay, recipe1, "07/21/19", 1)
rc31 = RecipeCard.new(taytay, pizza, "07/21/19", 1)
rc4 = RecipeCard.new(simba, brownies, "07/22/19", 1)
rc5 = RecipeCard.new(gordo, brownies, "07/22/19", 5)
rc6 = RecipeCard.new(tommy_w, pb_and_j, "07/22/19", 3)
rc7 = RecipeCard.new(bruce_jr, pizza, "07/21/19", 4)

ri1 = RecipeIngredient.new(choco, brownies)
ri2 = RecipeIngredient.new(kale, plain_kale)
ri3 = RecipeIngredient.new(ing1, recipe1)
ri4 = RecipeIngredient.new(peps, brownies)
ri5 = RecipeIngredient.new(salt, brownies)
ri6 = RecipeIngredient.new(salt, pb_and_j)
ri7 = RecipeIngredient.new(ing1, pizza)

binding.pry
