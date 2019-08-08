class TrainsController < ApplicationController

  # index
    # get '/trains'
    # logic

    def index
      # model
      @trains = Train.all
      # response
      #  erb :trains/index
      render :index

    end

  # show
  # get '/trains/:id'
  def show
    # model
    @train = Train.find(params[:id])
    #response
    render :show
  end

  # new
  def new
    # model

    #response
    # render new
  end

  def anything
    #render

  end

  # create
  def create
    #code
  end

  # edit

  def edit

  end
  # update

  def update

  end
  # DESTROY

  def delete

  end

end
