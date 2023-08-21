import Burger from "./Assets/burger.jpg"
import Duyu from "./Assets/duyu.png"
import Heftebecer from "./Assets/heftebecer.jpg"
import Katletyumurta from "./Assets/katletyumurta.jpg"
import Pizza from "./Assets/pizza.jpg"
import Qamburqer from "./Assets/qamburqer.jpg"
import Salat from "./Assets/salat.jpg"
import Salat2 from "./Assets/salat2.jpg"
import Tavada from "./Assets/tavada.jpg"
import Vermesil from "./Assets/vermesil.jpg"
import Lule from "./Assets/lule.jpg"
import Doner from "./Assets/doner.jpg"
import Product1 from "./Assets/product1.jpg"
import Product2 from "./Assets/product2.jpg"
import Product3 from "./Assets/product3.jpg"
import ProductLogo from "./Assets2/Logo.png"


// moorning set menu image
import BalQaymaq from "./Assets2/MorningSetMenuAssets/BalQaymaq.jpg"
import DuyuSiyigi from "./Assets2/MorningSetMenuAssets/DuyuSiyigi.jpg"
import MeyveSiresi from "./Assets2/MorningSetMenuAssets/MeyveSiresi.jpg"
import Omlet from "./Assets2/MorningSetMenuAssets/Omlet.jpg"
import Terevez from "./Assets2/MorningSetMenuAssets/Terevez.jpg"
import Terevez2 from "./Assets2/MorningSetMenuAssets/Terevez2.jpg"
import Terevez3 from "./Assets2/MorningSetMenuAssets/Terevez3.png"
import Honey from "./Assets2/MorningSetMenuAssets/Honey.png"
import Honey2 from "./Assets2/MorningSetMenuAssets/Honey2.png"









const menu = [
    {
        img: Burger,
    },
    {
        img: Duyu,
    },
    {
        img: Heftebecer,
    },
    {
        img: Katletyumurta,
    },
    {
        img: Pizza,
    },
    {
        img: Qamburqer,
    },
    {
        img: Salat,
    },
    {
        img: Salat2,
    },
    {
        img: Tavada,
    },
    {
        img: Vermesil,
    },
    {
        img: Doner,
    },
    {
        img: Lule,
    },
]

