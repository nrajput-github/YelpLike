class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :restaurant_id, :location

  attribute :email do |object|
    object&.user&.email
  end
end