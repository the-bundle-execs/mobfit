class PagesController < ApplicationController
  before_action :authenticate_user!, only: :protected
  def protected
    @google_maps_api_key = Rails.application.credentials.google_maps_api_key
    # @map_center = [32.7096298,-117.1602029]
    # @map_zoom= 12
  end

  def unprotected
  end
end
