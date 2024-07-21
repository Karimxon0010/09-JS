let fruits = [
    {
        uz: "Olma",
        en: "Apple",
    },
    {
        uz: "Gilos",
        en: "Cherry",
    },
    {
        uz: "Ananas",
        en: "Pineapple",
    },
    {
        uz: "Banan",
        en: "Banana",
    },
    {
        uz: "Qulupnay",
        en: "Strawberries",
    },
    {
        uz: "Uzum",
        en: "Grapes",
    },
    {
        uz: "Mandarin",
        en: "Mandarin",
    },
    {
        uz: "Kivi",
        en: "Kiwi",
    },
    {
        uz: "Shaftoli",
        en: "Peach",
    },
    {
        uz: "Anor",
        en: "Pomegranate",
    },
    {
        uz: "nok",
        en: "Pear",
    }
]

let meva = prompt("Meva nomini kiriting")

fruits.filter(item => {
    if(item.uz == meva){
        console.log(item.en);
    }
})















































// let num001 = 987

// let yuzliklar001 =  num001 % 10  
// let onliklar001 = Math.floor(num001 / 10 % 10)
// let birliklar001 = Math.floor(num001 / 100)

// console.log( yuzliklar001 * onliklar001 * birliklar001 );



// let num = 1337

// let mingliklar = Math.floor(num / 1000)
// let yuzliklar = Math.floor(num % 1000 / 100)
// let onliklar = Math.floor(num / 100 % 10)
// let birliklar = num % 10


// let resoult001 =  mingliklar * yuzliklar * onliklar * birliklar 
// let resoult002 = resoult001 % 2 == 0 ? "Juft son" : "Toq son"
// console.log(resoult001 + "  " + resoult002);



// let massiv = [43, 1, 123, 43, 64, 234, 65, 34, 55, 34, 333, 999, 546, 23, 777]

// let resoult003 = massiv.filter(item => item % 2 == 0) 
// let resoult004 = massiv.filter(item => item % 2 != 0)

// console.log(resoult003, "Juft sonlar");
// console.log(resoult004, "Toq sonlar ");



// let ball = [65, 70, 160, 170, 190, 80, '90', '112', '130', 145, ]

// ball.sort((a,b) => a - b)
// ball.reverse()

// console.log(ball);



// let markalar = ["Chevrolet", "Dodge", "BMW", "Mersedes", "TOYOTA", "Cherry", "BYW", "Li",]

// markalar.pop()
// markalar.splice(5,0 , "Li")

// console.log(markalar);



// let kabisa = prompt("Yilingizni kiriting")

// let resoult005 = kabisa % 4 == 0 ? " Kabisa yili " : "Kabisa yili emas"

// console.log(kabisa + "-yil " + resoult005);



// let num1 = prompt("Birinchi soningizni kiriting")
// let num2 = prompt("Ikkinchi soningizni kiriting")

// let resoult006 = num1 * num2 

// let resoult007 = resoult006 % 2 == 0 ? "Juft son" : "Toq son"

// console.log(resoult007);



// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

// let random = Math.floor(Math.random()*numbers.length)

// alert(random)







































// let logIn = prompt("Enter the login")
// let password = prompt("Enter the password")

// if(logIn == "admin" && password == 11112222){
//     console.log("Login and password accepted");
// } else {console.log("Login or password ERROR");}



// let num1 = prompt("Soningizni kiriting")

// if(num1 == 0){
//     console.log("Siz yozgan son 0 ga teng");
// } else if(num1 % 2 == 0){
//     console.log(num1 + " Juft son ");
// } else{console.log(num1 + " Toq son ");}



// let num2 = prompt("Yilingizni kiriting")

// if(num2 % 4 == 0){
//     console.log("Siz yozgan yili Kabisa yili");
// } else{console.log("siz yozgan yil Kabisa yili emas");}



// let num3 = prompt("Birinchi sonni kiriting")
// let num4 = prompt("Ikkinchi sonni kiriting")

// if(num3 > num4){
//     console.log(num3, num4 ,"dan katta ");
// } else if(num3 < num4){
//     console.log(num4, num3, "dan katta " );
// }



// let num5 = prompt("Birinchi sonni kiriting")
// let num6 = prompt("Ikkinchi sonni kiriting")

// if(num5 < num6){
//     console.log(num5, num6 ,"dan kichik ");
// } else if(num5 > num6){
//     console.log(num6, num5, "dan kichik " );
// }



// let num7 = prompt("Birinchi sonni kiriting")
// let num8 = prompt("Ikkinchi sonni kiriting")
// let num9 = prompt("Uchinchi sonni kiriting")

// if(num7 > num8 && num7 > num9){
//     console.log(num7 + " Eng katta son ");
// } else if(num8 > num7 && num8 > num9){
//     console.log(num8 + " Eng katta son ");
// } else if(num9 > num7 && num9 > num8){
//     console.log(num9 + " Eng katta son ");
// }



// let num001 = prompt("Birinchi sonni kiriting")
// let num002 = prompt("Ikkinchi sonni kiriting")
// let num003 = prompt("Uchinchi sonni kiriting")

// if(num001 < num002 && num001 < num003){
//     console.log(num001 + " Eng kichik son ");
// } else if(num002 < num001 && num002 < num003){
//     console.log(num002 + " Eng kichik son ");
// } else if(num003 < num001 && num003 < num002){
//     console.log(num003 + " Eng kichik son ");
// }



// let num004 = prompt("Birinchi sonni kiriting")
// let num005 = prompt("Ikkinchi sonni kiriting")

// if(num004 > num005){
//     console.log(num005, num004);
// } else if(num005 > num004){
//     console.log(num004, num005);
// }
