# frozen_string_literal: true

class Ballet::TablistComponent < ViewComponent::Base
  renders_many :tabs, Ballet::TabComponent
end
