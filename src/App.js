import React from 'react';
import './App.css';

function App() {
    function changeColor (){
        const contentBox = document.getElementById('content');
        contentBox.classList.toggle('content-alt-bg')
    }
    return (
    <>
    <header>
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="#news">About</a></li>
            <li class="dropdown">
                <a href="#" class="dropbtn">Projekty</a>
                <div class="dropdown-content">
                    <a href="liczby.html">Kalkulator Dat</a>
                </div>
            </li>
            <li class="dropdown">
                <a href="#" class="dropbtn">Polecane</a>
                <div class="dropdown-content">
                    <a href="http://ktorajestgodzina.tk">Która jest godzina?</a>
                    <a href="http://sebson.tk">Sebson</a>
                    <a href="http://cezario.tk">Cezario</a>
                    <a href="http://kamiltrojan.tk">Kamil Trojan</a>
                    <a href="https://boyfromzaun.tk/">BoyFromZaun</a>
                </div>
            </li>
        </ul>
    </nav>
</header>
<content>
    <div id="content">
        <p id="witaj">Witaj!</p>
        <span id="work">Strona Nadal Powstaje</span>
        <button onClick={changeColor}>Zmien kolor tła</button>
    </div>
</content>
</>
  );
}

export default App;
