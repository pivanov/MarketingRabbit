class Business < User
  # validations for when a business is created
  validates :website, :industry_id, presence:true

  has_many :industries_served,
    class_name: 'BusinessServicing',
    foreign_key: :business_id,
    primary_key: :id

  belongs_to :industry,
    class_name: 'Industry',
    foreign_key: 'industry_id',
    primary_key: :id

  has_many :contract,
    class_name: "Contract",
    foreign_key: 'business_id',
    primary_key: :id
end
