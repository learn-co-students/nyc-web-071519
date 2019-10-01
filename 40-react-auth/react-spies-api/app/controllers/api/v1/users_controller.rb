class Api::V1::UsersController < ApplicationController
  def create
    user = User.create(user_params)
    token = JWT.encode({user_id: user.id}, "secret squirrel")
    render json: {user: user.username, token: token }
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
