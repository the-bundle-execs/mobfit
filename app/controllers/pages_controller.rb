class PagesController < ApplicationController
  before_action :authenticate_user!, only: :protected
  def protected
    @google_maps_api_key = Rails.application.credentials.google_maps_api_key
  end

  def unprotected
  end
end
