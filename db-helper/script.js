const API_KEY = '1234567'; // Replace with your OMDb API key
const BASE_URL = 'http://www.omdbapi.com/';

const seriesIds = [
    // "tt0903747",//: "Breaking Bad" 62,
    // "tt0185906",//: "Band of Brothers" 10,
    // "tt11198330",//: "House of the Dragon" 20,
    // "tt7366338",//: "Chernobyl" 5,
    // "tt2442560",//: "Peaky Blinders" 36,
    // "tt10986410",//: "Ted Lasso" 34,
    // "tt2085059",//: "Black Mirror" 33,
    // "tt1475582",//: "Sherlock" 15,
    // "tt2356777",//: "True Detective" 31,
    // "tt12637874",//: "Fallout" 9,
    // "tt4179452",//: "The Last Kingdom" 46,
    // "tt10569934",//: "Those About To Die" 10,
    // "tt0475784",//: "Westworld" 36,
    // "tt13443470",//: "Wednesday" 9,
    // "tt1190634",//: "The Boys" 33,
    // "tt5180504",//: "The Witcher" 26,
    // "tt3581920",//: "The Last of Us" 16,
    // "tt0384766",//: "Rome" 22,
    // "tt13159924",//: "Gen V" 10,
    // "tt0487831",//: "The IT Crowd" 26,
    // "tt1870479",//: "The Newsroom" 25,
    // "tt0306414",//: "The Wire" 60,
    // "tt12262202",//: "The Acolyte" 8,
    // "tt8111088",//: "The Mandalorian" 25,
    // "tt8466564",//: "Obi-Wan Kenobi" 6,
    // "tt9253284",//: "Andor" 24,
    // "tt9288030",//: "Reacher" 17,
    // "tt2788316",//: "Shogun" 12,
    // "tt1606375",//: "Downton Abbey" 52,
    // "tt5296406",//: "Designated Survivor" 53,
    // "tt8740790",//: "Brigerton" 25,
    // "tt5071412",//: "Ozark" 44,
    // "tt9140554",//: "Loki" 12,
    // "tt0303461",//: "Firefly" 14,
    // "tt1553656",//: "Under the Dome" 39,
    // "tt2249007",//: "Ray Donovan" 82,
    // "tt4236770",//: "Yellowstone" 53,
    // "tt0904208",//: "Californication" 84,
    // "tt7221388",//: "Cobra Kai" 65,
    // "tt13622776",//: "Ahsoka" 9,
    // "tt13146488",//: "Peacemaker" 9,
    // "tt1740299",//: "The Man in the High Castle" 40,
    // "tt1837492",//: "13 Reasons Why" 9,
    // "tt13668894",//: "The Book of Boba Fett" 7,
    // "tt14452776",//: "The Bear" 29,
    // "tt7631058",// "The Lord of the Rings: The Rings of Power" 17,
    // "tt4574334",//: "Stranger Things" 42,
    // "tt4158110",//: "Mr. Robot" 45,
    // "tt2575988",//: "Silicon Valley" 53,
    // "tt0979432",//: "Boardwalk Empire" 56,
    // "tt4786824",//: "The Crown" 60,
    // "tt2707408",//: "Narcos" 30,
    // "tt3032476",//: "Better Call Saul" 63
    // "tt0248654",//: "Six Feet Under" 63,
    // "tt0944947",//: "Game of Thrones 74",
    // "tt1856010",//: "House of Cards" 73,
    // "tt0141842",//: "The Sopranos" 86,
    // "tt4270492",//: "Billions" 84,
    // "tt1751634",//: "The Sandman" 21,
    // "tt2149175",//: "The Americans" 75,
    // "tt1124373",//: "Sons of Anarchy" 92,
    // "tt0804503",//: "Mad Men" 92,
    // "tt2372162",//: "Orange is the New Black" 91,
    // "tt2306299",//: "Vikings" 93,
    // "tt4052886",//: "Lucifer" 93,
    // "tt0773262",//: "Dexter" 96,
    // "tt1796960",//: "Homeland" 96,
    // "tt0159206",//: "Sex and the City" 94,
    // "tt0084967",//: "The A-Team" 97,
    // "tt2661044",//: "The 100" 100,
    // "tt3749900",//: "Gotham" 100,
    // "tt0090390",//: "ALF" 104,
    // "tt7587890",//: "The Rookie" 109,
    // "tt0411008",//: "Lost" 121,
    // "tt0491738",//: "Psych" 121,
    // "tt1830617",//: "Grimm" 123,
    // "tt1586680",//: "Shameless" 134,
    // "tt5420376",//: "Riverdale" 137,
    // "tt1219024",//: "Castle" 173,
    // "tt1520211",//: "The Walking Dead" 177,
    // "tt1844624",//: "American Horror Story" 177,
    // "tt0436992",//: "Dr. Who" 175
    "tt2879552",//: "11.22.63" 8,
    "tt0059968",//: "Batman" 120,
    "tt0083437",//: "Knight Rider" 90,
    "tt0086662",//: "Airwolf" 55,
    "tt9140560",//: "WandaVision" 9,
    "tt10160804",//: "Hawkeye" 6,
    "tt10234724",//: "Moon Knight" 6,
    "tt5753856",//: "Dark" 26,
    "tt2531336",//: "Lupin" 26,
    "tt10048342",//: "The Queen's Gambit" 7,
    "tt3322312",//: "Daredevil" 39,
    "tt0455275",//: "Prison Break" 90,
    "tt1312171",//: "The Umbrella Academy" 36,
    "tt6468322",//: "Money Heist" 41,
    "tt10919420",//: "Squid Game" 10,
    "tt5290382",//: "Mindhunter" 19,
    "tt2861424",//: "Rick and Morty" 74,
    "tt9208876",//: "The Falcon and the Winter Soldier" 6,
];
const seriesData = {
    // "tt0903747" : "Breaking Bad",
    // "tt0185906" : "Band of Brothers",
    // "tt11198330": "House of the Dragon",
    // "tt7366338": "Chernobyl",
    // "tt2442560": "Peaky Blinders",
    // "tt10986410": "Ted Lasso",
    // "tt2085059": "Black Mirror",
    // "tt1475582": "Sherlock",
    // "tt2356777": "True Detective",
    // "tt12637874": "Fallout",
    // "tt4179452": "The Last Kingdom",
    // "tt10569934": "Those about to die",
    // "tt0475784": "Westworld",
    // "tt13443470": "Wednesday",
    // "tt1190634": "The Boys",
    // "tt5180504": "The Witcher",
    // "tt3581920": "The Last of Us",
    // "tt0384766": "Rome",
    // "tt13159924": "Gen V",
    // "tt0487831": "The IT Crowd",
    // "tt1870479": "The Newsroom",
    // "tt0306414": "The Wire",
    // "tt12262202": "The Acolyte",
    // "tt8111088": "The Mandalorian",
    // "tt8466564": "Obi-Wan Kenobi",
    // "tt9253284": "Andor",
    // "tt9288030": "Reacher",
    // "tt2788316": "Shogun",
    // "tt1606375": "Downton Abbey",
    // "tt5296406": "Designated Survivor",
    // "tt8740790": "Brigerton",
    // "tt5071412": "Ozark",
    // "tt9140554": "Loki",
    // "tt0303461": "Firefly",
    // "tt1553656": "Under the Dome",
    // "tt2249007": "Ray Donovan",
    // "tt4236770": "Yellowstone",
    // "tt0904208": "Californication",
    // "tt7221388": "Cobra Kai",
    // "tt13622776": "Ahsoka",
    // "tt13146488": "Peacemaker",
    // "tt1740299": "The Man in the High Castle",
    // "tt1837492": "13 Reasons Why",
    // "tt13668894": "The Book of Boba Fett",
    // "tt14452776": "The Bear",
    // "tt7631058" : "The Lord of the Rings: The Rings of Power",
    // "tt4574334": "Stranger Things",
    // "tt4158110": "Mr. Robot",
    // "tt2575988": "Silicon Valley",
    // "tt0979432": "Boardwalk Empire",
    // "tt4786824": "The Crown",
    // "tt2707408": "Narcos",
    // "tt3032476": "Better Call Saul",
    // "tt0248654": "Six Feet Under",
    // "tt0944947": "Game of Thrones",
    // "tt1856010": "House of Cards",
    // "tt0141842": "The Sopranos",
    // "tt4270492": "Billions",
    // "tt1751634": "The Sandman",
    // "tt2149175": "The Americans",
    // "tt1124373": "Sons of Anarchy",
    // "tt0804503": "Mad Men",
    // "tt2372162": "Orange is the New Black",
    // "tt2306299": "Vikings",
    // "tt4052886": "Lucifer",
    // "tt0773262": "Dexter",
    // "tt1796960": "Homeland",
    // "tt0159206": "Sex and the City",
    // "tt0084967": "The A-Team",
    // "tt2661044": "The 100",
    // "tt3749900": "Gotham",
    // "tt0090390": "ALF",
    // "tt7587890": "The Rookie",
    // "tt0411008": "Lost",
    // "tt0491738": "Psych",
    // "tt1830617": "Grimm",
    // "tt1586680": "Shameless",
    // "tt5420376": "Riverdale",
    // "tt1219024": "Castle",
    // "tt1520211": "The Walking Dead",
    // "tt1844624": "American Horror Story",
    // "tt0436992": "Dr. Who"
    "tt2879552"  : "11.22.63",
    "tt0059968" : "Batman",
    "tt0083437" : "Knight Rider",
    "tt0086662" : "Airwolf",
    "tt9140560" : "WandaVision",
    "tt10160804" : "Hawkeye",
    "tt10234724" : "Moon Knight",
    "tt5753856" : "Dark",
    "tt2531336" : "Lupin",
    "tt10048342" : "The Queen's Gambit",
    "tt3322312" : "Daredevil",
    "tt0455275" : "Prison Break",
    "tt1312171" : "The Umbrella Academy",
    "tt6468322" : "Money Heist",
    "tt10919420" : "Squid Game",
    "tt5290382" : "Mindhunter",
    "tt2861424" : "Rick and Morty",
    "tt9208876" : "The Falcon and the Winter Soldier"
};
let imdbEpisodeIds = [];



