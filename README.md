Spreadpool
==========

This is a Django (v3.1.13) / Angular (v7.0.4) / PostgreSQL (v11.2) project that powers the [NCAASpreadPool](https://www.ncaaspreadpool.com) site. It is currently deployed as a Heroku app at https://spreadpool.herokuapp.com. This site is used to manage a NCAA Tournament pool whereby players, upon registering, are assigned 4 random NCAA Tournament teams (one from each region). Depending on how a player's teams perform against the spread posted for each game, they may advance thru each round. Prize money is awarded to Final Four participants. Site features include:

- Registration and profile editing to modify/delete # of entries up until NCAA Tournament starts
- Standings updated in real-time to show which teams each player retains
- Results showing how each players team and/or which game & opposing player is up next
- Full brackets showing teams, spreads, and results (for games that have been played)
- Admin features to create/delete unlimited # of brackets (16 entries per bracket), assign registered entries to brackets, and update game results

## Installation (local)
To run a local version of this site:
1) Install [Python (V3.5.0+)](https://www.python.org/). PIP should be included with Python; if not, install PIP.
2) Create a new virtual environment
3) Switch to virtual environment directory
4) Activate virtual environment (activate.bat)
5) Create a new directory to contain this project; switch to that [project directory]
6) Copy contents of this repo to [project directory]
7) Install Django requirements by typing (requirements.txt should be in [project directory]):
```bash
pip install -r requirements.txt
```
8) Navigate to [project directory]/spreadpool/ directory
9) Run Django by typing:
```bash
python manage.py runserver
```
10) In your browser, navigate to http://127.0.0.1:8000/login/ to see login page

## Database Setup & Initialization
1) Install [PostgreSQL](https://www.postgresql.org/download/)
2) Create a new DB in postgreSQL
3) Navigate to the [project directory]/spreadpool/ directory. Type the following command to create needed Django tables:
```bash
python manage.py makemigrations
```
4) Type the following to setup the database:
```bash
python manage.py migrate
```
5) All raw data needed for initial setup is located within [project directory]/spreadpool/brackets/fixtures/ directory. Navigate to this directory.  Setup new tournment teams in team_setup.csv. region_setup.csv and game_setup.csv are other raw data files used.
6) Convert csv files to json files (i.e. Django fixtures) by typing the following three commands at the command line:
```bash
python csv2json.py region_setup.csv bracket.Region
python csv2json.py team_setup.csv bracket.Team
python csv2json.py game_setup.csv bracket.Game
```
7) Navigate back to [project directory]/spreadpool/ directory. Type the following three commands at the command line to populate the Django DB with json fixture data:
```bash
python manage.py loaddata region_setup.json
python manage.py loaddata team_setup.json
python manage.py loaddata game_setup.json
```

## Note about Django/Angular Setup
The majority of site functionality is contained with a single page Angular app called, 'front-end'. The Angular project directory is here: [front-end](spreadpool/bracket/front-end/). Django capabilities are used for the home, login, and sign-up pages (leveraging Django's native template, login authentication and password reset features). DjangoREST is used to provide all data via RESTful APIs to the Angular app. 

In order to deploy the Angular app within the Django project, Angular compiled JavaScript files must be created by typing the following command within the [project directory]/spreadpool/bracket/front-end/ directory:
```bash
ng build
```
* Note - "outputPath" setting within the angular.json file is updated to output files to the proper directory as follows:

```bash
{
  ...
  "projects": {
    "front-end": {
      ...
      "architect": {
        "build": {
          ...
          "options": {
            "outputPath": "../static/front-end",   <-- change this line
...
```

The compiled JavaScript files are loaded by the Django template, index.html file, upon user login at which point the Angular app is displayed to the user.  However, it was noticed that due to this unique deployment approach, several library links are not built correctly in the Angular production build file, styles.js.  Therefore, run the python script, [update_styles_js.py](spreadpool/bracket/static/update_styles_js.py), to fix links before deployment with the following command from [project directory]:

```bash
python3 ./bracket/static/update_styles_js.py ./bracket/static/front-end/styles.js
```

## Testing
In order the test the Angular project on its own vs. having to build the Angular project prior to testing from within the Django project, navigate to the [project directory]/spreadpool/bracket/front-end/ directory and type the following command to run the Angular "locally".  Django must be initiated as indicated in Installation step #9 (above) in order for the backend API endpoints to work properly
```bash
ng serve --proxy-config proxyconfig.json
```
This will run the Angular app (at http://localhost:4200) and will redirect all /api/ calls to http://127.0.0.1:8000 to 'find' the DjangoREST framework API endpoints.

## Contact Info
For questions or help using and/or setting up this project, contact:  
Paul Maurer  
paulrmaurer1@gmail.com