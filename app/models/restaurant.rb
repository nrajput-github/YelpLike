class Restaurant < ApplicationRecord
  has_many :reviews

  validates :name, presence: true, length: { maximum: 255 }

  # Slugify restaurant name into a url safe param before create
  # Ex: 'Food Bar'.parameterize => 'food-bar'
  before_create -> (restaurant) do
    restaurant.slug = restaurant.name.parameterize
  end

  # Get the average score of all reviews for a restaurant
  def calculate_average
    return 0 unless reviews.size.positive?

    avg = reviews.average(:score).to_f.round(2) * 100
    update_column(:average_score, avg)
  end
end
