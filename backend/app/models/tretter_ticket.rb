class TretterTicket < ApplicationRecord
  validates :ticket_title, length: { maximum: 40 }
end
