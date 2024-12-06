from flask import Flask, render_template

app = Flask(__name__)

# Player data
players = {
    "rebbant": {"name": "Rebbant", "matches": 300, "wins": 250, "mvps": 100, "accuracy": "95%", "highlights": 20},
    "ipasky": {"name": "Ipasky", "matches": 280, "wins": 200, "mvps": 80, "accuracy": "92%", "highlights": 18},
    "quequinol": {"name": "Quequinol", "matches": 320, "wins": 270, "mvps": 120, "accuracy": "96%", "highlights": 25},
    "arnalez": {"name": "Arnalez", "matches": 290, "wins": 220, "mvps": 90, "accuracy": "93%", "highlights": 22},
    "greys": {"name": "Greys", "matches": 310, "wins": 260, "mvps": 110, "accuracy": "94%", "highlights": 24},
}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/player/<player_name>')
def player_profile(player_name):
    player = players.get(player_name)
    if not player:
        return "<h1>Player not found!</h1>", 404
    return render_template('player.html', player=player)

if __name__ == "__main__":
    app.run(debug=True, host='192.168.1.65')
