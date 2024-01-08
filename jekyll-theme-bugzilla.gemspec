# frozen_string_literal: true

Gem::Specification.new do |spec|
    spec.name     = "jekyll-theme-bugzilla"
    spec.version  = "0.1.0"
    spec.authors  = ["Bugzilla and contributors"]
    spec.summary  = "Jekyll theme for Bugzilla websites"
    spec.homepage = "https://bugzilla.org"
    spec.metadata    = { "source_code_uri" => "https://github.com/bugzilla/jekyll-theme" }
    spec.license  = "MPL-2.0"

    spec.files    = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(_includes|_layouts|_data|_scss|assets|robots|LICENSE|README)!i) }

    spec.add_runtime_dependency "jekyll"
    spec.add_runtime_dependency "jekyll-sitemap"

    spec.add_development_dependency "bundler"
end
