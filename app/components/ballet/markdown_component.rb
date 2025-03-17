# frozen_string_literal: true

class Ballet::MarkdownComponent < ViewComponent::Base
  def initialize(form: nil, name: nil, **options)
    super
    @form = form
    @name = name
    @options = options
  end
end
