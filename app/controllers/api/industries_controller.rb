class Api::IndustriesController < ApplicationController

  def index
    @industries = Industry.all
    render 'api/industries/index'
  end

end
