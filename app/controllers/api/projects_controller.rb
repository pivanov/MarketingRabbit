class Api::ProjectsController < ApplicationController
  def create
    @project = Project.new(project_params)
    if @project.save
      render 'api/projects/show'
    else
      render json: @project.errors.messages, status: 400
    end
  end


  def update
    @project = Project.find_by(id: params[:id])
    if @project
      if @project.update(project_params)
        render 'api/projects/show'
      else
        render json: {invalid_update: "invalid update"}, status: 400
      end
    else
      render json: {no_project: "Project does not exist"}, status: 404
    end
  end

  def show
    @project = Project.find_by(id: params[:id])
    if @project
      render 'api/projects/show'
    else
      render json: {no_project: "Project does not exist"}, status: 404
    end

  end

  def index
    @projects = Project.where("business_id = ?", params[:business_id])
    if @projects.length == 0
      render json: {no_projects: "No projects to display"}
    else
      render 'api/projects/index'
    end
  end

  private

  def project_params
    params.require(:project).permit(
      :business_id,
      :project_name,
      :service_needed_id,
      :service_needed_details,
      :project_start_date,
      :monthly_budget,
      :location_preference,
      :agency_location_preference,
      :agency_preference,
      :agency_type_preference,
      :provider_id
    )
  end


end
