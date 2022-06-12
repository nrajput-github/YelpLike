
   
class AddAverageToRestaurants < ActiveRecord::Migration[6.1]
  def change
    add_column :restaurants, :average_score, :integer, default: 0 
  end
end