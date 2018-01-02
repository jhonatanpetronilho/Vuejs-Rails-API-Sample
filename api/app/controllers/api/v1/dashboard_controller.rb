class Api::V1::DashboardController < ApplicationController
  before_action :authenticate_account

  def index
    @quotes = generate_faker(5)
    render json: @quotes
  end

  private

  # Method for generate faker content data
  def generate_faker(number)
    @quotes = []

    number.times do
      @quotes << Faker::Simpsons.quote
    end
    @quotes
  end
end
