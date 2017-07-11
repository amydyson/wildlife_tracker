class RemoveLatitudeFromSightings < ActiveRecord::Migration[5.1]
  def change
    remove_column :sightings, :latitude, :integer
  end
end
