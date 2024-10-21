import { Ad1, Himg1, Himg2, Himg3, Himg4 } from "./assets"
import { Ad2 } from "./assets"
import { Ad3 } from "./assets"
import { Ad4 } from "./assets"


const Navdata = [{
    menu: "Exams",
    submenu: [{
        menu: "NEET",
        submenu: [{ menu: "Class 11th" }, { menu: "Class 12th" }, { menu: "Class 12th plus" }]
    },
    {
        menu: "JEE",
        submenu: [{ menu: "Class 11th" }, { menu: "Class 12th" }, { menu: "Class 12th plus" }]
    },
    {
        menu: "Class 6-10",
        submenu: [{ menu: "Class 6th" }, { menu: "Class 7th" }, { menu: "Class 8th " }, { menu: "Class 9th " }, { menu: "Class 10th " }]
    }],
},
{
    menu: "Programs",
    submenu: [{
        menu: "Online programs"
    }, {
        menu: "Classroom Programms"
    },
    {
        menu: "Distance learning"
    }]
},
{
    menu: "Scholarships",
    submenu: [{
        menu: "ADSAT",

    },
    {
        menu: "TALENTEX"
    }]
},
{
    menu: "Test Series",
    submenu: [{
        menu: 'NEET',
        submenu: [{ menu: "Class 11th" }, { menu: "Class 12th" }, { menu: "Class 12th plus" }]
    }, {
        menu: 'JEE(Main+Adv)',
        submenu: [{ menu: "Class 11th" }, { menu: "Class 12th" }, { menu: "Class 12th plus" }]
    }, {
        menu: 'JEE Main',
        submenu: [{ menu: "Class 11th" }, { menu: "Class 12th" }, { menu: "Class 12th plus" }]
    }]
}
]


const adData = [Ad1, Ad2, Ad3, Ad4];
const btntag = [0, 0, 0, 0];
const heroData = [Himg1, Himg2, Himg3, Himg4]

export { Navdata, adData, btntag, heroData }