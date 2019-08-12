Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/hmmm', to:"muffins#index", as:'form_submit'
  # get '/muffins/new', to:"muffins#new"
  resources :muffins, only: [:new, :create, :index]
  # get '/muffins', to: "muffins#index", as:"muffins"
end
