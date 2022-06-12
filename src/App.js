import './App.css';
import React, {useState, useEffect} from 'react'
import BAR3 from "./Reel/3xBAR.png" // relative path to image 
import BAR from "./Reel/BAR.png" // relative path to image 
import BAR2 from "./Reel/2xBAR.png" // relative path to image 
import SEVEN from "./Reel/7.png" // relative path to image 
import CHERRY from "./Reel/Cherry.png" // relative path to image 

const App = () => {
    
    //half rotation  adjustment after spinning
    // 120px as bottom adjustment will make center empty and fill top&bottom
    const finalAdjustments = [120, 0]

    const [spin, setSpin] = useState(false)

    const [reelResults, setReelResults] = useState([])

    const [prizee, setPrizee] = useState([])
    // ring1 for reel1, ring2 for reel2, .....
    // ring is random number decides how many times the spin will rotate
    const [ring1, setRing1] = useState()
    const [ring2, setRing2] = useState()
    const [ring3, setRing3] = useState()

    const [moveUp, setMoveUp] = useState([0,0,0])

    // const [rings, setRings] = useState();

    // Reel Symbols. Each reel has 5 symbols
    const [reelSymbols, setReelSymbols] = useState([BAR3, BAR, BAR2, SEVEN, CHERRY])
    // const [reelsSum, setReelsSum] = useState([])
    
    var result = [];
    // var moveUp = 0;

    useEffect(() => {
        win()
    }, [ring3])

function spinSymbols(symbols, ring) {
    if (ring === 100 || ring ===0) {
        return symbols;
    }
    const rotates = Math.round(ring/20)
    
    for (let i=0; i< rotates; i++) {
        symbols.pop()
        symbols.unshift(reelSymbols[4-i])
    }
    return symbols;
}

function reel1() {

    const temp = [...reelSymbols];
    spinSymbols(temp, ring1)
    
    // to move up after spin (to adjust to particular slots (Top-Center-Bottom))
    //moveUp = finalAdjustments[Math.floor(Math.random() * finalAdjustments.length)]
    result.push(temp, moveUp[0])

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
            return (
                < div style ={{ position: "relative", bottom:`${moveUp[0]}px`}} >
                {temp.map((symbol) => 
                        <div key={symbol} className="ringEnd"><img src = {symbol} alt="symbol" /></div>
                )}
                </div>
                )
        }
    }

function reel2() {
    const temp = [...reelSymbols];
    spinSymbols(temp, ring2)
    // const moveIndex = Math.floor(Math.random() * finalAdjustments.length);
    //moveUp = finalAdjustments[Math.floor(Math.random() * finalAdjustments.length)]
    result.push(temp, moveUp[1])
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

            return (
                < div style ={{ position: "relative", bottom:`${moveUp[1]}px`}} >
                {temp.map((symbol) => 
                        <div key={symbol} className="ringEnd"><img src = {symbol} alt="symbol" /></div>
                )}
                </div>
                )
        }
        
    }

function reel3() {

    const temp = [...reelSymbols];
    spinSymbols(temp, ring3)
    // const moveIndex = Math.floor(Math.random() * finalAdjustments.length);
    // moveUp = finalAdjustments[Math.floor(Math.random() * finalAdjustments.length)]
    result.push(temp, moveUp[2])

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

            return (
                < div style ={{ position: "relative", bottom:`${moveUp[2]}px`}} >
                {temp.map((symbol) => 
                        <div key={symbol} className="ringEnd"><img src = {symbol} alt="symbol" /></div>
                )}
                </div>
                )
        }
    }

