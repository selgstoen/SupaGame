/// <reference path="../scripts/modules/typings/jquery.d.ts"/>

//import $ = require("jquery");

export interface IRepository {
    GetUsers();
    GetScore(id: number);
}

export class Repository {
    private $;

    constructor($) {
        this.$ = $;
    }
    private users = [
        { id: 1, name: "Svein Elgstøen" },
        { id: 2, name: "Heidi Elisabeth Paulsen" },
    ];

    private scores = [
        { id: 1, points: [3, 4, 3, 5, 4] },
        { id: 2, points: [6, 6, 3, 5, 4] }
    ];

    GetUsers() {
        return this.users;
    }

    GetScore(id: number) {

        var result = this.$.grep(this.scores, function (s) { return s.id === id; });

        if (result.length === 0) {
            return [];
        }
        return result[0].points;
    }
};


// define(function () {
//     return function repository($, ko) {
//         var users = [
//             { id: 1, name: "Svein Elgstøen" },
//             { id: 2, name: "Heidi Elisabeth Paulsen" },
//         ];

//         var scores = [
//             { id: 1, points: [3, 4, 3, 5, 4] },
//             { id: 2, points: [6, 6, 3, 5, 4] }
//         ]

//         return {
//             getUsers: function () {
//                 return users;
//             },

//             getScore: function (id) {

//                 var result = $.grep(scores, function(s){ return s.id == id; });

//                 if(result.length === 0) {
//                     return [];
//                 }
//                 return result[0].points;

//             }
//         }
//     };
// });
