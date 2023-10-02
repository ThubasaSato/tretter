Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'health_check#index'

  devise_for :users, skip: %w[passwords registrations sessions]
  devise_scope :user do
    namespace :api do
      namespace :v1 do
        resources :users, controller: 'devise/users' do
          get :refine, on: :collection
        end
      end
    end
  end

  namespace :api do
    namespace :v1 do
      resources :tretter_tickets, only: %i[create]
    end
  end
end
