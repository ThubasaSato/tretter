Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'health_check#index'

  namespace :api do
    namespace :v1 do
      resources :tretter_tickets, only: %i[create]
    end
  end
end
