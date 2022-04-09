function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    "slam dunks": 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    "slam dunks": 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamdunks: 15,
                },
                "Mason Plumlee": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamdunks: 15,
                },
                "Jason Terry": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamdunks: 15,
                }

            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Black", "White"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    "slam dunks": 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    "slam dunks": 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    "slam dunks": 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    "slam dunks": 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    "slam dunks": 12,
                }
            }

        }
    }
}

const game = gameObject()

//list of teams
const teamsList = function teams() {
    return [game.home, game.away]
}
//list of players
const players = function () {
    return { ...game.home.players, ...game.away.players }
}
//team colors
const colors = function () {
    return Object.assign(game.away.colors, game.home.colors)
}





///Array of all players
// const players = [game.home.players, game.away.players]
// function allPlayers() {
//     const all = players.map(function (team) {
//         const newArr = []
//         for (const player in team) {
//             newArr.push({ playerName: player, ...{ team }[player] })
//         }
//         return newArr
//     })
//     return all.flat()
// }

//that takes in an argument of a player's name and returns the number of points scored for that player. 
function numPointsScored(name) {
    for (const team in game) {
        for (const player in game[team].players) {
            if (name === game[team][player]) {
                return game[team].players[name].points
            }
        }
    }
}
// note to self: the same function done much better in the video walkthrough:



// function numPointsScored(playerInput){
//     const playerArrays = Object.entries(players())
//     const player = playerArrays.find(playerArray => playerArray[0] === playerInput)
//     return player.points
// }




//that takes in an argument of a player's name and returns the shoe size for that player. 
function shoeSize(name) {
    for (const team in game) {
        for (const player in game[team].players) {
            if (name === player) {
                return game[team].players[name].shoe
            }
        }
    }
}

///takes in an argument of the team name and returns an array of that teams colors.
function teamColors(name) {
    for (const team in game) {
        if (name === game[team].teamName) {
            return game[team].colors
        }
    }
}
// function teamsColors(name){
//     if (name === game.home[teamName]){
//         return game.home.colors
//     }
//     else{
//         return game.away.colors
//     }
// }

//operates on the game object to return an array of the team names.
function teamNames() {
    let teamNameArr = [game.home.teamName, game.away.teamName]
    return teamNameArr
}

//takes in an argument of a player's name and returns a object of that player's stats. 
function playerStats(name) {
    if (game.home.players[name] === undefined) {
        return game.away.players[name]
    }
    else {
        return game.home.players[name]
    }
}

//return the player with the biggest shoe size

//finally got this function working!!
//this returns jeff adrien as biggest shoe size
//edit: may have altered something, when copying from chrome console...

//now put this function in another function to return his rebounds
function findBiggestShoe() {
    let sizeShoe = 0
    let player = "Not Assigned yet"
    let updateShoeSize = (size) => { sizeShoe = size }
    let updatePlayer = (playerName) => { player = playerName }
    for (const team in game) {
        for (const playerName in team.players) {
            if (team.players[playerName].shoe > sizeShoe) {
                updateShoeSize(team.players[playerName].shoe)
                updatePlayer(playerName)
            }
        }
    }
    return player
}



//use players() function above

function bigShoeRebounds() {
    let x = findBiggestShoe()
    for (player in players) {
        if (x === player) {
            return player.rebounds
        }
    }
}

