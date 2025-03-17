# frozen_string_literal: true

class Ballet::CodeComponent < ViewComponent::Base
  # @param code [String]
  # @param path [String] optional (e.g. "example.rb", "example.py", "example.js", "Dockerfile", ".dockerignore", etc)
  def initialize(code:, path: nil)
    super()
    @code = code
    @path = path
  end

  # @return [String]
  def html
    formatter = Rouge::Formatters::HTML.new
    lexer = Rouge::Lexer.find_fancy(kind, @code)
    formatter.format(lexer ? lexer.lex(@code) : @code).strip
  end

  # @return [String]
  def kind
    case @path
    when /\.rb\z/ then "rb"
    when /\.py\z/ then "py"
    when /\.js\z/ then "js"
    when /\.ts\z/ then "ts"
    when /\.sql\z/ then "sql"
    when /\.json\z/ then "json"
    when /\.html\z/ then "html"
    when /\.(markdown|md)\z/ then "markdown"
    when /\.(yaml|yml)\z/ then "yaml"
    when /Dockerfile\z/ then "dockerfile"
    end
  end
end
