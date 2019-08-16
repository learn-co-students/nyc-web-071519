class ApplicationController < ActionController::Base


  # method to be my cart
  def cart
    session[:cart] ||= []
  end

  # need to hold all my item id's
  def add_item_to_cart(item_id)
    cart << item_id
  end


  # method to add a item to a cart
  def show_cart
    # GETTING ALL THE ITEMS

    @cart_nachos = Nacho.find(cart)

  end



end
