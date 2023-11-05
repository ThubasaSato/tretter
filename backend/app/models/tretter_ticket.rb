# frozen_string_literal: true

# == Schema Information
#
# Table name: tretter_tickets
#
#  id                               :bigint           not null, primary key
#  ticket_title(チケットのタイトル) :string(255)      not null
#  created_at                       :datetime         not null
#  updated_at                       :datetime         not null
#
class TretterTicket < ApplicationRecord
  validates :ticket_title, length: { maximum: 40 }
end
