from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import psycopg2

app = FastAPI()

origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Hello, World! This is the root!!!"}

# @app.get("/traits")
# def traits():
#     try:
#         conn = psycopg2.connect(database="tftset9",
#                             host="/var/run/postgresql",
#                             user="justinli",
#                             password="",
#                             port="5432")
#         print("Database Connected Successfully")
#     except:
#         print("I am unable to connect to the database")
#     cur = conn.cursor()
#     cur.execute('SELECT * FROM traits_midset ORDER BY id;')
#     ftraits = cur.fetchall()
#     traits = []
#     for ftrait in ftraits:
#         [id, name, isClass, isLegendary] = ftrait
#         type = "Class" if isClass else "Origin"
#         trait = {
#             "id": id,
#             "name": name,
#             "type": type,
#             "isLegendary": isLegendary
#         }
#         traits.append(trait)
#     conn.close()
#     return traits

@app.get("/origins")
def origins():
    try:
        conn = psycopg2.connect(database="tftset9",
                            host="/var/run/postgresql",
                            user="justinli",
                            password="",
                            port="5432")
        print("Database Connected Successfully")
    except:
        print("I am unable to connect to the database")
    cur = conn.cursor()
    cur.execute('SELECT * FROM traits_midset WHERE class IS NULL ORDER BY id ;')
    ftraits = cur.fetchall()
    origins = []
    for ftrait in ftraits:
        [id, name, isClass, isLegendary] = ftrait
        trait = {
            "id": id,
            "name": name,
            "isLegendary": isLegendary
        }
        origins.append(trait)
    conn.close()
    return origins

@app.get("/classes")
def classes():
    try:
        conn = psycopg2.connect(database="tftset9",
                            host="/var/run/postgresql",
                            user="justinli",
                            password="",
                            port="5432")
        print("Database Connected Successfully")
    except:
        print("I am unable to connect to the database")
    cur = conn.cursor()
    cur.execute('SELECT * FROM traits_midset WHERE class IS NOT NULL ORDER BY id;')
    ftraits = cur.fetchall()
    classes = []
    for ftrait in ftraits:
        [id, name, isClass, isLegendary] = ftrait
        trait = {
            "id": id,
            "name": name,
            "isLegendary": isLegendary
        }
        classes.append(trait)
    conn.close()
    return classes

@app.get("/champions")
def champions():

    conn = psycopg2.connect(database="tftset9",
                        host="/var/run/postgresql",
                        user="justinli",
                        password="",
                        port="5432")
    print("Database Connected Successfully")
    
    cur = conn.cursor()
    cur.execute('SELECT * FROM champions_midset ORDER BY name;')
    fchampions = cur.fetchall()
    champions = []

    for fchampion in fchampions:
        # Finds champion_id, name, cost
        [champion_id, name, cost, type_id] = fchampion

        # Finds traits
        cur.execute(f'SELECT * FROM champion_traits_midset WHERE champion_id={champion_id};')
        fchampiontraits = cur.fetchall()
        traits = {"origins": [], "classes": []}
        for fchampiontrait in fchampiontraits:
            trait_id = fchampiontrait[1]
            cur.execute(f'SELECT * FROM traits_midset WHERE id={trait_id};')
            ftrait = cur.fetchone()
            [trait_name, isClass] = [ftrait[1], ftrait[2]]
            if (isClass):
                traits["classes"].append(trait_name)
            else:
                traits["origins"].append(trait_name)
        
        # Finds type
        cur.execute(f'SELECT * FROM champion_types WHERE id={type_id}')
        ftype = cur.fetchone()
        [damage, role] = [ftype[1], ftype[2]]
        type = [damage, role]

        champion = {
            "champion_id": champion_id,
            "name": name,
            "cost": cost,
            "traits": traits,
            "type": type   
        }
        champions.append(champion)
    conn.close()
    return champions

# @app.get("/champions/{champion_id}")
# def champion(champion_id: int):
#     try:
#         conn = psycopg2.connect(database="tftset9",
#                             host="/var/run/postgresql",
#                             user="justinli",
#                             password="",
#                             port="5432")
#         print("Database Connected Successfully")
#     except:
#         print("I am unable to connect to the database")
#     cur = conn.cursor()
#     cur.execute(f'SELECT * FROM champions WHERE id={champion_id};')
#     fchampion = cur.fetchone()

#     [id, name, cost, ftype] = fchampion
#     cur.execute(f'SELECT * FROM champion_traits WHERE champion_id={champion_id};')
#     fchampiontraits = cur.fetchmany(size=3)
#     traits = {"origins": [], "classes": []}
#     for trait in fchampiontraits:
#         trait_id = trait[1]
#         cur.execute(f'SELECT * FROM traits WHERE id={trait_id};')
#         ftrait = cur.fetchone()
#         [trait_name, isClass] = [ftrait[1], ftrait[2]]
#         if (isClass == True):
#             traits["classes"].append(trait_name)
#         else:
#             traits["origins"].append(trait_name)
    
#     cur.execute(f'SELECT * FROM champion_types WHERE id={fchampion[3]}')
#     ftype = cur.fetchone()
#     [damage, role] = [ftype[1], ftype[2]]
#     type = [damage, role]
#     conn.close()
    
#     champion = {
#         "champion_id": id,
#         "name": name,
#         "cost": cost,
#         "traits": traits,
#         "type": type   
#     }
#     return champion




        

