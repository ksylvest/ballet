# frozen_string_literal: true

class Ballet::ProgressComponent < ViewComponent::Base
  renders_many :bars, Ballet::Progress::BarComponent
end
