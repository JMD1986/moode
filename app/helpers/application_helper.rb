module ApplicationHelper
  def logged_in?
    unless @current_user.nil?
      true
    end #unless
  end #loggin_in
end
