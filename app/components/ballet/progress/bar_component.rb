# frozen_string_literal: true

class Ballet::Progress::BarComponent < ViewComponent::Base
  # @param value [Numeric]
  # @param min [Numeric] default = 0.0
  # @param max [Numeric] default = 1.0
  # @param color [:slate, :indigo, :red, :green, :blue]
  def initialize(value:, min: 0.0, max: 1.0, color: :indigo)
    super()
    @value = value
    @min = min
    @max = max
    @color = color
  end

  # @return [String]
  def width
    percent = (Float(@value - @min) / Float(@max - @min)).clamp(0.0, 1.0)
    "#{(percent * 100).round}%"
  end
end
