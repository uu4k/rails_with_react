Rails.application.routes.draw do
  root 'home#index'
  get "up" => "rails/health#show", as: :rails_health_check

  scope 'api' do
  end

  # SPAでやるのでルーティングはreact routerでやる
  get '*path', to: 'home#index'
end
