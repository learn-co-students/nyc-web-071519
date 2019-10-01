class Api::V1::AuthController < ApplicationController
    def get_user
        token = request.headers["Authorization"]
        user_id = JWT.decode(token, "secret squirrel")[0]["user_id"]
        user = User.find(user_id)
        render json: {user: user.username}
    end

    def login
        user = User.find_by(username: params[:user][:username])
        token = JWT.encode({user_id: user.id}, "secret squirrel")
        if user && user.authenticate(params[:user][:password])
            render json: {user: user.username, token: token}
        end

    end
    
end