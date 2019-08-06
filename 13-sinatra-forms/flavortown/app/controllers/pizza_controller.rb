
class PizzaController < ApplicationController


  # all da pizzas :) <3
  # index
  # read
  get "/pizzas" do
    @pizzas = Pizza.all
    erb :"pizza/index"
  end

  # new
  get '/pizzas/new' do
    # model
    # response
    erb :'/pizza/new'

  end

  #show
  get '/pizzas/:id' do
    # model grabs data
    @pizza = Pizza.find(params[:id])
    #response
    erb :"pizza/show"

  end

  # CRUD

  # create
  # grabbing user input with a form
  # user NEEDS TO SEE a form FIRST

  #create
  post '/pizzas' do

    #model
    Pizza.create(params)
    #response
    redirect "/pizzas"
  end

  # update

  # EDIT

  # UPDATE


  # Delete


end
