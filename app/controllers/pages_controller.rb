class PagesController < ApplicationController
  before_action :authenticate_user!, only: :protected
  def protected
  end

  def unprotected
  end
end
