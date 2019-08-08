Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # get '/trains', to: "trains#index", as: "trains" #_path
  # get '/trains/new', to: 'trains#new'
  # get '/trains/:id', to:'trains#show', as: "train"
  resources :trains, only: [:index]

end
