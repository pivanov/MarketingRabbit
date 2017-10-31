class Api::ServicesController < ApplicationController
  def index
    @services = Service.all
    render 'api/services/index'
  end
end
