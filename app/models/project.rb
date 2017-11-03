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
