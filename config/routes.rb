Rails.application.routes.draw do
  namespace :api do
    resources :reports
  end
  match '(*path)', to: 'pages#index', via: [:get]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
