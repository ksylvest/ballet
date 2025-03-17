# frozen_string_literal: true

class Ballet::InputComponent < ViewComponent::Base
  def initialize(**options)
    super
    @options = options
  end
end
