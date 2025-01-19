from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Required for flash messages

# Dummy user data for authentication
users = {
    "aswinraj868@gmail.com": "password123"
}

@app.route('/')
def home():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    email = request.form.get('email')
    password = request.form.get('password')
    
    if email in users and users[email] == password:
        return f"Welcome, {email}!"  # Placeholder for a dashboard or homepage
    else:
        flash("Invalid email or password. Please try again.", "error")
        return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)