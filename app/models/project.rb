class Project < ApplicationRecord
  validates :business_id, :project_name, :service_needed_id, :service_needed_details, :stage, presence:true
  validates :project_start_date, :monthly_budget, presence:true
  validates :agency_preference, :location_preference, inclusion: { in: [true, false] }
  validate :ensure_valid_date
  after_initialize :set_defaults, :parse_date_input
  before_validation :set_stage

  belongs_to :business,
    class_name: 'Business',
    foreign_key: :business_id,
    primary_key: :id

  belongs_to :provider,
    class_name: 'Agency',
    foreign_key: :provider_id,
    primary_key: :id,
    optional: true

  belongs_to :service_needed,
    class_name: 'Service',
    foreign_key: :service_needed_id,
    primary_key: :id

  # def self.filter_relevant_projects(agency_city_ids, agency_industry_ids, agency_service_ids)
    # relevant_projects = {}
    # projects_with_location_preference = Project.where("location_preference = true")
    # projects_without_location_preference = Project.where("location_preference = false")
    # if projects_with_location_preference.length != 0
    #
    # if projects_with_location_preference.length != 0
    #   projects_with_location_preference.each do |project|
    #     if agency_city_ids.include?(project.agency_location_preference_id)
    #       @relevant_projects[project.id] = {project: project}
    #       @relevant_projects[project.id][:relevance_score] = 7
    #       if agency_industry_ids.include?(@relevant_projects[project.id][:project].business.industry.id)
    #           @relevant_projects[k][:relevance_score] += 7
    #       end
    #       if agency_service_ids.include?(@relevant_projects[project.id][:project].service_needed_id)
    #           @relevant_projects[k][:relevance_score] += 7
    #       end
    #     elsif agency_industry_ids.include?(project.)
    #   end

      # if agency_city_ids.include?(project.agency_location_preference_id)
      #   projects_with_location_preference.each do |project|
      #       @relevant_projects[project.id] = {project: project}
      #       @relevant_projects[project.id][:relevance_score] = 7
      #   end
      #   @relevant_projects.each do |k, v|
      #     if agency_industry_ids.include?(@relevant_projects[k][:project].business.industry.id)
      #       @relevant_projects[k][:relevance_score] += 7
      #     end
      #     if agency_service_ids.include?(@relevant_projects[k][:project].service_needed_id)
      #       @relevant_projects[k][:relevance_score] += 7
      #     end
      #   end
      # end
    # else
    #   if agency_industry_ids.include?(@relevant_projects[k][:project].business.industry.id)

    #
    #
  # end

  def ensure_valid_date
    if project_start_date.present? && project_start_date < Date.today
      errors.add(:project_start_date, "Invalid start date")
    end
  end

  private
  def parse_date_input
    self.project_start_date = Date.parse('2017-10-30') if self.project_start_date.nil?
  end

  def set_stage
    self.stage = 2
  end

  def set_defaults
    self.location_preference = false if self.location_preference.nil?
    self.agency_preference = false if self.agency_preference.nil?
  end

end