/**
 * Fetch episode IDs for a given series ID
 * @param {string} seriesId - The IMDb ID of the series
 * @returns {Promise<string[]>} - A promise that resolves to an array of episode IDs
 */
async function fetchEpisodeIds(seriesId) {
    return fetch(`${BASE_URL}?i=${seriesId}&apikey=${API_KEY}`)
        .then(response => response.json())
        .then(series => {
            if (series.Response === 'True' && series.Type === 'series') {
                const totalSeasons = parseInt(series.totalSeasons, 10);
                const seasonRequests = [];

                for (let i = 1; i <= totalSeasons; i++) {
                    seasonRequests.push(
                        fetch(`${BASE_URL}?i=${seriesId}&Season=${i}&apikey=${API_KEY}`)
                            .then(response => response.json())
                            .then(season => season.Episodes || [])
                            .catch(() => []) // Handle errors and return an empty array if needed
                    );
                }

                return Promise.all(seasonRequests)
                    .then(results => {
                        const episodeIds = [];
                        results.forEach(season => {
                            season.forEach(episode => {
                                if (episode.imdbID) {
                                    episodeIds.push(episode.imdbID);
                                }
                            });
                        });
                        return episodeIds;
                    })
                    .catch(() => []); // Handle errors and return an empty array if needed
            } else {
                return [];
            }
        })
        .catch(() => []); // Handle errors and return an empty array if needed
}

