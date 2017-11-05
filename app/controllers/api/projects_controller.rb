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

  def relevantProjects
    # this will give us the agency of interest
    # @agency now has all the information we need from the agency
    agency = Agency.find_by(id: params[:agency_id])
    # agency_city_ids = @agency.city_ids
    # agency_industry_ids = @agency.industry_ids
    relevant_projects = {}
    agency_service_ids = agency.service_ids
    projects = Project.all

    projects.each do |project|
      if agency_service_ids.include?(project.service_needed_id)
        relevant_projects[project.id] = project
      end
    end
    render json: relevant_projects
    # get the list of all the projects that have a location preference
    # maybe make this into a hash
    # @relevant_projects = self.filter_relevant_projects(agency_city_ids, agency_industry_ids, agency_service_ids)


    # FINDING & SORTING
    # SORTING WILL BE WHERE THE POINT SYSTEM WILL COME INTO PLAY
    # project_params will be an object with all the keys we need to iterate through
    # to find relevant projects
    # project_params = {city_ids, service_ids, etc.}
    # these are propterties that belong to an agency and what we
    # aare trying to do is find those projects that meet this criteria
    # in the process we need to able to rank these projects so that the most
    # relevant ones are shown first
    # how we're going to rank them is going to be based on the point system
    # we develop.
    # Fir instance, a project that is looking for an agency is NYC, that specializes in
    # social media marketing, and serves B2B companies will most likely have a high score
    # of relevance

    # @projects =
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
      render json: {no_projects: "No projects to display"}, status: 404
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
