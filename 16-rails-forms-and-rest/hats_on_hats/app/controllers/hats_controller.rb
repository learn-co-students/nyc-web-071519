class HatsController < ApplicationController
  # skip_before_action :verify_authenticity_token

  def index
    @hats = Hat.all

    # index.html.erb
  end

  def show
    @hat = Hat.find(params[:id])

    # show.html.erb
  end

  def new
    # show me the form
    @hat = Hat.new
    # new.html.erb
  end

  def edit
    @hat = Hat.find(params[:id])

    # edit.html.erb
  end

  def create
    # create the model in the database
    # still works
    # Hat.create(
    #   hat_type: params[:hat][:hat_type],
    #   color: params[:hat][:color],
    #   size: params[:hat][:size],
    #   cool: params[:hat][:cool],
    # )

    # will not work
    # Hat.create(params[:hat])
    @hat = Hat.create(hat_params)

    redirect_to(@hat)
  end

  def destroy
    @hat = Hat.find(params[:id])
    @hat.destroy

    redirect_to hats_path
  end

  private

  def hat_params
    params.require(:hat).permit(:color, :size, :cool, :hat_type)
  end

end
