FROM ruby:latest
WORKDIR /app
COPY config.ru .
RUN gem install sinatra rackup puma
CMD ["rackup", "-o", "0.0.0.0", "-p", "9017"]
