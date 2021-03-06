class Api::UsersController < ApplicationController

  def create
    @user = type_class.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.messages, status: 400
    end
  end

  private

  def show
    @user = type_class.find(params[:id])
    if @user
      render 'api/users/show'
    else
      render json: {no_user: "couldn't find user"}, status: 404
    end
  end

  def user_params
    params.require(:user).permit(
      :email,
      :firstname,
      :lastname,
      :password,
      :organization,
      :industry_id,
      :website,
      :business_type,
      :logo_file_name,
      :business_type_served,
      :minimum_project_size,
      :agency_type,
      :phone_number,
      industries_served_ids: [],
      service_ids: [],
      sector_ids: [],
      industry_ids: [],
      city_ids: []
    )
  end

  def type
    User.types.include?(params[:type]) ? params[:type] : "User"
  end

  def type_class
    type.constantize
  end

end
