body {
    margin: 0;
    background: #1B244A;
    font-family: 'Cursed Timer ULiL';
    text-align: center;
}

.container {
    display: flex;
    justify-content: space-around;
    padding: 50px 20px;
}

.column {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h3 {
    color: white;
    font-size: 40px;
    margin: 0 0 20px 0;
}

.score {
    background: #0a0001;
    font-size: 90px;
    color: #F94F6D;
    width: 155px;
    height: 120px;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 2px solid transparent;
    transition: border 0.3s ease;
}

.score.leading {
    border: 2px solid #FFC700;
    box-shadow: 0 0 15px rgba(255, 199, 0, 0.5);
}

button {
    background: none;
    border: 2px solid #9AABD8;
    border-radius: 5px;
    color: #9AABD8;
    font-size: 18px;
    font-weight: bold;
    padding: 10px 15px;
    margin: 5px;
    cursor: pointer;
    width: 45px;
    transition: all 0.2s ease;
}

button:hover {
    background: #9AABD8;
    color: #1B244A;
}

button:active {
    transform: scale(0.95);
}

#new-game-btn {
    margin-top: 30px;
    width: 150px;
    font-size: 20px;
    padding: 12px 20px;
}