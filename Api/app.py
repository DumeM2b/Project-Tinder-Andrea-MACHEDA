from flask import Flask, jsonify
from flask import Flask, render_template, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def update_bio(firstname,i):
    chemin_fichier =f"./Api/BiographyUsers/Bio{i}.txt"
    with open(chemin_fichier, 'r', encoding='utf-8') as fichier:
        bio = fichier.read()
    bio_modifiee = bio.replace("[firstname]", firstname)
    return bio_modifiee



@app.route('/user', methods=['GET'])
def get_user():
    url = 'https://randomuser.me/api/?results=10'
    response = requests.get(url)

    user_data = response.json()
    
    users_info = []
    i=1
    for user in user_data['results']:
        firstname=user['name']['first']

        user_info = {
            'id':i,
            'gender': user['gender'],
            'firstname': user['name']['first'],
            'lastname': user['name']['last'],
            'age': user['dob']['age'],
            'city': user['location']['city'],
            'country': user['location']['country'],
            'picture': user['picture']['large'],
            'bio': update_bio(firstname,i),
        }
        i+=1
        users_info.append(user_info)
    
    return jsonify(users_info)
    
   

@app.route('/home')
def home():
   
    
    return 



if __name__ == '__main__':
    app.run(debug=True)
