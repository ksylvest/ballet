# frozen_string_literal: true

class Ballet::Form::TextFieldComponent < ViewComponent::Base
  BASE_STYLE = "block w-full rounded border px-3 py-2 outline-none ring-0 transition focus:ring-4"
  DEFAULT_STYLE = "border-slate focus:border-indigo-500 focus:ring-indigo-300"

  # @param name [String]
  # @param method [String]
  def initialize(name, method, **options)
    super()
    @name = name
    @method = method
    @options = options
  end

  def style
    "#{BASE_STYLE} #{DEFAULT_STYLE}"
  end

  def call
    ActionView::Helpers::Tags::TextField.new(@name, @method)
  end
end
