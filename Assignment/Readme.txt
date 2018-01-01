This application containing an input field and a submit button to Fetch images from google and save top 15 images after 
passing through a compression algorithm then pass it through a black and white filter and upload all the images to a 
particular location.

## To run the application on your own Heroku account:##

1. Install the [Heroku Toolbelt](http://toolbelt.heroku.com)

2. [Sign up](http://heroku.com/signup) for a Heroku account

3. Login to Heroku from the `heroku` CLI:

        $ heroku login

4. Create a new app on Heroku:

        $ heroku create

5. Add the [MongoLab Heroku Add-on](http://addons.heroku.com/mongolab)

        $ heroku addons:add mongolab

6. Upload the app to Heroku:

        $ git push heroku master

7. Open the app in your browser:

        $ heroku open

		
		Install the dependencies

```sh
$ npm install
```

### Serve
To serve in the browser

```sh
$ npm start
```

