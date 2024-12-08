// API Riot
const players = {
    Rebbant: {
        name: "Rebbant",
        puuid: "pSGcv0hE_UvC46O5YuXK8KA5Xr-XUR0bAZaSOpNsUaWIPKghb3lYlLpiqHvhNn3xKt-vOt_yWv9h3A",
        mainChampion: null,
        mainChampionPoints: null,
    },
    Ipaskyx: { 
        name: "Ipaskyx", 
        puuid: "vqBV4PheWSHfxwRERe7srenhyS9eCbVk4mTl3i2pRkY30joShrbUHMFt9UElVFKfiJNuv4lWcL6cvA",
        mainChampion: null,
        mainChampionPoints: null,
    },
    Quequinol: { 
        name: "Quequinol", 
        puuid: "nFC1mwhFrjw99_dalEIJbCtqCC-wnf0xZprR5MvNtP9eHVXgw80Fvfak9G0stxzNJlhtUIq8ANXvtg",
        mainChampion: null,
        mainChampionPoints: null,
    },
    Arnalez: { 
        name: "Arnalez", 
        puuid: "qN34LWwcyy8-9vTX7pJpMelQXJoilrTJlaqNxknYV8CgLeNLXzqhrzOqsrUENENoI0M6-WJ1N3TlpA",
        mainChampion: null,
        mainChampionPoints: null,
    },
    Greys: { 
        name: "Greys", 
        puuid: "LOwuQF6Rdjk8XRhIjLr9eFUiiNCc-5g_1pCrS0aoZiiqOm2lCnQ95qZUaOrfI7GUzziKN1h7gQnwYw",
        mainChampion: null,
        mainChampionPoints: null,
    },
    Marcdrote: { 
        name: "Marcdrote", 
        puuid: "1jC1SwL0Bd8SkEsyrYRNIiUicY0ich7jJ_-ztQlyW7r0-r1HUt-T5qp69TxrcS_iPOewxA5iiVn--w",
        mainChampion: null,
        mainChampionPoints: null,
    },
    Kronos33yt: { 
        name: "Kronos33yt", 
        puuid: "zpnLuJO9nEeSviVHPrqy6gIetqlfTY1zR0rFCqptzHK14H3I4tmm0qkkMh96nloJm0NJs7JUmuGJyw",
        mainChampion: null,
        mainChampionPoints: null,
    },
    Temistocles: { 
        name: "Temistocles", 
        puuid: "6xKc-pfnMLv4TkttrzA1VBO34JUg86eJ-ijFRVlBRB-lLvNtCiQrRy7hrl2XoNfPcoqzkBhHF7KZOQ",
        mainChampion: null,
        mainChampionPoints: null,
    },
};

