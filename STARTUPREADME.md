Database

1. Start postgres service / Database:
   sudo service postgresql start

2. Enter password:
   b\***\*\*\*\*\***
   (To access database, psql tftset9)

Backend

1. Enter Virtual environment:
   source venv/bin/activate

2. Start backend server (from within venv):
   uvicorn main:app --reload

To Leave Virtual Environment:
deactivate

1. React Front End
   npm start
