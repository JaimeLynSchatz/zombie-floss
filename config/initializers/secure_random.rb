secret = Rails.env.production? ? ENV['SECRET_TOKE'] : "top_secret_token"
YourApp::Application.config.secret_key_base = secret
