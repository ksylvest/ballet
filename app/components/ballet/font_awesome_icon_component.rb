# frozen_string_literal: true

# @example
#   <%= render Ballet::FontAwesomeIconComponent.new(icon: "star", size: "2xl", pack: "solid") %>
class Ballet::FontAwesomeIconComponent < ViewComponent::Base
  # @param icon [String] e.g. "star"
  # @param family [String] e.g. "classic", "duotone", "sharp", etc.
  # @param pack [String] e.g. "solid", "regular", etc.
  # @param size ["2xs", "xs", "sm", "lg", "xl", "2xl"]
  # @param animation ["spin", "pulse", ...]
  def initialize(icon:, size: nil, family: nil, pack: "solid", animation: nil)
    super()
    @icon = icon
    @pack = pack
    @size = size
    @family = family
    @animation = animation
  end

  # @return [String]
  def style
    classes.join(" ")
  end

  # @return [Array<String>]
  def classes
    classes = ["fa-#{@pack} fa-#{@icon}"]
    classes << "fa-#{@size}" if @size
    classes << "fa-#{@family}" if @family
    classes << "fa-#{@animation}" if @animation
    classes
  end
end
