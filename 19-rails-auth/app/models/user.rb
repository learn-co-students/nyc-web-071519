class User < ApplicationRecord
  # has_many :user_songs
  # has_many :songs, through: :user_songs

  has_secure_password # wow
  # attr_reader :password
  # # def password
  # #   @password
  # # end
  # def password=(pt_pw)
  #   # byebug
  #   self.password_digest = BCrypt::Password.create(pt_pw)
  #   # self
  # end
  #
  # # authenticate(pt_pw)
  # def authenticate(pt_pw)
  #     # compare password against user.password_digest
  #     #self
  #     # password == self.password_digest
  #     if BCrypt::Password.new(self.password_digest) == pt_pw
  #       self
  #     end
  #
  # end


end
