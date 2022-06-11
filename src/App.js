import './App.css';
import React, {useState, useEffect} from 'react'
import BAR3 from "./Reel/3xBAR.png" // relative path to image 
import BAR from "./Reel/BAR.png" // relative path to image 
import BAR2 from "./Reel/2xBAR.png" // relative path to image 
import SEVEN from "./Reel/7.png" // relative path to image 
import CHERRY from "./Reel/Cherry.png" // relative path to image 

const App = ({id, owned, close, expires}) => {
    //final adjustments after spinning
    const finalAdjustments = [120, 240]

    const [spin, setSpin] = useState(false)

    // ring1 for reel1, ring2 for reel2, .....
    // ring is random number decides how many times the spin will rotate
    const [ring1, setRing1] = useState()
    const [ring2, setRing2] = useState()
    const [ring3, setRing3] = useState()

    // default balance
    const [balance, setBalance] = useState(1000)

    // Reel Symbols. Each reel has 5 symbols
    const [reelSymbols, setReelSymbols] = useState([BAR3, BAR, BAR2, SEVEN, CHERRY])

    useEffect(() => {
        win()
    }, [ring3])


function reel1() {
        // to move up after spin (to adjust to particular slots (Top-Center-Bottom))
        const moveIndex = Math.round(Math.random() * finalAdjustments.length);
        const moveUp = finalAdjustments[moveIndex]

        if (!spin) {
        // default slots before any spinning
        return (
            <>
            {reelSymbols.map((symbol) => 
                    <div className="ringEnd"><img src = {symbol} alt="symbol" /></div>
            )}
            </>
                )
        } else if (spin && ring1 === undefined) {
        // while spinnig. Show SEVEN and CHERRY series
        return (
            <>
                <div className="ringMoving"><img src = {SEVEN} alt="SEVEN" /></div>
                <div className="ringMoving"><img src = {CHERRY} alt="CHERRY" /></div>
                <div className="ringMoving"><img src = {SEVEN} alt="SEVEN" /></div>
                <div className="ringMoving"><img src = {CHERRY} alt="CHERRY" /></div>
                <div className="ringMoving"><img src = {SEVEN} alt="SEVEN" /></div>
                <div className="ringMoving"><img src = {CHERRY} alt="CHERRY" /></div>
            </>
                )
        } else if (ring1 >= 1 && ring1 <= 20 ){
            // 1 rotate
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
            // 2 rotates
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
            // 3 rotates
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
            // 4 rotates
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
            // 5 rotates
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

        const moveIndex = Math.round(Math.random() * finalAdjustments.length);
        const moveUp = finalAdjustments[moveIndex]

    if (!spin) {
            
        return (
            <>
            {reelSymbols.map((symbol) => 
                    <div className="ringEnd"><img src = {symbol} alt="symbol" /></div>
            )}
            </>
                )
        } else if (spin && ring2 === undefined) {
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

    const moveIndex = Math.round(Math.random() * finalAdjustments.length);
    const moveUp = finalAdjustments[moveIndex]
        
    if (!spin) {
            
        return (
            <>
            {reelSymbols.map((symbol) => 
                    <div className="ringEnd"><img src = {symbol} alt="symbol" /></div>
            )}
            </>
                )
        } else if (spin && ring3 === undefined) {
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
    // Calculate results To be implemented
      var prize=0;


  }

 function rand() {
      let ring1 = Math.floor(Math.random() * (100))
      let ring2 = Math.floor(Math.random() * (100))
      let ring3 = Math.floor(Math.random() * (100))
      setRing1(ring1)
      setTimeout(function(){setRing2(ring2)}, 500)
      setTimeout(function(){setRing3(ring3)}, 1000)
    }

function play() {
    var cost = 1;
    if (ring3 > 1 || !spin){
    if (cost <= balance && cost >= 1){
    setSpin(true)
    setRing1()
    setRing2()
    setRing3()
    setBalance(balance - cost)
    setTimeout(function(){
   rand()
    }, 2000)

}

}
}


const getBalanceInput = (event)=>{
    setBalance(event.target.value)
};


    return (
        <div className="fullSlot">
        <h1 className="casinoName">JS Test Task Source</h1>
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

        <div className="slotFoot">
        <button className="spinButton" onClick={() => play()}>Spin</button>
        </div>
        <h1>{"Set Starting Balance: "} <input  type="text" pattern="[0-9]*" onChange={getBalanceInput} /></h1>

        <h1>{"Available cash: "+ balance}</h1>
        </div>
        
    )
}

export default App;
