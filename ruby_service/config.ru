require 'sinatra'

set :bind, '0.0.0.0'
set :port, 9017

run Sinatra.new {
  get '/ruby' do
    headers 'Access-Control-Allow-Origin' => '*'
    'Package Being Served From Ruby!'
  end
}