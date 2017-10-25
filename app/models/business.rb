class Business < User
  # validations for when a business is created 
  validates :website, presence:true
end
