module ApplicationHelper
require 'httparty'

  def broadcast(message)
    url = 'http://localhost:9292/faye'
    headers = {"Content-Type"=>"application/json"}
    body = {
      "channel" => "/foo",
      "data" => message
     }.to_json
    faye_reponse =
      HTTParty.post(url,
        headers: headers,
        body: body
      )
  end
end