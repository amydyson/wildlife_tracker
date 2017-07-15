Rails.application.routes.draw do
  resources :animals
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'statics#index'
  #generates /sightings/get_events route
    resources :sightings do
      get :get_events, on: :collection
    end

end
