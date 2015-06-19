class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  def index
  end

  def current_user
    if @current_user.nil?
      if session[:user_id].present?
        @current_user = User.find(session[:user_id])
      end#if
    else
      @current_user
    end#if
  end#current_user

  def authenticate_user!
    unless current_user
      flash[:alert] = "please log in"
      redirect_to login_path
    end#unless
  end#authenticate_user
end#class

end
