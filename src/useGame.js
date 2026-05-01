import { useState } from "react";

let useGame = () => {
    const [state, setState] = useState(
        {
            heroHp: 100,
            enemyHP: 100,
            isHeroTurn: true,
            isDefend: false,
            isGameOver: false,
            msg: "",
            round: 0
        }
    )


    let heroAttack = () => {
        let damage = getRandom(10, 30);

        let newState = {
            ...state,
            enemyHP: Math.max( 0 , state.enemyHP - damage),
            msg: `you Attack with damage : ${damage} , `,
            isHeroTurn: false
        }


        newState = checkifGameOver(newState)
        newState = enemyTurn(newState)
        setState(newState)
    };

    let getRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let checkifGameOver = (state) => {
        if (state.enemyHP <= 0 || state.heroHp <= 0) {

            if (state.enemyHP <= 0) {
                state.msg = "you Win !! "
            } else if (state.heroHp <= 0) {
                state.msg = "Lost !!";
            } else {
                state.msg = "GameOver";
            }


        }

        return state;
    }

    let enemyTurn = (state) => {
        if (state.enemyHP > 0 && state.heroHp > 0) {
            let damage = getRandom(10, 30);

            if (state.isDefend)
                damage = damage - getRandom(5, 20)

            state.isDefend = false;
            state.heroHp = Math.max(state.heroHp - damage, 0);
            state.msg += " And your Eenemy Attack with :" + damage + " Pint , ";
            state = checkifGameOver(state)
            state.round += 1
            state.isHeroTurn = true;
            state.msg = "";
        }

        return state;

    }


    // let resetGame = () => {

    //   state.heroHp = 100,
    //     state.enemyHP = 100,
    //     state.isHeroTurn = true,
    //     state.isDefend = false,
    //     state.isGameOver = false;
    //   state.round = 0
    //   state.msg = ""
    //   document.getElementById("heroAttackbtn").disabled = false
    //   document.getElementById("heroHealbtn").disabled = false
    //   document.getElementById("heroDefendbtn").disabled = false
    //   updateUI()
    //   document.getElementById("msg").innerHTML = ""
    //   spawnEnemy()
    // }

    let heroDefend = () => {
        let newState = { ...state }
        newState.isDefend = true;
        newState.msg += "you Defend, ";
        newState = checkifGameOver(newState)
        newState = enemyTurn(newState)
        setState(newState)
    };

    let heroHeal = () => {
        let newState = { ...state }
        let heal = getRandom(5, 15);
        newState.heroHp = Math.min(100, state.heroHp + heal);
        newState.msg += "you Heal with  :" + heal + " Pint , ";
        newState = checkifGameOver(newState)
        newState.isHeroTurn = false;
        newState = enemyTurn(newState)
        setState(newState)
    };


    return { state , heroAttack  , heroDefend,   heroHeal  }
}

export default useGame