const morningSetmenu = [
    {
        setOne: {
            id: 1,
            name: "Tərəvəz",
            img: Honey,
            twoFoods: {
                name: "Düyü sıyığı",
                img: DuyuSiyigi,

            },
            treeFoods: {
                name: "Bal, qaymaq",
                img: Honey2,
            },
            fooFoods: {
                name: "Omlet",
                img: Omlet,
            },
            fiveFoods: {
                name: "Meyvə şirəsi",
                img: MeyveSiresi,
            }
        },
        setTwo: {
            id: 2,
            name: "Manna",
            img: Honey,
            twoFoods: {
                name: "Pamidor,xiyar",
                img: DuyuSiyigi,

            },
            treeFoods: {
                name: "Pendir,şor",
                img: Honey2,
            },
            fooFoods: {
                name: "Toyuqlu omlet",
                img: Omlet,
            },
            fiveFoods: {
                name: "Kopiçino",
                img: MeyveSiresi,
            }
        },
        setTree: {
            id: 3,
            name: "Yayla supu",
            img: Honey,
            twoFoods: {
                name: "Tərəvəz salatı",
                img: DuyuSiyigi,

            },
            treeFoods: {
                name: "Bal,qaymaq",
                img: Honey2,
            },
            fooFoods: {
                name: "Mənəmə",
                img: Omlet,
            },
            fiveFoods: {
                name: "5 inn 1 kokteyil",
                img: MeyveSiresi,
            }
        },
        setFo: {
            id: 4,
            name: "Səhər şorbası",
            img: Honey,
            twoFoods: {
                name: "Pendirli pamidor salatı",
                img: DuyuSiyigi,

            },
            treeFoods: {
                name: "Dietik Kəsmik",
                img: Honey2,
            },
            fooFoods: {
                name: " yumurta",
                img: Omlet,
            },
            fiveFoods: {
                name: "Limon kokteyil",
                img: MeyveSiresi,
            }
        },
        setFive: {
            id: 5,
            name: "Şəhriyə supu",
            img: Honey,
            twoFoods: {
                name: "5 inn 1 salatı",
                img: DuyuSiyigi,

            },
            treeFoods: {
                name: "Şor,pendir",
                img: Honey2,
            },
            fooFoods: {
                name: "Pendir topları",
                img: Omlet,
            },
            fiveFoods: {
                name: "Kofe",
                img: MeyveSiresi,
            }
        }

    },



]
const businessLunchSetmenu = [  
    {
        setOne: {
            id: 6,
            name: "Mərçi",
            img: Honey,
            twoFoods: {
                name: "Paytaxt",
                img: DuyuSiyigi,

            },
            treeFoods: {
                name: "Düyü",
                img: Honey2,
            },
            fooFoods: {
                name: "Ət Kotlet",
                img: Omlet,
            },
            fiveFoods: {
                name: "Kola və Desert",
                img: MeyveSiresi,
            }
        },
        setTwo: {
            id: 7,
            name: "Tomat şorbası",
            img: Honey,
            twoFoods: {
                name: "Mimoza",
                img: DuyuSiyigi,

            },
            treeFoods: {
                name: "Qreçka",
                img: Honey2,
            },
            fooFoods: {
                name: "Langet (toyuq)",
                img: Omlet,
            },
            fiveFoods: {
                name: "Ayran",
                img: MeyveSiresi,
            }
        },
        setTree: {
            id: 8,
            name: "Yayla",
            img: Honey,
            twoFoods: {
                name: "Sezar",
                img: DuyuSiyigi,

            },
            treeFoods: {
                name: "Spagetti",
                img: Honey2,
            },
            fooFoods: {
                name: "Kartof köftə",
                img: Omlet,
            },
            fiveFoods: {
                name: "Meyvə şirəsi",
                img: MeyveSiresi,
            }
        },
        setFo: {
            id: 9,
            name: "Göbələk şorbası",
            img: Honey,
            twoFoods: {
                name: "Çoban salatı",
                img: DuyuSiyigi,

            },
            treeFoods: {
                name: "Püre",
                img: Honey2,
            },
            fooFoods: {
                name: "Tava kababı",
                img: Omlet,
            },
            fiveFoods: {
                name: "Kokteyil",
                img: MeyveSiresi,
            }
        },
        setFive: {
            id: 10,
            name: "Toyuq şorbası",
            img: Honey,
            twoFoods: {
                name: "Tərəvəz salatı",
                img: DuyuSiyigi,

            },
            treeFoods: {
                name: "(5 inn 1 sousu)",
                img: Honey2,
            },
            fooFoods: {
                name: "(5 inn 1 bfsks)",
                img: Omlet,
            },
            fiveFoods: {
                name: "Sprity",
                img: MeyveSiresi,
            }
        }

    },



]
const LunchSetmenu = [
    {
        setOne: {
            id: 11,
            name: "Mərci",
            img: Honey,
            twoFoods: {
                name: "Sezar salatı",
                img: DuyuSiyigi,

            },
            treeFoods: {
                name: "Spaggetti",
                img: Honey2,
            },
            fooFoods: {
                name: "Langet (toyuq)",
                img: Omlet,
            },
            fiveFoods: {
                name: "Coca-cola",
                img: MeyveSiresi,
            }
        },
        setTwo: {
            id: 12,
            name: "Yayla supu",
            img: Honey,
            twoFoods: {
                name: "Çoban salatı",
                img: DuyuSiyigi,

            },
            treeFoods: {
                name: "Kartof topları",
                img: Honey2,
            },
            fooFoods: {
                name: "Göbəkli sote (toyuqla)",
                img: Omlet,
            },
            fiveFoods: {
                name: "Coca-cola",
                img: MeyveSiresi,
            }
        },
        setTree: {
            id: 13,
            name: "Tomat şorbası",
            img: Honey,
            twoFoods: {
                name: "Paytaxt salatı",
                img: DuyuSiyigi,

            },
            treeFoods: {
                name: "Qreçka",
                img: Honey2,
            },
            fooFoods: {
                name: "Qazan kotlet",
                img: Omlet,
            },
            fiveFoods: {
                name: "Fanta",
                img: MeyveSiresi,
            }
        },
        setFo: {
            id: 14,
            name: "Toyuq şorbası",
            img: Honey,
            twoFoods: {
                name: "Mimoza salatı",
                img: DuyuSiyigi,

            },
            treeFoods: {
                name: "Düyü",
                img: Honey2,
            },
            fooFoods: {
                name: " Toyuq qızartması",
                img: Omlet,
            },
            fiveFoods: {
                name: "Kokteyil",
                img: MeyveSiresi,
            }
        },
        setFive: {
            id: 15,
            name: "Göbələk şorbası",
            img: Honey,
            twoFoods: {
                name: "Tərəvəz salatı",
                img: DuyuSiyigi,

            },
            treeFoods: {
                name: "Bulğur",
                img: Honey2,
            },
            fooFoods: {
                name: "Langet (ət)",
                img: Omlet,
            },
            fiveFoods: {
                name: "Limon kokteyil",
                img: MeyveSiresi,
            }
        }

    },



]
const NightSetMenu = [
    {
        setOne: {
            id: 16,
            name: "Tomat şorbası",
            img: Honey,
            twoFoods: {
                name: "Paytaxt salatı",
                img: DuyuSiyigi,

            },
            treeFoods: {
                name: "Düyü",
                img: Honey2,
            },
            fooFoods: {
                name: "Ianget (ət)",
                img: Omlet,
            },
            fiveFoods: {
                name: "Ayran",
                img: MeyveSiresi,
            }
        },
        setTwo: {
            id: 17,
            name: "Mərci şorbası",
            img: Honey,
            twoFoods: {
                name: "Mimoza salatı",
                img: DuyuSiyigi,

            },
            treeFoods: {
                name: "Qreçka",
                img: Honey2,
            },
            fooFoods: {
                name: "Toyuq qızartması",
                img: Omlet,
            },
            fiveFoods: {
                name: "Coca-cola",
                img: MeyveSiresi,
            }
        },
        setTree: {
            id: 18,
            name: "Toyuq şorbası",
            img: Honey,
            twoFoods: {
                name: "Çoban salatı",
                img: DuyuSiyigi,

            },
            treeFoods: {
                name: "Kartof topları",
                img: Honey2,
            },
            fooFoods: {
                name: "Göbələkli ət qızartması",
                img: Omlet,
            },
            fiveFoods: {
                name: "Kokteyil",
                img: MeyveSiresi,
            }
        },
        setFo: {
            id: 19,
            name: "Yayla şorbası",
            img: Honey,
            twoFoods: {
                name: "Tərəvəz salatı",
                img: DuyuSiyigi,

            },
            treeFoods: {
                name: "Bulğur",
                img: Honey2,
            },
            fooFoods: {
                name: " Langet (toyuq)",
                img: Omlet,
            },
            fiveFoods: {
                name: "Fanta",
                img: MeyveSiresi,
            }
        },
        setFive: {
            id: 20,
            name: "Göbələl şorbası",
            img: Honey,
            twoFoods: {
                name: "5 inn 1 salatı",
                img: DuyuSiyigi,

            },
            treeFoods: {
                name: "Spaggetti",
                img: Honey2,
            },
            fooFoods: {
                name: "Tava kababı",
                img: Omlet,
            },
            fiveFoods: {
                name: "Meyvə şirəsi",
                img: MeyveSiresi,
            }
        }

    },



]
const Evening = [
    {
        setOne: {
            id: 21,
            name: "Mərci şorbası",
            img: Honey,
            twoFoods: {
                name: "Çoban salatı",
                img: DuyuSiyigi,

            },
            treeFoods: {
                name: "Düyü",
                img: Honey2,
            },
            fooFoods: {
                name: "Dürüm",
                img: Omlet,
            },
            fiveFoods: {
                name: "Coca-cola",
                img: MeyveSiresi,
            }
        },
        setTwo: {
            id: 22,
            name: "Göbələk şorbası",
            img: Honey,
            twoFoods: {
                name: "Tərəvəz salatı",
                img: DuyuSiyigi,
            },
            treeFoods: {
                name: "Bulğur",
                img: Honey2,
            },
            fooFoods: {
                name: "Yumurtalı toyuq lavaşda",
                img: Omlet,
            },
            fiveFoods: {
                name: "Meyvə şirəsi",
                img: MeyveSiresi,
            }
        },
        setTree: {
            id: 23,
            name: "Yayla supu",
            img: Honey,
            twoFoods: {
                name: "Paytaxt salatı",
                img: DuyuSiyigi,

            },
            treeFoods: {
                name: "Spaggetti",
                img: Honey2,
            },
            fooFoods: {
                name: "Göbələkli toyuq",
                img: Omlet,
            },
            fiveFoods: {
                name: "Kokteyil",
                img: MeyveSiresi,
            }
        },
        setFo: {
            id: 24,
            name: "Tomat şorbası",
            img: Honey,
            twoFoods: {
                name: "Mimoza salatı",
                img: DuyuSiyigi,

            },
            treeFoods: {
                name: "Kartof topları",
                img: Honey2,
            },
            fooFoods: {
                name: " Toyuq souzu",
                img: Omlet,
            },
            fiveFoods: {
                name: "Fanta",
                img: MeyveSiresi,
            }
        },
        setFive: {
            id: 25,
            name: "Toyuq şorbası",
            img: Honey,
            twoFoods: {
                name: "5 inn 1 salatı",
                img: DuyuSiyigi,

            },
            treeFoods: {
                name: "Qreçka",
                img: Honey2,
            },
            fooFoods: {
                name: "Kotlet (Ət)",
                img: Omlet,
            },
            fiveFoods: {
                name: "Limonlu kokteyil",
                img: MeyveSiresi,
            }
        }

    }



]


