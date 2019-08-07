class CreateNoTweets < ActiveRecord::Migration
  def change
    create_table :no_tweets do |t|
      t.string :content
      t.integer :user_id
      t.timestamps null: false
    end
  end
end
