class Business < User
  # validations for when a business is created
  validates :website, :industry_id, :industries_served_ids, presence:true

  has_many :business_servicings,
    class_name: 'BusinessServicing',
    foreign_key: :business_id,
    primary_key: :id,
    dependent: :destroy,
    inverse_of: :business

  belongs_to :industry,
    class_name: 'Industry',
    foreign_key: 'industry_id',
    primary_key: :id

  has_many :contract,
    class_name: "Contract",
    foreign_key: 'business_id',
    primary_key: :id

  # we now have a method called industries_served_ids that takes in an array of ids
  has_many :industries_served, through: :business_servicings, source: :industry
end
