class NotweetsController < ApplicationController

  # GET: /notweets
  get "/notweets" do
    erb :"/notweets/index.html"
  end

  # GET: /notweets/new
  get "/notweets/new" do
    @users = User.all
    erb :"/notweets/new.html"
  end

  # POST: /notweets
  post "/notweets" do
    # model
    NoTweet.create(params)
    # response
    redirect "/notweets"
  end

  # GET: /notweets/5
  get "/notweets/:id" do
    # model
    @tweet = NoTweet.find(params[:id])
    #response
    erb :"/notweets/show.html"
  end

  # GET: /notweets/5/edit
  get "/notweets/:id/edit" do
    erb :"/notweets/edit.html"
  end

  # PATCH: /notweets/5
  patch "/notweets/:id" do
    redirect "/notweets/:id"
  end

  # DELETE: /notweets/5/delete
  delete "/notweets/:id/delete" do
    redirect "/notweets"
  end
end
