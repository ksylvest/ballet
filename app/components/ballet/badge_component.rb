# frozen_string_literal: true

# @example
#   <%= render(Ballet::BadgeComponent.new(color: :slate)) do %>
#     Hello!
#   <% end %>
class Ballet::BadgeComponent < ViewComponent::Base
  module Color
    SLATE = :slate
    INDIGO = :indigo
    RED = :red
    GREEN = :green
    BLUE = :blue
  end

  # @param color [:slate, :red, :green, :blue] optional
  def initialize(color: :slate)
    super()
    @color = color
  end

  # @return [String]
  def style
    case @color
    when Color::SLATE then "ballet__badge ballet__badge--slate"
    when Color::INDIGO then "ballet__badge ballet__badge--indigo"
    when Color::RED then "ballet__badge ballet__badge--red"
    when Color::GREEN then "ballet__badge ballet__badge--green"
    when Color::BLUE then "ballet__badge ballet__badge--blue"
    end
  end
end
