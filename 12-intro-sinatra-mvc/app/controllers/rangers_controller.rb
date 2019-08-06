class RangersController < ApplicationController

  # GET: /rangers
  get "/rangers" do
    @allmyrangers = Ranger.all
    erb :"/rangers/index.html"
  end


  # GET: /rangers/new
  get "/rangers/new" do
    erb :"/rangers/new.html"
  end

  # POST: /rangers
  post "/rangers" do
    redirect "/rangers"
  end

  # GET: /rangers/5
  get "/rangers/:id" do
    erb :"/rangers/show.html"
  end

  # GET: /rangers/5/edit
  get "/rangers/:id/edit" do
    erb :"/rangers/edit.html"
  end

  # PATCH: /rangers/5
  patch "/rangers/:id" do
    redirect "/rangers/:id"
  end

  # DELETE: /rangers/5/delete
  delete "/rangers/:id/delete" do
    redirect "/rangers"
  end
end
