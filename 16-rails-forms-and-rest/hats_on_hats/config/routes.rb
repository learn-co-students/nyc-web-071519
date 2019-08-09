Rails.application.routes.draw do
  # resources :hats

  get "/hats", to: "hats#index"
  get "/hats/new", to: "hats#new"
  get "/hats/:id", to: "hats#show", as: "hat"
  post "/hats", to: "hats#create"
  delete "/hats/:id", to: "hats#destroy"

  get '/hats/:id/edit', to: "hats#edit"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
