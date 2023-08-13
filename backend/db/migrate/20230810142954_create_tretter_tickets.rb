class CreateTretterTickets < ActiveRecord::Migration[7.0]
  def change
    create_table :tretter_tickets do |t|
      t.string :ticket_title, null: false, comment:"チケットのタイトル"

      t.timestamps
    end
  end
end
