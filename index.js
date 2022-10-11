// import fetch from "node-fetch";
// const n_url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
// const s_url = "https://datausa.io/api/data?drilldowns=State&measures=Population"

const input = `{
    "data":[
       {
          "ID Nation":"01000US",
          "Nation":"United States",
          "ID Year":2019,
          "Year":"2019",
          "Population":328239523,
          "Slug Nation":"united-states"
       },
       {
          "ID Nation":"01000US",
          "Nation":"United States",
          "ID Year":2018,
          "Year":"2018",
          "Population":327167439,
          "Slug Nation":"united-states"
       },
       {
          "ID Nation":"01000US",
          "Nation":"United States",
          "ID Year":2017,
          "Year":"2017",
          "Population":325719178,
          "Slug Nation":"united-states"
       },
       {
          "ID Nation":"01000US",
          "Nation":"United States",
          "ID Year":2016,
          "Year":"2016",
          "Population":323127515,
          "Slug Nation":"united-states"
       },
       {
          "ID Nation":"01000US",
          "Nation":"United States",
          "ID Year":2015,
          "Year":"2015",
          "Population":321418821,
          "Slug Nation":"united-states"
       },
       {
          "ID Nation":"01000US",
          "Nation":"United States",
          "ID Year":2014,
          "Year":"2014",
          "Population":318857056,
          "Slug Nation":"united-states"
       },
       {
          "ID Nation":"01000US",
          "Nation":"United States",
          "ID Year":2013,
          "Year":"2013",
          "Population":316128839,
          "Slug Nation":"united-states"
       }
    ],
    "source":[
       {
          "measures":[
             null
          ],
          "annotations":[
             null
          ],
          "name":"acs_yg_total_population_1",
          "substitutions":[
             
          ]
       }
    ]
 }`;

const unsorted = JSON.parse(input).data;
const data = unsorted.sort((x, y) => {
    if (x.Year < y.Year) return -1;
    if (x.Year > y.Year) return 1;
    return 0;
});
console.log(data);

// Running this file creates a map of years and population change from previous year

// type: module allows usage of es6 export
export const start = () => {
    const map = {};
    for (let i = 0; i < data.length; i++) {
        // Iterate over data, creating year key in map with value of difference
        if (data[i - 1]) {
            let number = data[i].Population - data[i - 1].Population;
            map[data[i].Year] = `Population ${
                Math.sign(number) === -1 ? "decline" : "growth"
            } of: ${number}`;
        } else {
            map[data[i].Year] = data[i].Population;
        }
    }
    return map;
};

console.log("result map:", start());
