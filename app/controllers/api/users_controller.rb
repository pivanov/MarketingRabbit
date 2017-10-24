class Api::UsersController < ApplicationController

  def create
    @user = type_class.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :email,
      :firstname,
      :lastname,
      :password
    )
  end

  def type
    User.types.include?(params[:type]) ? params[:type] : "User"
  end

  def type_class
    type.constantize
  end

end