// OurMenus

const Sorbalar = [
         {
            id: 26,
            name: "Mərci",
            img: Honey2,
            price: "2.00",
            terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
        },
         {
            id: 27,
            name: "Toyuq",
            img: Honey2,
            price: "2.50",
            terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
        },
        {
            id: 28,
            name: "Yayla",
            img: Honey2,
            price: "3.00",
            terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
        },
         {
            id: 29,
            name: "Tomat",
            img: Honey2,
            price: "3.00",
            terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
        },
         {
            id: 30,
            name: "Göbələk",
            img: Honey2,
            price: "3.00",
            terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
        }
    
]

const Salatlar = [
    {
       id: 31,
       name: "Sezar",
       img: Honey2,
       price: "1.50",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   },
    {
       id: 32,
       name: "Çoban",
       img: Honey2,
       price: "2.00",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   },
   {
       id: 33,
       name: "Paytaxt",
       img: Honey2,
       price: "3.00",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   },
    {
       id: 34,
       name: "Mimoza",
       img: Honey2,
       price: "3.00",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   },
    {
       id: 35,
       name: "Toyuq(5 in 1)",
       img: Honey2,
       price: "3.00",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   }

]

const Lahmacunlar = [
    {
       id: 36,
       name: "Sadə",
       img: Honey2,
       price: "2.50",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   },
    {
       id: 37,
       name: "Acılı",
       img: Honey2,
       price: "2.50",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   },
   {
       id: 38,
       name: "Pendirli",
       img: Honey2,
       price: "3.00",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   },
    {
       id: 39,
       name: "Türk üsulu",
       img: Honey2,
       price: "3.50",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   },
    {
       id: 40,
       name: "Qarışıq",
       img: Honey2,
       price: "4.00",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   }

]

