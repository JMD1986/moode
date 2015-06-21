class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_user, only: [:show, :edit, :update, :destroy, :user]
  # GET /users
  # GET /users.json
  def index
    render json: User.all
  end

  def show
    User.find(params[:id])
    Like.find(user_id: params[:id]).count
    render json: User.find(params[:id])
  end


  def create
    @user = User.new(name: params[:name], email: params[:email],  password: params[:password], password_confirmation: params[:password_confirmation] )

    respond_to do |format|
      if @user.save
        render json: { message: "user created"}
      else
        render json: { message: "user could not be created"}
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
