class Review < ApplicationRecord
  belongs_to :restaurant
  belongs_to :user

  after_commit -> (review) { review.restaurant.calculate_average }
end
