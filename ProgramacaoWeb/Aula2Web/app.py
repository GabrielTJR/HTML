from flask import Flask, render_template, request, redirect, url_for, session, jsonify
import sqlite3

app = Flask(__name__)
app.secret_key = 'sua_chave_secreta'

def get_db_connection():
    conn = sqlite3.connect('users.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        
        conn = get_db_connection()
        user = conn.execute('SELECT * FROM users WHERE username = ? AND password = ?', (username, password)).fetchone()
        conn.close()

        if user:
            session['user_id'] = user['id']
            return jsonify({"success": True})
        else:
            return jsonify({"success": False})
    
    return render_template('login.html')

@app.route('/dashboard')
def dashboard():
    if 'user_id' in session:
        return "Bem-vindo ao dashboard!"
    else:
        return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)

import sqlite3

conn = sqlite3.connect('users.db')
c = conn.cursor()

# Criação da tabela de usuários
c.execute('''
    CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL
    )
''')

# Inserir um usuário de teste
c.execute('''
    INSERT INTO users (username, password) VALUES (?, ?)
''', ('admin', 'admin123'))

conn.commit()
conn.close()
