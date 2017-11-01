class Business < User
  # validations for when a business is created
  validates :industry_id, presence:true
  validates :business_type, presence:true 
  # validates :industries_served_ids, presence:true, if: :is_b2b?

  before_destroy :destroy_projects

  has_many :business_servicings,
    class_name: 'BusinessServicing',
    foreign_key: :business_id,
    primary_key: :id,
    dependent: :destroy,
    inverse_of: :business

  belongs_to :industry,
    class_name: 'Industry',
    foreign_key: :industry_id,
    primary_key: :id

  # has_many :contract,
  #   class_name: "Contract",
  #   foreign_key: :business_id,
  #   primary_key: :id

  has_many :projects,
    class_name: "Project",
    foreign_key: :business_id,
    primary_key: :id

  def destroy_projects
    self.projects.destroy_all
  end

  # def is_b2b?
  #   self.business_type == 'B2B'
  # end

  # we now have a method called industries_served_ids that takes in an array of ids
  has_many :industries_served, through: :business_servicings, source: :industry
end
