class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :image_url
      t.string :slug
      t.string :location
      t.integer :average_score

      t.timestamps
    end
  end
end