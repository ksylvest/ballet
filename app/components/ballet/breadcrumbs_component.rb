# frozen_string_literal: true

# @example
#   <%= render(Ballet::BreadcrumbsComponent.new) do |component| %>
#     <% component.with_item(href: "/") { "Home" } %>
#     <% component.with_item(href: "/projects") { "Projects" } %>
#     <% component.with_item { "Manhattan" } %>
#   <% end %>
class Ballet::BreadcrumbsComponent < ViewComponent::Base
  renders_many :items, Ballet::Breadcrumbs::ItemComponent
end
