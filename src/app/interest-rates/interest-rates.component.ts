import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-interest-rates",
  templateUrl: "./interest-rates.component.html",
  styleUrls: ["./interest-rates.component.css"]
})
export class InterestRatesComponent implements OnInit {
  interestRatesList = [
    {
      id: 1,
      Hypotheek: "ASR WelThuis hypotheek",
      NHG: 0.7,
      "60%": 0.91,
      "80%": 0.92,
      "100%": 1.2
    },
    {
      id: 2,
      Hypotheek: "Hypotrust Vrij Leven Hypotheek",
      NHG: 0.8,
      "60%": 0.9,
      "80%": 1,
      "100%": 0
    },
    {
      id: 3,
      Hypotheek: "Lloyds Bank Hypotheek",
      NHG: 0.8,
      "60%": 0.9,
      "80%": 1,
      "100%": 0
    },
    {
      id: 4,
      Hypotheek: "Vista Hypotheken Hypotheek",
      NHG: 0.82,
      "60%": 0.98,
      "80%": 1.07,
      "100%": 1.43
    },
    {
      id: 5,
      Hypotheek: "BLG Wonen Hypotheek",
      NHG: 0.86,
      "60%": 0.93,
      "80%": 1.07,
      "100%": 1.33
    },
    {
      id: 6,
      Hypotheek: "Obvion Woon Hypotheek",
      NHG: 0.86,
      "60%": 1.01,
      "80%": 1.16,
      "100%": 1.41
    },
    {
      id: 7,
      Hypotheek: "Robuust Hypotheken Hypotheek",
      NHG: 0.86,
      "60%": 1.01,
      "80%": 1.1,
      "100%": 1.38
    },
    {
      id: 8,
      Hypotheek: "RegioBank Hypotheek",
      NHG: 0.87,
      "60%": 1,
      "80%": 1.1,
      "100%": 1.43
    },
    {
      id: 9,
      Hypotheek: "Lot Hypotheek",
      NHG: 0.88,
      "60%": 1.02,
      "80%": 1.12,
      "100%": 1.37
    },
    {
      id: 10,
      Hypotheek: "ABN AMRO Budget Hypotheek Duurzaam",
      NHG: 0.89,
      "60%": 0.97,
      "80%": 1.17,
      "100%": 1.38
    },
    {
      id: 11,
      Hypotheek: "Argenta Hypotheek",
      NHG: 0.89,
      "60%": 0.99,
      "80%": 1.09,
      "100%": 1.39
    },
    {
      id: 12,
      Hypotheek: "Venn Hypotheek",
      NHG: 0.89,
      "60%": 1.22,
      "80%": 1.26,
      "100%": 1.47
    },
    {
      id: 13,
      Hypotheek: "Hypotrust Woon Bewust Hypotheek",
      NHG: 0.9,
      "60%": 1,
      "80%": 1.1,
      "100%": 0
    },
    {
      id: 14,
      Hypotheek: "Nationale Nederlanden Hypotheek",
      NHG: 0.9,
      "60%": 1.15,
      "80%": 1.3,
      "100%": 1.5
    },
    {
      id: 15,
      Hypotheek: "Nationale Nederlanden Hypotheek Nieuwbouw",
      NHG: 0.9,
      "60%": 1.1,
      "80%": 1.2,
      "100%": 1.35
    },
    {
      id: 16,
      Hypotheek: "Woonfonds Woongenot Hypotheek",
      NHG: 0.9,
      "60%": 0.99,
      "80%": 1.13,
      "100%": 1.48
    },
    {
      id: 17,
      Hypotheek: "NIBC Direct Hypotheek",
      NHG: 0.92,
      "60%": 0.96,
      "80%": 1.11,
      "100%": 1.41
    },
    {
      id: 18,
      Hypotheek: "Allianz Hypotheek",
      NHG: 0.94,
      "60%": 1.14,
      "80%": 1.31,
      "100%": 1.79
    },
    {
      id: 19,
      Hypotheek: "Centraal Beheer Thuis Hypotheek",
      NHG: 0.94,
      "60%": 1.08,
      "80%": 1.2,
      "100%": 1.54
    },
    {
      id: 20,
      Hypotheek: "bijBouwe Hypotheek",
      NHG: 0.95,
      "60%": 1.05,
      "80%": 1.16,
      "100%": 1.45
    },
    {
      id: 21,
      Hypotheek: "IQWOON Hypotheek",
      NHG: 0.96,
      "60%": 1.26,
      "80%": 1.31,
      "100%": 1.63
    }
  ];
  constructor() {}

  ngOnInit() {}
}
