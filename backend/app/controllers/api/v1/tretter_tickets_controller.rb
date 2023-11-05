# frozen_string_literal: true

module Api
  module V1
    class TretterTicketsController < ApplicationController
      def create
        render json: 'ticket is created!', status: :ok
      end
    end
  end
end
