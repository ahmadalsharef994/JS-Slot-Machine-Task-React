import "./App.css";
import React, {useState, useEffect} from "react"
import BAR3 from "./Reel/3xBAR.png" // relative path to image 
import BAR from "./Reel/BAR.png" // relative path to image 
import BAR2 from "./Reel/2xBAR.png" // relative path to image 
import SEVEN from "./Reel/7.png" // relative path to image 
import CHERRY from "./Reel/Cherry.png" // relative path to image 

const App = () => {
    
  //half rotation  adjustment after spinning.
  // 120px as bottom adjustment will make center empty and fill Top & Bottom. 0px means no adjustment.
  const finalAdjustments = [120, 0]
  // moveApp array decides (randomly) if each reel should rotate half or not
  const [moveUp, setMoveUp] = useState([0,0,0])
  
  // spinning: true or false
  const [spin, setSpin] = useState(false)

  // balance and prize
  const [balance, setBalance] = useState(0)
  const [prize, setPrize] = useState(0)

  // ring1 for reel1, ring2 for reel2, .....
  // ring is random number decides how many times the spin will rotate
  const [ring1, setRing1] = useState()
  const [ring2, setRing2] = useState()
  const [ring3, setRing3] = useState()

  // Reel Symbols. Each reel has 5 symbols
  const [reelSymbols, setReelSymbols] = useState([BAR3, BAR, BAR2, SEVEN, CHERRY])
  
  // this to store the contents of each reel after spin for calculating the prize later
  var spinResult = [];
  var [winLines, setWinLines] = useState([])

  useEffect(() => {
    win()
  }, [ring3])

  function spinSymbols(symbols, ring) {
    // ring == 0 (0 rotates) or ring == 100 (5 rotates) will return the same order of symbols array
    if (ring === 100 || ring ===0) {
      return symbols;
    }

    // Otherwise, number of rotates is ring divided by 5
    const rotates = Math.round(ring/20)
    
    // on each rotation: pop from rear and push last-element to front
    for (let i=0; i< rotates; i++) {
      symbols.pop()
      symbols.unshift(reelSymbols[4-i])
    }
    return symbols;
  }

  function reel1() {
    // create a temporal copy of symbols and spin it. 
    const temp = [...reelSymbols];
    spinSymbols(temp, ring1) // ring1=0 by default means no-spin
    
    // push the result of spinning with the moveUp (half rotate) value
    spinResult.push(temp, moveUp[0])

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
    } else { // after spinning
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

    spinResult.push(temp, moveUp[1])
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

    spinResult.push(temp, moveUp[2])

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
    // Calculate spinResults and replace base64-images with name of symbol
    spinResult[0] = spinResult[0].map((element) => {
      if (element === BAR) return "BAR"
      if (element === BAR2) return "BAR2"
      if (element === BAR3) return "BAR3"
      if (element === SEVEN) return "SEVEN"
      if (element === CHERRY) return "CHERRY"
    })
    spinResult[2] = spinResult[2].map((element) => {
      if (element === BAR) return "BAR"
      if (element === BAR2) return "BAR2"
      if (element === BAR3) return "BAR3"
      if (element === SEVEN) return "SEVEN"
      if (element === CHERRY) return "CHERRY"
    })
    spinResult[4] = spinResult[4].map((element) => {
      if (element === BAR) return "BAR"
      if (element === BAR2) return "BAR2"
      if (element === BAR3) return "BAR3"
      if (element === SEVEN) return "SEVEN"
      if (element === CHERRY) return "CHERRY"
    })
    
    // content of each reel as an array [TOP, CENTER, BOTTOM]
    var reel1c, reel2c, reel3c = [];

    // Reel 1
    if (spinResult[1] === 120) { // if having moveUp (CENTER is empty)
      const top = spinResult[0][1];
      const center = 0;
      const bottom = spinResult[0][2]
      reel1c = [top, center, bottom]
    }
    else { // if not having moveUp (CENTER is filled)
      const top = spinResult[0][0]
      const center = spinResult[0][1]
      const bottom = spinResult[0][2]
      reel1c = [top, center, bottom]
    } 
    // Reel 2
    if (spinResult[3] === 120) {
      const top = spinResult[2][1];
      const center = 0;
      const bottom = spinResult[2][2]
      reel2c = [top, center, bottom]
    }
    else {
      const top = spinResult[2][0]
      const center = spinResult[2][1]
      const bottom = spinResult[2][2]
      reel2c = [top, center, bottom]
    }
    // Reel 3
    if (spinResult[5] === 120) {
      const top = spinResult[4][1];
      const center = 0;
      const bottom = spinResult[4][2]
      reel3c = [top, center, bottom]
    }
    else {
      const top = spinResult[4][0]
      const center = spinResult[4][1]
      const bottom = spinResult[4][2]
      reel3c = [top, center, bottom]
    }

    // Find and set Prize and Win-Lines
    var prizee=0;
    var winLiness = [];
    if (reel1c[0] === reel2c[0] === reel3c[0] === "CHERRY") {
      prizee+=2000
      winLiness.push(0)
    }
    if (reel1c[1] === reel2c[1] === reel3c[1] === "CHERRY") {
      prizee+=1000
      winLiness.push(1)
    }
    if (reel1c[2] === reel2c[2] === reel3c[2] === "CHERRY") {
      prizee+=4000
      winLiness.push(2)
    }
    for (let i=0; i<3; i++){
      if (reel1c[i] === reel2c[i] === reel3c[i] === "SEVEN") {
        prizee+=150
        winLiness.push(i)
      }
      if (reel1c[i] === reel2c[i] === reel3c[i] === "BAR3") {
        prizee+=50
        winLiness.push(i)
      }
      if (reel1c[i] === reel2c[i] === reel3c[i] === "BAR2") {
        prizee+=20
        winLiness.push(i)
      }
      if (reel1c[i] === reel2c[i] === reel3c[i] === "BAR") {
        prizee+=10
        winLiness.push(i)
      }
      if (reel1c[i] && reel2c[i] && reel3c[i]) {
        const combination = [reel1c[i], reel2c[i], reel3c[i]]
        if (!combination.includes("CHERRY") && !combination.includes("SEVEN")) {
          prizee+=5;
          winLiness.push(i)
        }
        if (!combination.includes("BAR") && !combination.includes("BAR2")  && !combination.includes("BAR3")) {
          prizee+=75;
          winLiness.push(i)
        }
      }      
    }

    winLiness = [...new Set(winLiness)];
    winLiness = winLiness.map((element) => {
      if (element === 0) return "TOP"
      if (element === 1) return "CENTER"
      if (element === 2) return "BOTTOM"
    })

    // update states (and re-render) only when there's a spin
    if (ring1 || ring2 || ring3) {
      setPrize(prizee)
      setWinLines([...winLiness])
    }

  }

  // SlotFoot functional component contains play(), rand(), getBalanceInput(), and payTable() functionalities.
  // JS nested functions allows to create private variables and make the code more encapsulated.
  function SlotFoot() {

    function rand() { // set rings and moveUps randomly
      let ring1 = Math.floor(Math.random() * (100))
      let ring2 = Math.floor(Math.random() * (100))
      let ring3 = Math.floor(Math.random() * (100))

      setRing1(ring1)
      setTimeout(function(){setRing2(ring2)}, 500)
      setTimeout(function(){setRing3(ring3)}, 1000)

      setMoveUp([finalAdjustments[Math.floor(Math.random() * finalAdjustments.length)], finalAdjustments[Math.floor(Math.random() * finalAdjustments.length)], finalAdjustments[Math.floor(Math.random() * finalAdjustments.length)]])
    }
    
    function play() {
      var cost = 1;

      if (cost <= balance && cost >= 1) {        
        setSpin(true) // spin

        setRing1()
        setRing2()
        setRing3()

        setBalance(balance - cost) // new balance
        setTimeout(function(){rand()}, 2000) // set rings and move up after 2 seconds having 0.5 seconds delay between reels
        win()
      }    
    }

    function getBalanceInput(event) {
      setBalance(event.target.value)
    }

    function payTable() {
      if (!prize) {
        return (
          <h2>No prize</h2>
        )
      }
      else {
        return (
          <div>
            <div style ={{display: "flex"}}>
              <h2>Your prize is &nbsp; </h2>
              <h2 className='prizeText'> {prize}</h2>
            </div>
            <div style ={{display: "flex"}}>
              <h2> Winning Lines: &nbsp;</h2>
              {
                winLines.map((line, index)=>
                  <h2 key= {index} className='prizeText'>{line} &nbsp; </h2>
                )
              }
            </div>
          </div>
        )
      }
    }

    return (
      <div className="slotHeadFoot">
        <button className="Button" onClick={() => play()}>Spin</button>
        <h2>{"Set Starting Balance: "} </h2>
        <input  type="number"  onChange={getBalanceInput}/>
        <h2>{"Available cash: "+ balance}</h2>
        {payTable()}
        {/* <h2 className='payTable'>{"your prize is : "+ prize}</h2> */}
        
      </div>
    )
  }

  // random mode: reels land random positions.
  function randomizeArea() {
    setReelSymbols(reelSymbols
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value))
  }

  return (
    <div className="debugArea">
      <h1 className="projectTitle">JS Test Task Source</h1>
      <div className="slotHeadFoot">
        <button className="Button" onClick={() => randomizeArea()}>Random</button>
      </div>

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
      {SlotFoot()}
    </div>


        
  )
}

export default App;
