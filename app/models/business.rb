class Business < User
  # validations for when a business is created
  validates :website, presence:true

  has_many :industries_served,
    class_name: 'BusinessServicings',
    foreign_key: :business_id,
    primary_key: :id


end
