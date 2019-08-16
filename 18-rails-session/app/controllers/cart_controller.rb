class CartController < ApplicationController
  def update
    #model
    # byebug

    # cart = []

    # if session[:cart]
    #   session[:cart]
    # else
    #   session[:cart] = []
    # end
    add_item_to_cart(params[:nacho_id])
    # session[:cart] << params[:nacho_id]

    # response
    redirect_to nachos_path
  end


end
