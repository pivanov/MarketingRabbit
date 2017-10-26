class User < ApplicationRecord
  validates :firstname, :lastname,  presence:true
  validates :organization, presence:true
  validates :email, presence:true, uniqueness:true
  validates :session_token, presence:true
  validates :password_digest, presence: {message: "Password can't be blank"}
  validates :password, length: {minimum: 6}, allow_nil: true

  # like class methods that finds all the users that
  # are of a certain 'type'
  scope :businesses, -> { where(type: "Business")}
  scope :agencies, -> { where(type: "Agency")}

  # USING SINGLE TABLE INHERITANCE
  # Key is in the user table where we have a colum with the name
  # of 'type.' That is essntially all the is needed for
  # rails to know that you want it to trigger STP.
  # After that you simply create new models that inherit from
  # User.
  # Over in the routes file, I added routes for
  # the models that inherit from User.
  # The key part in these routes is again the key 'type'
  # This sets a params key of 'type' which we can these use
  # over in our User controller to make it more versatile

  attr_reader :password
  after_initialize :ensure_session_token

  def self.types
    ["Business", "Agency"]
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end


end
