# frozen_string_literal: true

class Ballet::TabComponent < ViewComponent::Base
  # @param selected [Boolean] optional
  def initialize(selected: nil)
    super()
    @selected = selected
  end

  # @return [Boolean]
  def selected?
    !!@selected
  end
end
