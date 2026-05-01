import HpBar from "./HpBar";

let BattleGround = ({ state , player }) => {

    return (
        <div id="Heroground" className="row Heroground">
            <h1>{player}: <span>{player === "Hero" ? state.heroHp : state.enemyHP}</span></h1>
            <HpBar hp={player === "Hero" ? state.heroHp : state.enemyHP} />
        </div>
    );

}
export default BattleGround