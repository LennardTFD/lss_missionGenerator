var vals = [
"caption", "fire_value", "police_value", 
"credits",
"feuerwache_count", "rettungswache_count", "max_rettungswache_building", "police_count", "max_police_building",
"poi_type", "icon", "main_building",
"date_start", "date_end",
"need_lf", "need_lf_chance", "allow_rw_instead_of_lf",
"need_elw1", "need_elw1_chance",
"need_elw2", "need_elw2_chance",
"need_dlk", "need_dlk_chance",
"need_rw", "need_rw_chance",
"need_gwl2wasser", "need_gwl2wasser_chance",
"need_gwa", "need_gwa_chance",
"need_gwoil", "need_gwoil_chance",
"need_gwmess", "need_gwmess_chance",
"need_gwgefahrgut", "need_gwgefahrgut_chance",
"need_gwhoehenrettung", "need_gwhoehenrettung_chance",

"need_dekon_p", "need_dekon_p_chance",
"need_fwk", "need_fwk_chance",
"need_arff", "need_arff_chance",
"need_rettungstreppe", "need_rettungstreppe_chance",

"possible_patient_min", "possible_patient", "patient_extension_id", "possible_patient_gender",
"patient_modus", "allow_ktw_b_instead_of_rtw", "allow_ktw_instead_of_rtw", "transport_need_quote", "need_gw_san", "need_gw_san_chance", "nef_need_quote", "rth_need_quote",

"need_streifenwagen", "need_streifenwagen_chance",
"need_fukw", "need_fukw_chance",
"need_lebefkw", "need_lebefkw_chance",
"need_grukw", "need_grukw_chance",
"need_wasserwerfer", "need_wasserwerfer_chance",
"need_gefkw", "need_gefkw_chance",
"need_polizeihubschrauber", "need_polizeihubschrauber_chance",

"possible_prisoner",

"need_thw_gkw", "need_thw_gkw_chance",
"need_thw_mzkw", "need_thw_mzkw_chance",
"need_thw_mtwtz", "need_thw_mtwtz_chance",
"need_thw_lkw", "need_thw_lkw_chance",
"need_thw_brmg_r", "need_thw_brmg_r_chance",
"need_thw_dle", "need_thw_dle_chance"

];

var vehs = [
"need_lf",
"need_elw1",
"need_elw2",
"need_dlk", 
"need_rw",
"need_gwl2wasser",
"need_gwa",
"need_gwoil",
"need_gwmess",
"need_gwgefahrgut",
"need_gwhoehenrettung",

"need_dekon_p",
"need_fwk",
"need_arff",
"need_rettungstreppe",

"need_gw_san",

"need_streifenwagen",

"need_fukw",
"need_lebefkw",
"need_grukw",
"need_wasserwerfer",
"need_gefkw",
"need_polizeihubschrauber",

"need_thw_gkw",
"need_thw_mzkw",
"need_thw_mtwtz",
"need_thw_lkw",
"need_thw_brmg_r",
"need_thw_dle"
];


var missionRoh = `
:id => ,
:caption => %1,
:fire_value => %2,
:police_value => %3,
:credits => %4,
:feuerwache_count => $5,
:rettungswache_count => $6,
:max_rettungswache_building => $7,
:police_count => $8,
:max_police_building => $9,

:poi_type => $10,
:icon => $11,
:main_building => $12,

:date_start => $13,
:date_end => $14,

:need_lf => $15,
:need_lf_chance => $16,
:allow_rw_instead_of_lf => $17,
:need_elw1 => $18,
:need_elw1_chance => $19,
:need_elw2 => $20,
:need_elw2_chance => $21,
:need_dlk => $22,
:need_dlk_chance => $23,
:need_rw => $24,
:need_rw_chance => $25,
:need_gwl2wasser => $26,
:need_gwl2wasser_chance => $27,
:need_gwa => $28,
:need_gwa_chance => $29,
:need_gwoil => $30,
:need_gwoil_chance => $31,
:need_gwmess => $32,
:need_gwmess_chance => $33,
:need_gwgefahrgut => $34,
:need_gwgefahrgut_chance => $35,
:need_gwhoehenrettung => $36,

:possible_patient_min => $37,
:possible_patient => $38,
:patient_extension_id => $39,
:possible_patient_gender => $40,

:patient_modus => $41,
:transport_need_quote => $42,
:nef_need_quote => $43,

:need_streifenwagen => $44,
:need_streifenwagen_chance => $45,

:possible_prisoner => $46
`;




var arr_poi = [
  [
    "none",
    "Überall"
  ],
  [
    "0",
    "Park"
  ],
  [
    "1",
    "See"
  ],
  [
    "2",
    "Krankenhaus"
  ],
  [
    "3",
    "Wald"
  ],
  [
    "4",
    "Bushaltestelle"
  ],
  [
    "5",
    "Straßenbahnhaltestelle"
  ],
  [
    "6",
    "Bahnhof (Regionalverkehr)"
  ],
  [
    "7",
    "Bahnhof (Regionalverkehr und Fernverkehr)"
  ],
  [
    "8",
    "Güterbahnhof"
  ],
  [
    "9",
    "Supermarkt (Klein)"
  ],
  [
    "10",
    "Supermarkt (Groß)"
  ],
  [
    "11",
    "Tankstelle"
  ],
  [
    "12",
    "Schule"
  ],
  [
    "13",
    "Museum"
  ],
  [
    "14",
    "Einkaufszentrum"
  ],
  [
    "15",
    "Auto-Werkstatt"
  ],
  [
    "16",
    "Autobahnauf.- / abfahrt"
  ],
  [
    "17",
    "Weihnachtsmarkt"
  ],
  [
    "18",
    "Lagerhalle"
  ],
  [
    "19",
    "Diskothek"
  ],
  [
    "20",
    "Stadion"
  ],
  [
    "21",
    "Bauernhof"
  ],
  [
    "22",
    "Bürokomplex"
  ],
  [
    "23",
    "Schwimmbad"
  ],
  [
    "24",
    "Bahnübergang"
  ],
  [
    "25",
    "Theater"
  ],
  [
    "26",
    "Festplatz"
  ],
  [
    "27",
    "Fluss"
  ],
  [
    "28",
    "Baumarkt"
  ],
  [
    "29",
    "Flughafen (klein): Start-/Landebahn"
  ],
  [
    "30",
    "Flughafen (klein): Gebäude"
  ],
  [
    "31",
    "Flughafen (klein): Flugzeug Standplatz"
  ],
  [
    "32",
    "Flughafen (groß): Start-/Landebahn"
  ],
  [
    "33",
    "Flughafen (groß): Terminal"
  ],
  [
    "34",
    "Flughafen (groß): Vorfeld / Standplätze"
  ],
  [
    "35",
    "Flughafen (groß): Parkhaus"
  ],
  [
    "36",
    "Biogasanlage"
  ]
];