const idChamps = {
    1: "Annie",
    2: "Olaf",
    3: "Galio",
    4: "Twisted Fate",
    5: "Xin Zhao",
    6: "Urgot",
    7: "LeBlanc",
    8: "Vladimir",
    9: "Fiddlesticks",
    10: "Kayle",
    11: "Master Yi",
    12: "Alistar",
    13: "Ryze",
    14: "Sion",
    15: "Sivir",
    16: "Soraka",
    17: "Teemo",
    18: "Tristana",
    19: "Warwick",
    20: "Nunu & Willump",
    21: "Miss Fortune",
    22: "Ashe",
    23: "Tryndamere",
    24: "Jax",
    25: "Morgana",
    26: "Zilean",
    27: "Singed",
    28: "Evelynn",
    29: "Twitch",
    30: "Karthus",
    31: "Cho'Gath",
    32: "Amumu",
    33: "Rammus",
    34: "Anivia",
    35: "Shaco",
    36: "Dr. Mundo",
    37: "Sona",
    38: "Kassadin",
    39: "Irelia",
    40: "Janna",
    41: "Gangplank",
    42: "Corki",
    43: "Karma",
    44: "Taric",
    45: "Veigar",
    48: "Trundle",
    50: "Swain",
    51: "Caitlyn",
    53: "Blitzcrank",
    54: "Malphite",
    55: "Katarina",
    56: "Nocturne",
    57: "Maokai",
    58: "Renekton",
    59: "Jarvan IV",
    60: "Elise",
    61: "Orianna",
    62: "Wukong",
    63: "Brand",
    64: "Lee Sin",
    67: "Vayne",
    68: "Rumble",
    69: "Cassiopeia",
    72: "Skarner",
    74: "Heimerdinger",
    75: "Nasus",
    76: "Nidalee",
    77: "Udyr",
    78: "Poppy",
    79: "Gragas",
    80: "Pantheon",
    81: "Ezreal",
    82: "Mordekaiser",
    83: "Yorick",
    84: "Akali",
    85: "Kennen",
    86: "Garen",
    89: "Leona",
    90: "Malzahar",
    91: "Talon",
    92: "Riven",
    96: "Kog'Maw",
    98: "Shen",
    99: "Lux",
    101: "Xerath",
    102: "Shyvana",
    103: "Ahri",
    104: "Graves",
    105: "Fizz",
    106: "Volibear",
    107: "Rengar",
    110: "Varus",
    111: "Nautilus",
    112: "Viktor",
    113: "Sejuani",
    114: "Fiora",
    115: "Ziggs",
    117: "Lulu",
    119: "Draven",
    120: "Hecarim",
    121: "Kha'Zix",
    122: "Darius",
    126: "Jayce",
    127: "Lissandra",
    131: "Diana",
    133: "Quinn",
    134: "Syndra",
    136: "Aurelion Sol",
    141: "Kayn",
    142: "Zoe",
    143: "Zyra",
    145: "Kai'Sa",
    147: "Seraphine",
    150: "Gnar",
    154: "Zac",
    157: "Yasuo",
    161: "Vel'Koz",
    163: "Taliyah",
    164: "Camille",
    166: "Akshan",
    200: "Bel'Veth",
    201: "Braum",
    202: "Jhin",
    203: "Kindred",
    222: "Jinx",
    223: "Tahm Kench",
    234: "Viego",
    235: "Senna",
    236: "Lucian",
    238: "Zed",
    240: "Kled",
    245: "Ekko",
    246: "Qiyana",
    254: "Vi",
    266: "Aatrox",
    267: "Nami",
    268: "Azir",
    350: "Yuumi",
    360: "Samira",
    412: "Thresh",
    420: "Illaoi",
    421: "Rek'Sai",
    427: "Ivern",
    429: "Kalista",
    432: "Bard",
    497: "Rakan",
    498: "Xayah",
    516: "Ornn",
    517: "Sylas",
    518: "Neeko",
    523: "Aphelios",
    526: "Rell",
    555: "Pyke",
    711: "Vex",
    777: "Yone",
    875: "Sett",
    876: "Lillia",
    887: "Gwen",
    888: "Renata Glasc",
    895: "Nilah",
    897: "K'Sante",
};

// Riot API key
const riotAPIKey = API_KEY // No esta aqui crack

/**
 * Fetches champion mastery data from Riot API for a given player.
 * @param {string} puuid - The player's PUUID.
 * @returns {Promise<Object|null>} - Returns the main champion mastery data or null if no data.
 */
async function fetchChampionMastery(puuid) {
    let endpoint = `https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}`;
    endpoint += `?api_key=${riotAPIKey}`;

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.length > 0 ? data[0] : null;
    } catch (error) {
        console.error("Error fetching champion mastery data:", error);
        return null;
    }
}

/**
 * Fetches match history from Riot API for a given player.
 * @param {string} puuid - The player's PUUID.
 * @returns {Promise<Object|null>} - Returns the match history data or null if no data.
 */
async function fetchMatchHistory(puuid, count) {
    let endpoint = `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}`;
    endpoint += `/ids?start=0&count=${count}`;
    endpoint += `&api_key=${riotAPIKey}`;

    try {
        const response = await fetch(endpoint);
        const matchIds = await response.json();

        // Store match data in an array
        let matchDataArray = [];

        if (Array.isArray(matchIds)) {
            // Fetch all match details and store them
            for (let matchId of matchIds) {
                const matchDetails = await fetchMatchDetails(matchId);

                // Get game mode
                const gameMode = matchDetails.info.gameMode;
                let gameModeIconSrc = '';
                if (gameMode === "CLASSIC") {
                    gameModeIconSrc = "static/images/sr.ico";
                } else if (gameMode === "ARAM") {
                    gameModeIconSrc = "static/images/aram.ico";
                }

                // Get played champion
                let playedChamp = "";
                let matchIndex = 0;
                matchDetails.metadata.participants.forEach((participantPuuid, index) => {
                    if (participantPuuid === puuid) {
                        playedChamp = matchDetails.info.participants[index].championName;
                        matchIndex = index;
                    }
                });

                // Get date
                const whenPlayed = matchDetails.info.gameCreation;
                const matchDate = new Date(whenPlayed).toLocaleString('es-ES', {
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                });
                // Get result (win or lose)
                let result = false;
                if (matchIndex > 4) {
                    result = matchDetails.info.teams[1].win;
                } else {
                    result = !matchDetails.info.teams[1].win;
                }

                // Store match details in the array
                matchDataArray.push({
                    gameMode,
                    gameModeIconSrc,
                    playedChamp,
                    matchDate,
                    result,
                    whenPlayed
                });
            }

            // Sort matches by game creation date (newest first)
            matchDataArray.sort((a, b) => b.whenPlayed - a.whenPlayed);

            // Now display the sorted match list
            displayMatches(matchDataArray);
        } else {
            console.error('Match IDs are not in an array format.');
        }
    } catch (error) {
        console.error('Error fetching match history:', error);
    }
}

