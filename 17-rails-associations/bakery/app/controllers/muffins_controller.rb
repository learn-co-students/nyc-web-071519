class MuffinsController < ApplicationController

  def index
    # model
    @muffins = Muffin.all

    # reponse
    render :index
  end

  def new
    # model
    @muffin = Muffin.new
    @bakers = Baker.all
    #response
    # render :new
  end

  def create
    # byebug
    @muffin = Muffin.create(muffin_params)
    if @muffin.valid?
      redirect_to muffins_path
    else
      # byebug
      # FOLLOW THE REDIRECT URL
    # flash[:errors] = @muffin.errors.full_messages
    # redirect_to new_muffin_path
    #

    # will follow the FORM URL
    # @errors = @muffin.errors.full_messages
    # @bakers = Baker.all
    #   render(:new)
    # end
    #
  end

  private

  # strong params 💪
  def muffin_params
    params.require(:muffin).permit(:flavor, :size, :baker_id)
  end



end
