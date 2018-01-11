class CreateReports < ActiveRecord::Migration[5.1]
  def change
    create_table :reports do |t|
      t.string :horse_name
      t.string :activity
      t.string :location
      t.integer :duration
      t.date :date
      t.string :rider

      t.timestamps
    end
  end
end
