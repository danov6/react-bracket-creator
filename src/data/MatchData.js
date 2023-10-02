const MatchData = [
    {
      "id": 0,
    //   "name": "Final - Match", // Text underneath the match
      "nextMatchId": 2, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    //   "tournamentRoundText": "4", // Text for Round Header
    //   "startTime": "2021-05-30", // Match date
      "state": "SCORE_DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
      "participants": [
        {
        //   "id": "", // Unique identifier of any kind
        //   "resultText": "WON", // The text that is next next to user ("Winner" perhaps?)
        //   "isWinner": false,
          "status": null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
          "name": "Gio Valdez"
        },
        {
        //   "id": "",
        //   "resultText": "WON", // The text that is next to user ("Winner" perhaps?)
            // "isWinner": true,
        "status": null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
          "name": "Johnny Aroe"
        }
      ]
    },
    {
        "id": 1,
        "nextMatchId": 2, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        "participants": [
            {
            "name": "Nolan Comicossy"
            },
            {
            "name": "bye"
            }
        ]
    },
    {
        "id": 2,
        "nextMatchId": null, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        "participants": [
            {
            "name": ""
            },
            {
            "name": ""
            }
        ]
    },
  ];
  
export default MatchData;