function win() {
        // Calculate results
          var prize=0;
        result[0] = result[0].map((element) => {
            if (element === BAR) return "BAR"
            if (element === BAR2) return "BAR2"
            if (element === BAR3) return "BAR3"
            if (element === SEVEN) return "SEVEN"
            if (element === CHERRY) return "CHERRY"
        })
        result[2] = result[2].map((element) => {
            if (element === BAR) return "BAR"
            if (element === BAR2) return "BAR2"
            if (element === BAR3) return "BAR3"
            if (element === SEVEN) return "SEVEN"
            if (element === CHERRY) return "CHERRY"
        })
        result[4] = result[4].map((element) => {
            if (element === BAR) return "BAR"
            if (element === BAR2) return "BAR2"
            if (element === BAR3) return "BAR3"
            if (element === SEVEN) return "SEVEN"
            if (element === CHERRY) return "CHERRY"
        })
        
        var reel1c, reel2c, reel3c = [];

        if (result[1] === 120) {
                const top = result[0][1];
                const center = 0;
                const bottom = result[0][2]
                reel1c = [top, center, bottom]
            }
            else {
                const top = result[0][0]
                const center = result[0][1]
                const bottom = result[0][2]
                reel1c = [top, center, bottom]
            } 
        if (result[3] === 120) {
                const top = result[2][1];
                const center = 0;
                const bottom = result[2][2]
                reel2c = [top, center, bottom]
            }
            else {
                const top = result[2][0]
                const center = result[2][1]
                const bottom = result[2][2]
                reel2c = [top, center, bottom]
            }
        if (result[5] === 120) {
                const top = result[4][1];
                const center = 0;
                const bottom = result[4][2]
                reel3c = [top, center, bottom]
            }
            else {
                const top = result[4][0]
                const center = result[4][1]
                const bottom = result[4][2]
                reel3c = [top, center, bottom]
            }

        console.log(reel1c, reel2c, reel3c)
        // setTimeout(setReelResults([...reel1c,...reel2c,...reel3c]), 500)
        // console.log(reelResults)

        if (reel1c[0] === reel2c[0] === reel3c[0] === "CHERRY") {
            prize+=2000
        }
        if (reel1c[1] === reel2c[1] === reel3c[1] === "CHERRY") {
            prize+=1000
        }
        if (reel1c[2] === reel2c[2] === reel3c[2] === "CHERRY") {
            prize+=4000
        }
        for (let i=0; i<3; i++){
            if (reel1c[i] === reel2c[i] === reel3c[i] === "SEVEN") {
                prize+=150
            }
            if (reel1c[i] === reel2c[i] === reel3c[i] === "BAR3") {
                prize+=50
            }
            if (reel1c[i] === reel2c[i] === reel3c[i] === "BAR2") {
                prize+=20
            }
            if (reel1c[i] === reel2c[i] === reel3c[i] === "BAR") {
                prize+=10
            }
            if (reel1c[i] && reel2c[i] && reel3c[i]) {
                const combination = [reel1c[i], reel2c[i], reel3c[i]]
                if (!combination.includes("CHERRY") && !combination.includes("SEVEN")) {
                    prize+=5;
                }
                if (!combination.includes("BAR") && !combination.includes("BAR2")  && !combination.includes("BAR3")) {
                    prize+=75;
                }
            }
            
            
        }
        // Any combination of CHERRY and 7 on any line 75
        // Combination of any BAR symbols on any line 5
        console.log(prize)

        setPrizee(prize)


}

function slotFoot() {
    // default balance
    const [balance, setBalance] = useState(0)

     function rand() {
          let ring1 = Math.floor(Math.random() * (100))
          let ring2 = Math.floor(Math.random() * (100))
          let ring3 = Math.floor(Math.random() * (100))

          // ings(ring1, ring2, ring3)

          setRing1(ring1)
          setTimeout(function(){setRing2(ring2)}, 500)
          setTimeout(function(){setRing3(ring3)}, 1000)
        setMoveUp([finalAdjustments[Math.floor(Math.random() * finalAdjustments.length)], finalAdjustments[Math.floor(Math.random() * finalAdjustments.length)], finalAdjustments[Math.floor(Math.random() * finalAdjustments.length)]])
        }
    
    function play() {
        var cost = 1;
        // if (ring3 > 1 || !spin){
        if (cost <= balance && cost >= 1){
        
        setSpin(true)
        setRing1()
        setRing2()
        setRing3()

        // setRings()

        setBalance(balance - cost)
        setTimeout(function(){rand()}, 2000)
        win()
        }    
    }
    // to prevent multiple re-renders. This child component was created and encapsulated with its state were 
    const getBalanceInput = (event)=>{
        setBalance(event.target.value)
    };

    return (
        <div className="slotFoot">
        <button className="spinButton" onClick={() => play()}>Spin</button>
        <h1>{"Set Starting Balance: "}
        <input  type="number"  onChange={getBalanceInput}/></h1>
        <h1>{"Available cash: "+ balance}</h1>
        <h1>{"your prize is : "+ prizee}</h1>
        </div>
    )
}
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
        {slotFoot()}
        </div>


        
    )
}


export default App;
