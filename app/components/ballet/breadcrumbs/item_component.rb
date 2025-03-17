# frozen_string_literal: true

class Ballet::Breadcrumbs::ItemComponent < ViewComponent::Base
  BASE_STYLE = "flex items-center gap-2 px-3 py-2"
  LINK_STYLE = "text-slate-600 hover:text-slate-800"
  SPAN_STYLE = "text-slate-800 font-medium"

  # @param href [String] optional
  def initialize(href: nil)
    super()
    @href = href
  end

  # @return [String]
  def style
    "#{BASE_STYLE} #{@href ? LINK_STYLE : SPAN_STYLE}"
  end
end
