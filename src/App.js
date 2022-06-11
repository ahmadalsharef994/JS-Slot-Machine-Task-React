import './App.css';
import React, {useState, useEffect} from 'react'
import BAR3 from "./Reel/3xBAR.png" // relative path to image 
import BAR from "./Reel/BAR.png" // relative path to image 
import BAR2 from "./Reel/2xBAR.png" // relative path to image 
import SEVEN from "./Reel/7.png" // relative path to image 
import CHERRY from "./Reel/Cherry.png" // relative path to image 

const App = () => {
    
    //final adjustments after spinning
    // 120px as bottom adjustment will make center empty and fill top&bottom
    const finalAdjustments = [120, 0]

    const [spin, setSpin] = useState(false)

    // ring1 for reel1, ring2 for reel2, .....
    // ring is random number decides how many times the spin will rotate
    const [ring1, setRing1] = useState()
    const [ring2, setRing2] = useState()
    const [ring3, setRing3] = useState()

    // default balance
    const [balance, setBalance] = useState(0)

    // Reel Symbols. Each reel has 5 symbols
    const [reelSymbols, setReelSymbols] = useState([BAR3, BAR, BAR2, SEVEN, CHERRY])

    useEffect(() => {
        win()
    }, [ring3])

function spinRingReel(symbols, ring) {
    if (ring === 100 || ring ===0) {
        return symbols;
    }
    const    rotates = Math.round(ring/20)
    
    console.log(rotates, ring)
    for (let i=0; i< rotates; i++) {
        symbols.pop()
        symbols.unshift(reelSymbols[4-i])
    }
    return symbols;
}

function reel1() {
        // to move up after spin (to adjust to particular slots (Top-Center-Bottom))

        const moveIndex = Math.round(Math.random() * finalAdjustments.length);
        const moveUp = finalAdjustments[moveIndex]

        if (!spin) {
        // default slots before any spinning
        return (
            <>
            {reelSymbols.map((symbol) => 
                    <div key={symbol} className="ringEnd"><img src = {symbol} alt="symbol" /></div>
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
        } else {
            const temp = [...reelSymbols];
            spinRingReel(temp, ring1)
            return (
                < div style ={{ position: "relative", bottom:`${moveUp}px`}} >
                {temp.map((symbol) => 
                        <div key={symbol} className="ringEnd"><img src = {symbol} alt="symbol" /></div>
                )}
                </div>
                )
        }
    }

function reel2() {
    const moveIndex = Math.round(Math.random() * finalAdjustments.length);
    const moveUp = finalAdjustments[moveIndex]

    if (!spin) {
        // default slots before any spinning
        return (
            <>
            {reelSymbols.map((symbol) => 
                    <div key={symbol} className="ringEnd"><img src = {symbol} alt="symbol" /></div>
            )}
            </>
                )
        } else if (spin && ring2 === undefined) {

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
        } else {
            const temp = [...reelSymbols];
            spinRingReel(temp, ring2)
            return (
                < div style ={{ position: "relative", bottom:`${moveUp}px`}} >
                {temp.map((symbol) => 
                        <div key={symbol} className="ringEnd"><img src = {symbol} alt="symbol" /></div>
                )}
                </div>
                )
        }
        
    }

function reel3() {

    const moveIndex = Math.round(Math.random() * finalAdjustments.length);
    const moveUp = finalAdjustments[moveIndex]

    if (!spin) {
        // default slots before any spinning
        return (
            <>
            {reelSymbols.map((symbol) => 
                    <div key={symbol} className="ringEnd"><img src = {symbol} alt="symbol" /></div>
            )}
            </>
                )
        } else if (spin && ring3 === undefined) {

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
        } else {
            const temp = [...reelSymbols];
            spinRingReel(temp, ring3)
            return (
                < div style ={{ position: "relative", bottom:`${moveUp}px`}} >
                {temp.map((symbol) => 
                        <div key={symbol} className="ringEnd"><img src = {symbol} alt="symbol" /></div>
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
    // if (ring3 > 1 || !spin){
    if (cost <= balance && cost >= 1){
    setSpin(true)
    setRing1()
    setRing2()
    setRing3()
    setBalance(balance - cost)
    setTimeout(function(){rand()}, 2000)
    
}

// }
}


const getBalanceInput = (event)=>{
    
    setBalance(event.target.value)
};

const randomizeArea = (even) => {
    setReelSymbols(reelSymbols
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value))
}


    return (
        <div className="debugArea">
        <h1 className="projectTitle">JS Test Task Source</h1>
        <div className="slotFoot">
        <button className="spinButton" onClick={() => randomizeArea()}>Random</button>
        </div>
        {/* <button className="spinButton" onClick={() => play()}>Spin</button> */}

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
        <h1>{"Set Starting Balance: "}
        <input  type="number"  onChange={getBalanceInput} integers-only/></h1>
        <h1>{"Available cash: "+ balance}</h1>
        </div>
        
    )
}

export default App;
