# CHAT WITH FAYE

simple chat app built with ruby on rails and faye

## run the app

install the gems
```
bundle
```
create the database and run the migrations
```
bundle exec rake db:create
bundle exec rake db:migrate
```
run the Faye server
```
rackup faye.ru -s thin -E production
```
run the Rails server
```
rails s
```

Enjoy!

