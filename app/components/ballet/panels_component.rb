# frozen_string_literal: true

# @usage
#
#   render(Ballet::PanelsComponent.new) do |panels|
#     panels.with_pane("Tab #1") { "ABC..." }
#     panels.with_pane("Tab #2") { "DEF..." }
#     panels.with_pane("Tab #3") { "GHI..." }
#   end
class Ballet::PanelsComponent < ViewComponent::Base
  renders_many :panes
end
