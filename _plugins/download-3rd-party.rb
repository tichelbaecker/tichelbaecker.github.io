# Replaces {{version}} placeholders in third_party_libraries URLs with actual version numbers.

require "jekyll"

module ThirdPartyLibraries
  def self.replace_versions(obj, version = nil)
    case obj
    when Hash
      version = obj["version"].to_s if obj.key?("version")
      replaced = {}
      obj.each do |key, value|
        replaced[key] = (key == "version") ? value : replace_versions(value, version)
      end
      replaced
    when Array
      obj.map { |item| replace_versions(item, version) }
    when String
      version ? obj.gsub("{{version}}", version) : obj
    else
      obj
    end
  end
end

Jekyll::Hooks.register :site, :after_init do |site|
  if site.config.key?("third_party_libraries")
    site.config["third_party_libraries"] = ThirdPartyLibraries.replace_versions(site.config["third_party_libraries"])
  end
end
