# frozen_string_literal: true

# @example
#  <%= render(Ballet::CardComponent.new) do |component| %>
#    <% component.with_header { "Header" } %>
#    <% component.with_footer { "Footer" } %>
#    Content
#  <% end %>
class Ballet::ModalComponent < ViewComponent::Base
  renders_one :header, Ballet::Modal::HeaderComponent
  renders_one :footer, Ballet::Modal::FooterComponent
end
