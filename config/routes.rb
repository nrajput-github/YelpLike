Rails.application.routes.draw do
 

  root 'layouts#application'

  namespace :api do
    namespace :v1 do
      resources :restaurants, param: :slug
      resources :reviews
      resources :auth, only: %i[create] do
        collection do
          post 'password/forgot', to: 'auth#forgot_password'
          post 'password/reset', to: 'auth#reset_password'
          get 'me', to: 'auth#logged_in'
          delete 'logout', to: 'auth#logout'
        end
      end
 
      resources :registrations, only: %i[create]
    end

    namespace :v2 do
      match "graphql", to: "graphql#execute", via: %i[get post delete]
    end
  end

  get '*path', to: 'layouts#application', via: :all
end