class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_name(name: params[:name])
    if user && user.authenticate(password: params[:password])
    # user = User.find_by_email(email: params[:email])
    # if user && user.authenticate(password: params[:password])
      session[:user_id] = user.id
      render json: 'You logged in successfully! Hooray!'
    else
      flash[:alert] = "Username or email did not match."
      render json: "Username or email did not match."
    end
  end

  def destroy
    session[:user_id] = nil
    render json: "logged out"
  end

end

