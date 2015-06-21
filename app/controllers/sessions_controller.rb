class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
  end

  def create
    user = User.find_by_name(params[:name])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: { message: "Welcome to the club!" }
    else
      render json: { message: "Sorry. Username or password not found :-/" }, status: 404
    end
  end

  def destroy
    session[:user_id] = nil
    render json: "logged out"
  end

end

