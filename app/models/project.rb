class Project < ApplicationRecord
  validates :business_id, :project_name, :service_needed, :service_needed_details, presence:true
  validates :project_start_date, :monthly_budget, presence:true
  validates :agency_preference, :location_preference, inclusion: { in: [true, false] }
  after_initialize :set_defaults

  belongs_to :business,
    class_name: 'Business',
    foreign_key: :business_id,
    primary_key: :id

  belongs_to :provider,
    class_name: 'Agency',
    foreign_key: :provider_id,
    primary_key: :id,
    optional: true


  private

  def set_defaults
    self.location_preference = false if self.location_preference.nil?
    self.agency_preference = false if self.agency_preference.nil?
  end

end
