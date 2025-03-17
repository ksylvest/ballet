# frozen_string_literal: true

# @example
#   <%= render(Ballet::Pagination::LinkComponent.new(path: "/path")) { "..." } %>
class Ballet::Pagination::LinkComponent < Ballet::Pagination::ItemComponent
  BASE_CLASSES = %w[
    text-slate-600
    hover:bg-slate-100
  ].freeze

  # @param path [String]
  # @param rounded ["l", "r", nil]
  # @param options [Hash]
  def initialize(path:, rounded: nil, **options)
    super(rounded:)
    @path = path
    @options = options
  end

  # @return [Array<String>]
  def classes
    super + BASE_CLASSES
  end
end
