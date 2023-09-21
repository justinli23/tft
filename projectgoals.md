Full-stack Web app

1. Uses Riot's Data Dragon's static data (champion data + images) and Python backend with personally seeded PostgreSQL database (due to incomplete trait data on champions) for Set 9 of TFT.
2. Champion Tree (Frontend Deliverables)
   5 Levels for 1-5 cost champions, even (2 and 4) Levels are indented
   Level - row with champion hexes based on alphabetical name within cost tier

   Champions Hexes have Name + Sprite as background pic
   (on hover, replace name with detailed description, including Traits + [Damage Type + Role])
   Traits: (ie Yordle / Gunner)
   Damage Type + Role: (Attack / Carry)

   Trait Selector Functionality
   When selected, Line connects all champion hexes in selected trait in order of champion_id
   When selected champion is selected again = give outline effect for emphasis
   Active trait subtrees have unique colors

3. Database
   Champion Deck + Trait List
   "Shopping UI" for champions, filterable by search keyword and/or cost or filterable trait field, standard display with sorting methods as found in other websites.

7/24 Targets
Restructure champion_traits by separating multiple traits into different entries + order column (DONE)
Foreign Key Relationships (DONE)
Reseeding In progress, missing 3rd traits from some units... moving on for now. (DONE)
On 7/28
Substantial progress on front end:
Created containers for Active Filter Window + Trait Selector CSS and cleaned up layout. Removed list from view, may readd upon completion of trait web functionality.

7/31 Goals
Look at Fast API Learn how to set up a Python Backend to communicate with the PG database. (DONE)

8/1
psycopg2 setup to connect Python with postgresql db
Had to relearn some python tricks/nuances. 2 paths built Code could be cleaner.

Backend is coming along nicely, have the architecture to talk with the postgresql db. Next step is to test it by setting up the frontend for fetching
Also, need to rename components to make consistent (DONE)
Use champion sprites and center in hex [DONE]
Outline hexagon, somehow (clipped square). Likely with another clipped square that holds the hex. [DONE]

General Project Structure
FastAPI Backend
PG Database (complete)
React.js Frontend

ORMS: Tortoise and SQLAlchemy?
(pip is npm for python)
psycopg2 is database driver

Clean up code - fix prop drilling
Create a style for grayscale when trait filter are present but not relevant to champion []

GUI

09/22/2023

1. Use pgAdmin (GUI) alongside ElephantSQL to host the postgresql server [DONE]
2. Deploy backend with ?
3. Deploy frontend with Heroku
