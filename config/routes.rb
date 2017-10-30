Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :businesses, controller: 'users', type: 'Business', only: [:create, :show] do
        resources :projects, only: [:create, :index]
    end
    resources :projects, only: [:show, :update]
    resources :agencies, controller: 'users', type: 'Agency', only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :industries, only: [:index]
    resources :sectors, only: [:index]
  end

end
