class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :description
      t.string :score
      t.string :interger
      t.belongs_to :restaurant,null:false,foreign_key: true

      t.timestamps
    end
  end
end
