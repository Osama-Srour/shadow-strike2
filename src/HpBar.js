

let HpBar = ({hp}) => {
    let color = "green"
    if(hp < 60 && hp > 20)
        color = "yellow"
    if(hp < 20)
        color = "red"

    return (
        <div className="bar-bg">
            <div id="hp-value" className="hp-value" style={{ width: hp + "%" , backgroundColor: color }} ></div>
        </div>
    );
}

export default HpBar;