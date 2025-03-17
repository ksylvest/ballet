# frozen_string_literal: true

class Ballet::ButtonComponent < ViewComponent::Base
  module Color
    SLATE = :slate
    INDIGO = :indigo
    RED = :red
    GREEN = :green
    BLUE = :blue
  end

  def initialize(color: :slate, **options)
    super
    @color = color
    @options = options
  end

  # @return [String]
  def style
    case @color
    when Color::SLATE then "ballet__button ballet__button--slate"
    when Color::INDIGO then "ballet__button ballet__button--indigo"
    when Color::RED then "ballet__button ballet__button--red"
    when Color::GREEN then "ballet__button ballet__button--green"
    when Color::BLUE then "ballet__button ballet__button--blue"
    end
  end
end
