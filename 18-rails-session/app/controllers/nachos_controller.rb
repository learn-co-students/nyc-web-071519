class NachosController < ApplicationController
  before_action :find_nacho, only: [:show, :edit, :delete]
  # before_action :get_items_from_cart, only: [:index]

  def index # /nachos
    # request
    @nachos = Nacho.all
    show_cart
    # see_the_items
    # response
    # render(:index)
  end

  def show
    # model
    # find_nacho
    #before_action called first

    # response
    # render(:show)
  end

  def edit
    # find_nacho
    #code
  end

  def delete
    # find_nacho
    #code
  end

  private

  def find_nacho
    @nacho = Nacho.find(params[:id])
  end
end
