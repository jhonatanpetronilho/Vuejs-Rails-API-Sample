Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      post 'auth' => 'account_token#create'
      get 'dashboard' => 'dashboard#index'
    end
  end
end
