class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      # render json: ['invalid credentials'], status: 404
      if params[:user][:email].length == 0 && params[:user][:password].length == 0
        render json: {:blankPassword => ["Password can't be blank"], :invalidEmail => ["Must be a valid emial"]}, status: 404
      elsif params[:user][:email].length == 0
        render json: {:invalidEmail => ["Must be a valid email"]}, status: 404;
      elsif params[:user][:password].length ==0
        render json: {:blankPassword => ["Password can't be blank"]}, status: 404;
      else
        render json: {:invalidcredentials => ["Invalid credentials"]}, status: 404;
      end

    end
  end


  def destroy
    @user = current_user
    if @user
      logout!
      render json: {}
    else
      render json: {:noUser =>['No user signed in'] }, status: 404
    end

  end

end
