# frozen_string_literal: true

class Ballet::TextareaComponent < ViewComponent::Base
  def initialize(**options)
    super
    @options = options
  end
end
