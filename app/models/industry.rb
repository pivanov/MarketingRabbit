class Industry < ApplicationRecord

  has_many :business_servicings,
    class_name: 'BusinessServicings',
    foreign_key:  :industry_id,
    primary_key: :id

  has_many :businesses, through: :business_servicings, source: :business
end