const Pideler = [
    {
       id: 41,
       name: "Acılı",
       img: Honey2,
       price: "5.00",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   },
    {
       id: 42,
       name: "Pendirli",
       img: Honey2,
       price: "5.00",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   },
   {
       id: 43,
       name: "Toyuqlu",
       img: Honey2,
       price: "5.50",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   },
    {
       id: 44,
       name: "Qiyməli",
       img: Honey2,
       price: "6.00",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   },
    {
       id: 45,
       name: "Qarışıq",
       img: Honey2,
       price: "7.00",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   }

]

const IstiFoods = [
    {
       id: 46,
       name: "Mənəmən",
       img: Honey2,
       price: "4.00",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   },
    {
       id: 47,
       name: "Göbələk qovurması toyuq ilə",
       img: Honey2,
       price: "6.00",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   },
   {
       id: 48,
       name: "Yarpaq dolması",
       img: Honey2,
       price: "6.00",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   },
    {
       id: 49,
       name: "Kotlet (toyuq)",
       img: Honey2,
       price: "1.50",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   },
    {
       id: 50,
       name: "Kotlet (ət)",
       img: Honey2,
       price: "2.00",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   },
   {
       id: 51,
       name: "Kiev kotleti",
       img: Honey2,
       price: "2.50",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
    },
    {
        id: 52,
        name: "Spagetti toyuq sote ilə",
        img: Honey2,
        price: "5.00",
        terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
    },
    {
        id: 53,
        name: "Spagetti ətli sote ilə",
        img: Honey2,
        price: "6.00",
        terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
    },
    {
        id: 54,
        name: "Sadə toyuq qızartması",
        img: Honey2,
        price: "4.00",
        terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
    },
    {
        id: 55,
        name: "Toyuq langeti",
        img: Honey2,
        price: "5.00",
        terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
    },
    {
        id: 56,
        name: "Ət langeti",
        img: Honey2,
        price: "6.00",
        terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
    }

]

const Qarnir = [
    {
       id: 57,
       name: "Kartof fri",
       img: Honey2,
       price: "2.50",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   },
    {
       id: 58,
       name: "Düyü",
       img: Honey2,
       price: "2.00",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   },
   {
       id: 59,
       name: "Spagetti",
       img: Honey2,
       price: "2.00",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   },
    {
       id: 60,
       name: "Püre",
       img: Honey2,
       price: "2.00",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   },
]

const Icki = [
    {
       id: 61,
       name: "Su qazlı/qazsız",
       img: Honey2,
       price: "0.60",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   },
    {
       id: 62,
       name: "Ayran",
       img: Honey2,
       price: "0.70",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   },
   {
       id: 63,
       name: "Cola 0.5 ml",
       img: Honey2,
       price: "1.50",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   },
    {
       id: 64,
       name: "Meyvə şirəsi",
       img: Honey2,
       price: "2.00",
       terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
   },
   {
    id: 65,
    name: "Qəhvə",
    img: Honey2,
    price: "1.50",
    terkibi: "Dogranmis toyuq eti,sogan,bir bas sarimsaq, terkadan kecmis markov"
    }
]


export { menu, morningSetmenu, businessLunchSetmenu, LunchSetmenu, NightSetMenu, Evening, Sorbalar,Salatlar ,Lahmacunlar, Pideler, IstiFoods, Qarnir, Icki}