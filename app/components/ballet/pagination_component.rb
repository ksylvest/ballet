# frozen_string_literal: true

# @example
#  <%= render Ballet::PaginationComponent.new(Pagination: @Pagination, link: ->(page) { page_path(page: page) }) %>
class Ballet::PaginationComponent < ViewComponent::Base
  WINDOW_SIZE = 3
  INITIAL_PAGE = 1

  # !@attribute [r] page
  #   @return [Integer]
  attr_accessor :page

  # !@attribute [r] total_pages
  #   @return [Integer]
  attr_accessor :total_pages

  # !@attribute [r] next_page
  #   @return [Integer]
  attr_accessor :next_page

  # !@attribute [r] prev_page
  #   @return [Integer]
  attr_accessor :prev_page

  # @param page [Integer] optional
  # @param total_pages [Integer] required
  # @param link [Proc] required (e.g. ->(page) { page_path(page: page) })
  def initialize(page:, total_pages:, link:)
    super
    @page = page || INITIAL_PAGE
    @total_pages = total_pages
    @next_page = @page.next if @page < @total_pages
    @prev_page = @page.pred if @page > INITIAL_PAGE
    @link = link
  end

  # @return [Boolean]
  def prev_page?
    !@prev_page.nil?
  end

  # @return [Boolean]
  def next_page?
    !@next_page.nil?
  end

  # @return [Ballet::Pagination::ItemComponent]
  def prev_page_component
    if prev_page?
      Ballet::Pagination::LinkComponent.new(path: @link.call(@prev_page), aria: { label: "Prev" })
    else
      Ballet::Pagination::SpanComponent.new
    end
  end

  # @return [Ballet::Pagination::ItemComponent]
  def next_page_component
    if next_page?
      Ballet::Pagination::LinkComponent.new(path: @link.call(@next_page), aria: { label: "Next" })
    else
      Ballet::Pagination::SpanComponent.new
    end
  end

  # @return [Ballet::Pagination::CurrentComponent]
  def current_page_component
    Ballet::Pagination::CurrentComponent.new
  end

  # @param page [Integer]
  # @return [Ballet::Pagination::LinkComponent]
  def link_page_component(page:)
    Ballet::Pagination::LinkComponent.new(path: page_path(page:), aria: { label: "Page ##{page}" })
  end

  # @return [Ballet::PaginationSpanComponent]
  def truncated_ellipsis_component
    Ballet::Pagination::SpanComponent.new
  end

  # @return [String]
  def page_path(page:)
    @link.call((page unless page.eql?(INITIAL_PAGE)))
  end

  # @return [Range<Integer>]
  def l_window
    l_window_from..l_window_till
  end

  # @return [Range<Integer>]
  def r_window
    r_window_from..r_window_till
  end

  # @return [Boolean]
  def l_truncated?
    l_window_from > INITIAL_PAGE
  end

  # @return [Boolean]
  def r_truncated?
    r_window_till < total_pages
  end

private

  # @return [Integer]
  def l_window_from
    [page - WINDOW_SIZE, INITIAL_PAGE].max
  end

  # @return [Integer]
  def l_window_till
    page.pred
  end

  # @return [Integer]
  def r_window_from
    page.next
  end

  # @return [Integer]
  def r_window_till
    [page + WINDOW_SIZE, total_pages].min
  end
end
