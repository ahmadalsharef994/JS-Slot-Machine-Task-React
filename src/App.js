import './App.css';
import React, {useState, useEffect} from 'react'
import BAR3 from "./Reel/3xBAR.png" // relative path to image 
import BAR from "./Reel/BAR.png" // relative path to image 
import BAR2 from "./Reel/2xBAR.png" // relative path to image 
import SEVEN from "./Reel/7.png" // relative path to image 
import CHERRY from "./Reel/Cherry.png" // relative path to image 

const App = ({id, owned, close, expires}) => {
    const finalAdjustments = [120, 240]
    const moveIndex = Math.round(Math.random() * finalAdjustments.length);
    const moveUp = finalAdjustments[moveIndex]
    console.log(moveUp)

    const [spin, setSpin] = useState(false)
    const [ring1, setRing1] = useState()
    const [ring2, setRing2] = useState()
    const [ring3, setRing3] = useState()
    const [price, setPrice] = useState()
    const [input, setInput] = useState(1)
    const [realBet, setRealBet] = useState()
    const [jackpot, setJackpot] = useState(1)
    const [balance, setBalance] = useState(5000)

    const [reelSymbols, setReelSymbols] = useState([BAR3, BAR, BAR2, SEVEN, CHERRY])

    useEffect(() => {
        win()
    }, [ring3])


function reel1() {

        if (!spin) {
            
        return (
            <>
            {reelSymbols.map((symbol) => 
                    <div className="ringEnd"><img src = {symbol} alt="symbol" /></div>
            )}
            </>
                )
        } else if (spin && ring1 === undefined) {
        return (
            <>
                <div className="ringMoving"><img src = {BAR} alt="BAR" /></div>
                <div className="ringMoving"><img src = {CHERRY} alt="CHERRY" /></div>
                <div className="ringMoving"><img src = {BAR} alt="BAR" /></div>
                <div className="ringMoving"><img src = {CHERRY} alt="CHERRY" /></div>
                <div className="ringMoving"><img src = {BAR} alt="BAR" /></div>
                <div className="ringMoving"><img src = {CHERRY} alt="CHERRY" /></div>
            </>
                )
        } else if (ring1 >= 1 && ring1 <= 20 ){
            const temp = [...reelSymbols];
            temp.pop()
            temp.unshift(reelSymbols[4])
            
            return (
            < div style ={{ position: "relative", bottom:`${moveUp}px`}} >
            {temp.map((symbol) => 
                    <div className="ringEnd"><img src = {symbol} alt="symbol" /></div>
            )}
            </div>
            )
        } else if (ring1 >= 20 && ring1 <= 40 ){
            const temp = [...reelSymbols];
            temp.pop()
            temp.pop()
            temp.unshift(reelSymbols[4])
            temp.unshift(reelSymbols[3])
            return (
            < div style ={{ position: "relative", bottom:`${moveUp}px`}} >
            {temp.map((symbol) => 
                    <div className="ringEnd"><img src = {symbol} alt="symbol" /></div>
            )}
            </div>
            )
        } else if (ring1 >= 40 && ring1 <= 60 ){
            const temp = [...reelSymbols];
            temp.pop()
            temp.pop()
            temp.pop()
            temp.unshift(reelSymbols[4])
            temp.unshift(reelSymbols[3])
            temp.unshift(reelSymbols[2])
            return (
            < div style ={{ position: "relative", bottom:`${moveUp}px`}} >
            {temp.map((symbol) => 
                    <div className="ringEnd"><img src = {symbol} alt="symbol" /></div>
            )}
            </div>
            )
        } else if (ring1 >= 60 && ring1 <= 80 ){
            const temp = [...reelSymbols];
            temp.pop()
            temp.pop()
            temp.pop()
            temp.pop()
            temp.unshift(reelSymbols[4])
            temp.unshift(reelSymbols[3])
            temp.unshift(reelSymbols[2])
            temp.unshift(reelSymbols[1])
            return (
            < div style ={{ position: "relative", bottom:`${moveUp}px`}} >
            {temp.map((symbol) => 
                    <div className="ringEnd"><img src = {symbol} alt="symbol" /></div>
            )}
            </div>
            )
        } else if (ring1 >= 80 && ring1 <= 100 ){
            const temp = [...reelSymbols];
            return (
            < div style ={{ position: "relative", bottom:`${moveUp}px`}} >
            {temp.map((symbol) => 
                    <div className="ringEnd"><img src = {symbol} alt="symbol" /></div>
            )}
            </div>
            )
        }

    }

function reel2() {
    if (!spin) {
            
        return (
            <>
            {reelSymbols.map((symbol) => 
                    <div className="ringEnd"><img src = {symbol} alt="symbol" /></div>
            )}
            </>
                )
        } else if (spin && ring2 == undefined) {
        return (
            <>
                <div className="ringMoving"><img src = {BAR} alt="BAR" /></div>
                <div className="ringMoving"><img src = {CHERRY} alt="CHERRY" /></div>
                <div className="ringMoving"><img src = {BAR} alt="BAR" /></div>
                <div className="ringMoving"><img src = {CHERRY} alt="CHERRY" /></div>
                <div className="ringMoving"><img src = {BAR} alt="BAR" /></div>
                <div className="ringMoving"><img src = {CHERRY} alt="CHERRY" /></div>
            </>
                )
        } else if (ring2 >= 1 && ring2 <= 20 ){
            const temp = [...reelSymbols];
            temp.pop()
            temp.unshift(reelSymbols[4])
            return (
            < div style ={{ position: "relative", bottom:`${moveUp}px`}} >
            {temp.map((symbol) => 
                    <div className="ringEnd"><img src = {symbol} alt="symbol" /></div>
            )}
            </div>
            )
        } else if (ring2 >= 20 && ring2 <= 40 ){
            const temp = [...reelSymbols];
            temp.pop()
            temp.pop()
            temp.unshift(reelSymbols[4])
            temp.unshift(reelSymbols[3])
            return (
            < div style ={{ position: "relative", bottom:`${moveUp}px`}} >
            {temp.map((symbol) => 
                    <div className="ringEnd"><img src = {symbol} alt="symbol" /></div>
            )}
            </div>
            )
        } else if (ring2 >= 40 && ring2 <= 60 ){
            const temp = [...reelSymbols];
            temp.pop()
            temp.pop()
            temp.pop()
            temp.unshift(reelSymbols[4])
            temp.unshift(reelSymbols[3])
            temp.unshift(reelSymbols[2])
            return (
            < div style ={{ position: "relative", bottom:`${moveUp}px`}} >
            {temp.map((symbol) => 
                    <div className="ringEnd"><img src = {symbol} alt="symbol" /></div>
            )}
            </div>
            )
        } else if (ring2 >= 60 && ring2 <= 80 ){
            const temp = [...reelSymbols];
            temp.pop()
            temp.pop()
            temp.pop()
            temp.pop()
            temp.unshift(reelSymbols[4])
            temp.unshift(reelSymbols[3])
            temp.unshift(reelSymbols[2])
            temp.unshift(reelSymbols[1])
            return (
            < div style ={{ position: "relative", bottom:`${moveUp}px`}} >
            {temp.map((symbol) => 
                    <div className="ringEnd"><img src = {symbol} alt="symbol" /></div>
            )}
            </div>
            )
        } else if (ring2 >= 80 && ring2 <= 100 ){
            const temp = [...reelSymbols];
            return (
            < div style ={{ position: "relative", bottom:`${moveUp}px`}} >
            {temp.map((symbol) => 
                    <div className="ringEnd"><img src = {symbol} alt="symbol" /></div>
            )}
            </div>
            )
        }
        
    }

function reel3() {
    if (!spin) {
            
        return (
            <>
            {reelSymbols.map((symbol) => 
                    <div className="ringEnd"><img src = {symbol} alt="symbol" /></div>
            )}
            </>
                )
        } else if (spin && ring3 == undefined) {
        return (
            <>
                <div className="ringMoving"><img src = {BAR} alt="BAR" /></div>
                <div className="ringMoving"><img src = {CHERRY} alt="CHERRY" /></div>
                <div className="ringMoving"><img src = {BAR} alt="BAR" /></div>
                <div className="ringMoving"><img src = {CHERRY} alt="CHERRY" /></div>
                <div className="ringMoving"><img src = {BAR} alt="BAR" /></div>
                <div className="ringMoving"><img src = {CHERRY} alt="CHERRY" /></div>
            </>
                )
        } else if (ring3 >= 1 && ring3 <= 20 ){
            const temp = [...reelSymbols];
            temp.pop()
            temp.unshift(reelSymbols[4])
            return (
            < div style ={{ position: "relative", bottom:`${moveUp}px`}} >
            {temp.map((symbol) => 
                    <div className="ringEnd"><img src = {symbol} alt="symbol" /></div>
            )}
            </div>
            )
        } else if (ring3 >= 20 && ring3 <= 40 ){
            const temp = [...reelSymbols];
            temp.pop()
            temp.pop()
            temp.unshift(reelSymbols[4])
            temp.unshift(reelSymbols[3])
            return (
            < div style ={{ position: "relative", bottom:`${moveUp}px`}} >
            {temp.map((symbol) => 
                    <div className="ringEnd"><img src = {symbol} alt="symbol" /></div>
            )}
            </div>
            )
        } else if (ring3 >= 40 && ring3 <= 60 ){
            const temp = [...reelSymbols];
            temp.pop()
            temp.pop()
            temp.pop()
            temp.unshift(reelSymbols[4])
            temp.unshift(reelSymbols[3])
            temp.unshift(reelSymbols[2])
            return (
            < div style ={{ position: "relative", bottom:`${moveUp}px`}} >
            {temp.map((symbol) => 
                    <div className="ringEnd"><img src = {symbol} alt="symbol" /></div>
            )}
            </div>
            )
        } else if (ring3 >= 60 && ring3 <= 80 ){
            const temp = [...reelSymbols];
            temp.pop()
            temp.pop()
            temp.pop()
            temp.pop()
            temp.unshift(reelSymbols[4])
            temp.unshift(reelSymbols[3])
            temp.unshift(reelSymbols[2])
            temp.unshift(reelSymbols[1])
            return (
            < div style ={{ position: "relative", bottom:`${moveUp}px`}} >
            {temp.map((symbol) => 
                    <div className="ringEnd"><img src = {symbol} alt="symbol" /></div>
            )}
            </div>
            )
        } else if (ring3 >= 80 && ring3 <= 100 ){
            const temp = [...reelSymbols];
            return (
            < div style ={{ position: "relative", bottom:`${moveUp}px`}} >
            {temp.map((symbol) => 
                    <div className="ringEnd"><img src = {symbol} alt="symbol" /></div>
            )}
            </div>
            )
        }
    }

function win() {
      var prize=0;

/*       if (ring1 <= 40 && ring2 <= 40 && ring3 <= 40 && ring1 != undefined) {
          setPrice(1)
      } else if (ring1 > 50 && ring1 <= 75 && ring2 > 50 && ring2 <= 75 && ring3 > 50 && ring3 <= 75 && ring1 != undefined) {
          setPrice(2)
      } else if (ring1 > 75 && ring1 <= 95 && ring2 > 75 && ring2 <= 95 && ring3 > 75 && ring3 <= 95 && ring1 != undefined) {
          setPrice(3)
      } else if (ring1 > 95 && ring1 <= 100 && ring2 > 95 && ring2 <= 100 && ring3 > 95 && ring3 <= 100 && ring1 != undefined) {
          setPrice(4)
      } else {
          setPrice(0)
      }  */
  }

 function rand() {
      let ring1 = Math.floor(Math.random() * (100))
      let ring2 = Math.floor(Math.random() * (100))
      let ring3 = Math.floor(Math.random() * (100))


      setRing1(ring1)
      setTimeout(function(){setRing2(ring2)}, 100)
      setTimeout(function(){setRing3(ring3)}, 200)
    }

function play() {
    var input = 1;
    if (ring3 > 1 || !spin){
    if (input <= balance && input >= 1){
    setRealBet(input)
    setSpin(true)
    setRing1()
    setRing2()
    setRing3()
    setBalance(balance - input)
    // setJackpot(jackpot + (input / 2))
    setTimeout(function(){
   rand()
    }, 2000)
    // console.log(ring1)
    // console.log(ring2)
    // console.log(ring3)
} else {
    setPrice(10)
}

}
}


/* function premio() {
    if (price === 1 && ring3 > 1) {
        return (
        <p className="priceInd">{"🍇 X15 You've won " + (realBet * 15) + "€!"}</p>
        )
    } else if (price === 2 && ring3 > 1) {
        return (
            <p className="priceInd">{"🍊 X20 You've won " + (realBet * 20) + "€!"}</p>
            )
    } else if (price === 3 && ring3 > 1) {
        return (
            <p className="priceInd">{"🥭 X25 You've won " + (realBet * 25) + "€!"}</p>
            )
    } else if (price === 4 && ring3 > 1) {
        return (
            <p className="priceInd">{"🍓 Jackpot! You've won: " + (jackpot) + "€!"}</p>
            )
    } else if (price === 0 && ring3 > 1) {
        return (
            <p className="priceInd">😧 ¡So close! But no luck...</p>
            )
    } else if (price === 10) {
        return (
            <p className="priceInd">🥶 <span style={{color: `red`}}>Not enough funds</span> </p>
            )
}
} */
/* 
function numChecker(e) {
    const value = e.target.value;
    const regex = /^[0-9]+$/;
    if (value.match(regex) && parseInt(value) >= 0 || value === "") {
        setInput(value);
    }
} */



const getBalanceInpute = (event)=>{
    setBalance(event.target.value)
};


    return (
        <div className="fullSlot">
        <h1 className="casinoName">JS Test Task Source</h1>
        {/* <h1 className="price">{"Jackpot: " + jackpot + "€"}</h1> */}
        <div className="slot">
        <div className="reel">
        {reel1()}
        </div>
        <div className="reel">
        {reel2()}
        </div>
        <div className="reel">
        {reel3()}
        </div>
        </div>
        {/* <h1 className="price">
        {premio()}
        </h1> */}
        <div className="slotFoot">
        {/* <input value={input} type="number" onChange={(e) => numChecker(e)} className="betInput" placeholder="1"></input> */}
        <button className="spinButton" onClick={() => play()}>Spin</button>
        </div>
        <h1>{"Set Starting Balance: "} <input  type="text" pattern="[0-9]*" onChange={getBalanceInpute} /></h1>

        <h1>{"Available cash: "+ balance}</h1>
        {/* <button onClick={() => setBalance(balance + 1000)} className="buyMoreButton">Add 1000 €</button> */}
        </div>
        
    )
}

export default App;
