# Detect malicus force requests and ban.
class Rack::Attack

  Rack::Attack.safelist('allow from localhost') do |request|
    '127.0.0.1' == request.ip || '::1' == request.ip
  end

  Rack::Attack.blocklist('Allow2ban login scrapers') do |request|
    Rack::Attack:Allow2ban.filter(request.ip, maxretry: 20, findtime: 30.seconds, bantime: 1.hour) do
      request.path == 'api/v1/auth' and request.post?
    end
  end
end
