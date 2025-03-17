# frozen_string_literal: true

# @example
#  <%= render(Ballet::CardComponent.new) do |component| %>
#    <% component.with_header { "Header" } %>
#    <% component.with_footer { "Footer" } %>
#    Content
#  <% end %>
class Ballet::CardComponent < ViewComponent::Base
  renders_one :header
  renders_one :footer
end