function displayMatches(matches) {
    const matchHistoryList = document.getElementById('match-history-list'); // The ul element

    // Clear the previous list
    matchHistoryList.innerHTML = '';

    // Iterate over sorted matches and display
    matches.forEach(match => {
        const li = document.createElement('li');
        li.style.flexDirection = 'column'; // Stack items vertically

        // Create a container div for the top elements
        const topElementsContainer = document.createElement('div');
        topElementsContainer.classList.add('top-elements'); // Add a class for styling
        topElementsContainer.style.display = 'flex';
        topElementsContainer.style.alignItems = 'center';

        // Create game mode icon
        const gameModeIcon = document.createElement('img');
        gameModeIcon.src = match.gameModeIconSrc;

        // Create champion name
        const championName = document.createElement('span');
        championName.textContent = `${match.playedChamp}`;
        championName.style.marginRight = '10px';  // Space between champion name and date

        // Create match date
        const matchDate = document.createElement('span');
        matchDate.textContent = `${match.matchDate}`;

        // Add a div for the GIF
        const gifContainer = document.createElement('div');
        gifContainer.classList.add('gif-container');

        // Create and append the GIF image
        const gifImage = document.createElement('img');
        gifContainer.appendChild(gifImage);

        // Set result color
        if (match.result) {
            li.classList.add('win');
            gifImage.src = 'static/images/win.gif';
        } else {
            li.classList.add('lose');
            gifImage.src = 'static/images/lose.gif';
        }

        // Add click event to toggle GIF visibility
        li.addEventListener('click', () => {
            const isVisible = gifContainer.style.display === 'block';
            gifContainer.style.display = isVisible ? 'none' : 'block'; // Toggle visibility
        });

        // Append top elements to the container
        topElementsContainer.appendChild(gameModeIcon);
        topElementsContainer.appendChild(championName);
        topElementsContainer.appendChild(matchDate);

        // Append the containers to the list item
        li.appendChild(topElementsContainer);
        li.appendChild(gifContainer);

        matchHistoryList.appendChild(li);
    });
}

async function fetchMatchDetails(matchId) {
    const endpoint = `https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${riotAPIKey}`;
    const response = await fetch(endpoint);
    const matchDetails = await response.json();
    return matchDetails;
}


/**
 * Updates the DOM with player information.
 * @param {Object} player - The player object containing name and champion data.
 */
function updateDOM(player) {
    document.title = player.name + "'s Profile" || "Unknown Player";
    document.getElementById("player-name").textContent = player.name || "Unknown Player";
    document.getElementById("main-champion").textContent = player.mainChampion || "Loading...";
    document.getElementById("main-champion-points").textContent = player.mainChampionPoints || "Loading...";
}

/**
 * Displays an error message on the page.
 * @param {string} message - The error message to display.
 */
function displayError(message) {
    document.body.innerHTML = `<h1>${message}</h1>`;
}

/**
 * Main function to handle fetching and displaying data for a player.
 * @param {string} playerKey - The key of the player in the players object.
 */
async function handlePlayerProfile(playerKey) {
    const player = players[playerKey];
    if (!player) {
        displayError("Player not found");
        return;
    }

    updateDOM(player); // Initial update with loading placeholders

    if (player.puuid) {
        const masteryData = await fetchChampionMastery(player.puuid);
        fetchMatchHistory(player.puuid, 5);
        if (masteryData) {
            player.mainChampion = idChamps[masteryData.championId];
            player.mainChampionPoints = masteryData.championPoints;
            updateDOM(player); // Update DOM with fetched data
        } else {
            displayError("No mastery data available");
        }
    } else {
        displayError("PUUID not available");
    }
}

// Get the player key from URL and call the main function
const urlParams = new URLSearchParams(window.location.search);
const playerKey = urlParams.get("player");
handlePlayerProfile(playerKey);