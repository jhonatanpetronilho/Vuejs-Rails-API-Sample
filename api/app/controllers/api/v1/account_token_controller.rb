class Api::V1::AccountTokenController < Knock::AuthTokenController

  # Modify create method for send user dada
  def create
    render json: {jwt: auth_token.token, user: {id: entity.id, email: entity.email}}
  end
end
