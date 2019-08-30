class Api::V1::GamesController < ApplicationController

  def index
    games = Game.all
    render json: games
  end

  # def show
  #   game = Game.find(params[:id])
  #   render json: game
  # end

  def create
    game = Game.new(game_params)

    if game.save
      render json: game
    else
      render json: {message: "YA DUN GOOFED", errors: game.errors.full_messages}, status: 406
    end
  end

  def destroy
    game = Game.find(params[:id])
    game.destroy

    render json: {message: "Successfully deleted"}
  end

  private

  def game_params
    params.require(:game).permit(:name, :description, :image_url)
  end
end
