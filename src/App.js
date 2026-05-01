import { useState } from "react";
import HpBar from './HpBar.js';
import './App.css';
import ActionButtons from "./ActionButtons.js";
import BattleGround from "./BattleGround.js";
import useGame from "./useGame.js";

function App() {
  const { state, heroAttack, heroHeal, heroDefend } = useGame()

return (
  <div>
    <h1>Shadow Strike ⚔️</h1>
    <BattleGround state={state} player="Hero" />
    <BattleGround state={state} player="Enemy" />
    <ActionButtons action={heroAttack} value="⚔️ Attack" />
    <ActionButtons action={heroHeal} value="💚 Heal" />
    <ActionButtons action={heroDefend} value="🛡️ Defend" />
    <p>{state.msg}</p>
  </div>
)


}

export default App;