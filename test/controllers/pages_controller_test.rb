require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get protected" do
    get pages_protected_url
    assert_response :success
  end

  test "should get unprotected" do
    get pages_unprotected_url
    assert_response :success
  end

end
