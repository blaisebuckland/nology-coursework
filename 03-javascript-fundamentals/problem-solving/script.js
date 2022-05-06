let teamOneScore = 0;
let teamTwoScore = 0;

// should rewrite these as arrow functions

function handleTeamOneClick() {
    let teamOneScore = teamOneScore +1;
}

function handleTeamTwoClick() {
    let teamTwoScore = teamTwoScore +1;
}

function getScore() {
    alert(`Team One has ${teamOneScore} points. Team Two has ${teamTwoScore} points.`)
}