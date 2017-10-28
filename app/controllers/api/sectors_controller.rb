class Api::SectorsController < ApplicationController

  def index
    @sectors = Sector.all
    render 'api/sectors/index'
  end
end