/**
 * Fetch episode IDs from all series and combine them
 * @returns {Promise<string[]>} - A promise that resolves to an array of all episode IDs
 */
async function getAllEpisodeIds() {
    const allEpisodeIdsPromises = seriesIds.map(seriesId => fetchEpisodeIds(seriesId));

    return Promise.all(allEpisodeIdsPromises)
        .then(results => results.flat()) // Combine all arrays into one
        .catch(() => []); // Handle errors and return an empty array if needed
}

/**
 * Display the list of episode IDs in the HTML
 */
function displayEpisodeList() {
    const episodeListDiv = document.getElementById('episode-list');
    episodeListDiv.innerHTML = ''; // Clear existing content

    if (imdbEpisodeIds.length === 0) {
        episodeListDiv.innerHTML = '<p>No episodes found.</p>';
        return;
    }

    const formattedEpisodeIds = imdbEpisodeIds.map(id => `"${id}"`).join(',\n    ');
    episodeListDiv.innerHTML = `<pre id="episodes-block">private readonly imdbEpisodeIds: string[] = [\n    ${formattedEpisodeIds}\n];</pre>`;
    episodeListDiv.innerHTML += `
    <button id="copy-episodes-button" class="copy-button">Copy Episodes array</button>`;


    document.getElementById('copy-episodes-button').addEventListener('click', () => {
        copyToClipboard('episodes-block');
    });
}

/**
 * Display the series data in the HTML
 */
function displaySeriesData(seriesData) {
    const seriesDataDiv = document.getElementById('series-data');
    const formattedSeriesData = Object.entries(seriesData).map(([id, name]) => {
        return `"${id}": "${name}"`;
    }).join(',\n    ');

    seriesDataDiv.innerHTML = `<pre id="series-block">private readonly seriesData: { [seriesId: string]: string } = {\n    ${formattedSeriesData}\n}</pre>`;
    seriesDataDiv.innerHTML += `
    <button id="copy-series-button" class="copy-button">Copy Series Data object</button>`;

    document.getElementById('copy-series-button').addEventListener('click', () => {
        copyToClipboard('series-block');
    });
}

/** 
 * Copy the content of the code block to the clipboard
 */
function copyToClipboard(element) {
    console.log(element);
    const codeBlock = document.getElementById(element);
    const textArea = document.createElement('textarea');
    textArea.value = codeBlock.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert("Copied " + element + " data to clipboard!");
}


// Event listener for the button to load and display episodes
document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('load-episodes').addEventListener('click', () => {
        // Convert seriesIds to seriesData and display it on page load
        displaySeriesData(seriesData);
        getAllEpisodeIds().then(ids => {
            imdbEpisodeIds = ids; // Store the fetched episode IDs
            displayEpisodeList(); // Display the episode list
        });
    });
            
});






