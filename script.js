// let user = [
//     {
//         email: 'edik45_strelok@mail.ru',
//         name: 'eldos',
//         password: '25062014'
//     }
// ]



// function reserve() {
//     eldos:
//     while (true) {
//         let check = prompt(' 1) Login \n 2) Register \n 3) Admin')
//         if (check == 1) {
//             user.filter((item) => {
//                 checkUser:
//                 while (true) {
//                     let email = prompt('Please write email')
//                     if (email != item.email) {
//                         email = prompt('Please again it`s empy')
//                     } else {
//                         alert('Correct')
//                     }

//                     let name = prompt('Please write name')

//                     if (name != item.name) {
//                         name = prompt('Please again it`s empy')
//                     } else {
//                         alert('Correct')
//                     }

//                     let password = prompt('Please write password')

//                     if (password != item.password) {
//                         password = prompt('Please again it`s empy')
//                     } else {
//                         alert('Correct')
//                     }

//                     break checkUser;
//                 }
//             })
//             break eldos;
//         } else if (check == 2) {
//             register:
//             while (true) {
//                 let email = prompt('Write email')
//                 while (true) {
//                     if (email.includes('@mail.ru')) {
//                         alert('Correct')
//                     } else {
//                         email = prompt('Email Necessarily @mail.ru')
//                         continue;
//                     }
//                     let name = prompt('Please write name')
//                     while (true) {
//                         while (name == "") {
//                             name = +prompt("Item name must not be empty")
//                         }
//                         if (name === null) {
//                             name = prompt('Item name must not be empty')
//                         }
//                         else {
//                             alert('Correct')
//                         }


//                         let password = prompt('Please write u`re password')
//                         while (true) {
//                             if (password.length < 4) {
//                                 password = prompt('U`re password must be more than 4 characters')
//                             } else {
//                                 alert('Correct')
//                                 user.push({
//                                     email: email.toLowerCase(),
//                                     name: name,
//                                     password: password
//                                 })
//                                 console.log(user);
//                                 break register;
//                             }
//                         }
//                     }
//                 }
//             }
//         } else if (check == 3) {
//             alert('Soon, we don`t update this choise')
//         }
//         continue eldos;
//     }
// }

// // reserve()


// let seansec = [
//     {
//         id: 1,
//         name: "Анабель",
//         dateTo: '2023-06-20',
//         count: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 45],
//         ticket: 300
//     },
//     {
//         id: 2,
//         name: "Spider-Man",
//         dateTo: '2023-06-20',
//         count: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 45],
//         ticket: 700
//     },
//     {
//         id: 3,
//         name: "Advenced",
//         dateTo: '2023-06-20',
//         count: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 45],
//         ticket: 500
//     },
//     {
//         id: 4,
//         name: "Main",
//         dateTo: '2023-06-20',
//         count: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 45],
//         ticket: 200
//     },
//     {
//         id: 5,
//         name: "It",
//         dateTo: '2023-06-20',
//         count: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 45],
//         ticket: 100
//     }
// ]

// let total = 0

// let historyName = ''  // Name seances history
// let historyDate = ''  // Name seances date

// function cinema() {
//     while (true) {
//         let askCinema = prompt(' 1) Cinema \n 2) History buy \n 3) Exit')
//         if (askCinema == 1) {
//             let a = ""
//             seansec.filter((item) => {
//                 a += `${item.id})   Название: ${item.name} --- Дата:${item.dateTo} --- ${item.ticket} Цена \n`
//             })
//             let q = prompt(`Какое кино вы желайте: \n ${a}`)

//             seansec.find((item) => {
//                 if (q == item.id) {
//                     let hall = "Places: \n \n"
//                     let place = "        "
//                     item.count.filter((item) => {
//                         if ((item % 5) == 0) {
//                             place += item + '\n'
//                             hall += place
//                             place = "     "
//                         } else {
//                             place += item + " "
//                         }
//                     })
//                     let e = parseInt(prompt(hall))
//                     historyName += `${item.name} \n`
//                     historyDate += `${item.dateTo} \n`
//                     total += item.ticket

//                     for (let i = 0; i < e; i++) {
//                         if (item.count[i] === e) {
//                             item.count.splice(i, 1, "X")
//                         }
//                     }

//                 }
//             })
//         } else if (askCinema == 2) {
//             alert(`${historyName} ${historyDate} \n Сумма: \n ${total}`)
//         } else if (askCinema == 3) {
//             break
//         }
//     }
// }

// cinema()

// let ISO_639_1 = [
//     {
//         id:1,
//         name:'Kyrgyzstan',
//         'ISO':'ky',
//     },
//     {
//         id:2,
//         name:'Russia',
//         'ISO':'ru',
//     },
//     {
//         id:3,
//         name:'Georgia',
//         'ISO':'ka',
//     },
//     {
//         id:4,
//         name:'Ukraine',
//         'ISO':'uk',
//     },
//     {
//         id:5,
//         name:'Chine',
//         'ISO':'zh',
//     },
//     {
//         id:6,
//         name:'Norway',
//         'ISO':'no',
//     },
//     {
//         id:7,
//         name:'Japan',
//         'ISO':'ja',
//     },
//     {
//         id:8,
//         name:'France',
//         'ISO':'fr',
//     },
//     {
//         id:8,
//         name:'Belorus',
//         'ISO':'be',
//     },
// ]

// let people = [
//     {
//         id:1,
//         country:'Kyrgyzstan',
//         name:"Choro",
//         surname:"Umarov"
//     },
//     {
//         id:2,
//         country:'Russia',
//         name:"Sary",
//         surname:"Romanov"
//     },
//     {
//         id:3,
//         country:'Georgia',
//         name:"Maga",
//         surname:"Namangale"
//     },
//     {
//         id:4,
//         country:'Ukraine',
//         name:"Jmen",
//         surname:"Aksyonko"
//     },
//     {
//         id:5,
//         country:'Chine',
//         name:"Li lu",
//         surname:"Go"
//     },
//     {
//         id:6,
//         country:'Norway',
//         name:"Wiking",
//         surname:"Chertov"
//     },
//     {
//         id:7,
//         country:'Japan',
//         name:"Li Men",
//         surname:"Huy"
//     },
//     {
//         id:8,
//         country:'France',
//         name:"Zaywuu",
//         surname:"Nebruha"
//     },
//     {
//         id:9,
//         country:'Belorus',
//         name:"Sary",
//         surname:"Romanov"
//     },
//     {
//         id:10,
//         country:'Kyrgyzstan',
//         name:"Choro",
//         surname:"Umarov"
//     },
//     {
//         id: 11,
//         country:'Russia',
//         name:"Sary",
//         surname:"Romanov"
//     },
//     {
//         id:12,
//         country:'Georgia',
//         name:"Maga",
//         surname:"Namangale"
//     },
//     {
//         id:13,
//         country:'Ukraine',
//         name:"Jmen",
//         surname:"Aksyonko"
//     },
//     {
//         id:14,
//         country:'Chine',
//         name:"Li lu",
//         surname:"Go"
//     },
//     {
//         id:15,
//         country:'Norway',
//         name:"Wiking",
//         surname:"Chertov"
//     },
//     {
//         id:16,
//         country:'Japan',
//         name:"Li Men",
//         surname:"Huy"
//     },
//     {
//         id:17,
//         country:'France',
//         name:"Zaywuu",
//         surname:"Nebruha"
//     },
//     {
//         id:18,
//         country:'Belorus',
//         name:"Sary",
//         surname:"Romanov"
//     },
// ]

// let ISO_649_2 = [
//     {
//         id:1,
//         name:'Bolgary',
//         ISO_649_2:'bul'
//     },
//     {
//         id:2,
//         name:'Japan',
//         ISO_649_2:'jpn'
//     },
//     {
//         id:3,
//         name:'Luxembourgish',
//         ISO_649_2:'ltz'
//     },
//     {
//         id:4,
//         name:'Russia',
//         ISO_649_2:'rus'
//     },
//     {
//         id:5,
//         name:'Kongo',
//         ISO_649_2:'kon'
//     },
//     {
//         id:6,
//         name:'Kyrgyzstan',
//         ISO_649_2:'kir'
//     },
//     {
//         id:7,
//         name:'Kyrgyzstan',
//         ISO_649_2:'kir'
//     },

// ]


// function changeCountry ( ){

//     let county = people.filter((item)=>{

//     })

//     console.log(county);

//     JSON.stringify(people, function (key,velue){

//     })
// }

// changeCountry ()

function some(n) {
    if (n == 1) {
        return n
    } else {
        return n *= some(n - 1)
    }
}

// console.log(some(4))


// console.log(mode(4, 7));

let depar = {
    Disaighners: {
        "UX-UI": [
            { id: 1, name: "Jenya", salary: 1000 },
            { id: 2, name: "Ali", salary: 500 },
        ],
        Graph: [
            { id: 1, name: "Den", salary: 1100 },
            { id: 2, name: "Ahror", salary: 900 },
        ],
        IT: {
            'Front': [{
                id: 1, name: 'Baibolot', salary: 2000
            }],
            'Bach': [
                { id: 2, name: 'Oroz', salary: 1200 },
                { id: 3, name: 'Kytman', salary: 1200 }
            ]
        },
    },
};

let total = 0

function allTotal() {

}
allTotal()


// const binarySearch = (data, target, start, end) => {
//     if (end < 1) return data[0];
//     const middle = Math.floor((start + (end - start) / 2));
//     if (target == data[middle].svgX) {
//         return data[middle]
//     } else if (end - 1 === start) {
//         return Math.abs(data[start].svgX - target) > Math.abs(data[end].svgX - target) ? data[end] : data[start];
//     } else if (target > data[middle].svgX) {
//         return binarySearch(data, target, middle, end);
//     } else if (target < data[middle].svgX) { return binarySearch(data, target, start, middle); }
// }

// console.log( binarySearch(array, 20, 0, array.length - 1));


// function binarySearch(arr, target, start, end) {
//     if (start > end) {
//         return -1
//     }
//     let mid = Math.floor((start + end) / 2)
//     if (arr[mid] === target) {
//         return arr[mid]
//     }
//     else if (arr[mid] < target) {
//         return binarySearch(arr, target, mid + 1, end)
//     }
//     else {
//         return binarySearch(arr, target,start, mid - 1)
//     }
// }


// console.log(binarySearch(array, 22, 0, array.length-1));


// const ll = [2, 27, 14, 52, 31, 96, 73, 47, 22, 6];

function getSum(arr, sum, iter = 0) {
    let result = []
    if (sum == 0 || sum == 1) {
        return []
    }

    for (let i = iter; i < arr.length; i++) {
        let searchNumber = sum - arr[i]
        if (searchNumber < 0) {
            continue
        }
        for (let j = 0; j < arr.length; j++) {
            if (searchNumber == arr[j]) {
                result.push(arr[i], searchNumber)
                return result
            }
        }
        result.push(arr[i], ...getSum(arr, searchNumber, i))
        if (result.reduce((acc, item) => acc += item, 0) != sum) {
            result = []
        } else {
            return result
        }
    }
    return result
}

// console.log(getSum([2, 7], 13));

// function customMaxMath(arr) {
//     let ff = []
//     arr.forEach((item)=>{
//         for (let i = 0; i < item.length; i++) {
//             for (let j = 0; j < item.length[i]; j++) {
//                 ff.push(item.sort((a, b) => a - b))
//             }
//         }
//     })
// }

// console.log(customMaxMath([2, 27, 14, 52, 31, 96, 73, 47, 22, 6]))






function getNumberPhone() {
    console.log(...arguments);
}

// getNumberPhone(556693157)

let cc = [
    undefined,
    {
        id: 2,
        name: 'Guljan'
    },
    undefined,
    {
        id: 4,
        name: 'GKNB'
    },
    {
        id: 5,
        name: 'Eldos'
    }
]

let bb = cc.flatMap((item) => {
    if (item == undefined) {
        return []
    } else {
        return item
    }
})

function showMessage() {
    let sentence = 'Hello world'
    return {
        addWord: function (word) {
            sentence += ' ' + word
            return sentence
        },
        remove: function (word) {
            let b = sentence.split(' ')
            sentence = b.flatMap((item) => {
                if (item == word) {
                    return []
                } else {
                    return item
                }
            }).join(' ')
            return sentence
        },
    }
}

let g = showMessage()


// console.log(g.addWord('Lol'));
// console.log(g.remove('Hello'));

// console.log(bb);

let count = 0

let arr = [
    {
        id: 1,
        name: 'Baibolot',
        password: '1234'
    },
    {
        id: 2,
        name: 'Eldos',
        password: '5678'
    },
    {
        id: 3,
        name: 'Kot',
        password: '9101112'
    },
]

function askPromt() {
    let name = prompt("Enter you name")
    let password = prompt("Enter you password")
    if (arr.find(item => item.name == name || item.password == password)) {
        alert("Сыймык не беги впереди вагона")
    } else {
        setTimeout(askQuestion, b)
    }
}

// let o = prompt('Are u ready ? \ \n 1)Yes \n 2)No')

function askQuestion() {
    for (let i = 0; i < 10; i++) {
        let b = i * 2000
        if (o == 1) {
            let firstQuestion = prompt('hom much 4+4 ? \ \n 1) 8 \n 2) 11 \n 3) 15 \n 4)88')
            if (firstQuestion == 4) {
                let secondQuestion = prompt('How much 1 - `1` \n 1) Nothin \n 2) 0 \n 3) -1 \n 4) JS ?  ')
                if (secondQuestion == 2) {
                    let tirdQuestion = prompt(' How are u ? \n 1) funny \n 2) Im lern JavaScript How u think ? \n 2) Bad ')
                    if (tirdQuestion == 2) {
                        alert('My congratulation !!')
                    } else {
                        setTimeout(askQuestion, b)
                        continue;
                    }
                } else {
                    setTimeout(askQuestion, b)
                    continue;
                }
            } else {
                setTimeout(askQuestion, b)
                continue;
            }
        } else {
            setTimeout(askQuestion, b)
            continue;
        }
    }
}


// askQuestion()

// askPromt()




function test(time = 0) {
    let score = 0
    questions.forEach((item, index) => {
        let answersText = ''
        let option = 1
        let questionAnsw = answers.filter(item2 => {
            console.log(item2);
            if (item2.questionId === item.id) {
                answersText += `${option}) ${item2.answer}\n `
                option += 1
                return item2
            }
        })
        let askquestion = +prompt(`${item.title}\n${answersText}`)
        console.log(questionAnsw);
        console.log(askquestion);
        if (questionAnsw.find((_, index) => index == (askquestion - 1)).is_true == true) {
            alert('good');
            score += 1
        }
    })

    if (score == 0) {
        alert(Wait`${(time + 5000) / 1000}`)
        setTimeout(test, time + 5000, time + 5000)
    } else {
        alert('Success')
    }
}
// test()

let users_data = [
    { name: "Иван", password: "ivan123", id: 1001, role: 1 },
    { name: "Мария", password: "maria456", id: 1002, role: 2 },
    { name: "Петр", password: "peter789", id: 1003, role: 2 },
    { name: "Елена", password: "elena_1234", id: 1004, role: 2 },
    { name: "Алексей", password: "alex567", id: 1005, role: 2 },
    { name: "Ольга", password: "olga999", id: 1006, role: 2 },
    { name: "Николай", password: "nik123", id: 1007, role: 2 },
    { name: "Катерина", password: "kat456", id: 1008, role: 1 },
    { name: "Дмитрий", password: "dima789", id: 1009, role: 2 },
    { name: "Анна", password: "anna_2023", id: 1010, role: 2 },
    { name: "eldos", password: "25062014", id: 1, role: 1 },

]

let roles_data = [
    { id: 1, role: "teacher", name: "Учитель" },
    { id: 2, role: "student", name: "Ученик" },
]

let answers = [
    { id: 1, questionId: 1, answer: '4', is_true: true },
    { id: 2, questionId: 1, answer: '8', is_true: false },
    { id: 3, questionId: 2, answer: 'Москва', is_true: false },
    { id: 4, questionId: 2, answer: 'Бишкек', is_true: true },
]


let subjects = [
    {
        id: 1,
        title: 'Matem'
    }
]

let questions = [
    {
        id: 1,
        subjectId: 1,
        title: '2 + 2 = ?'
    },
    {
        id: 2,
        title: 'Столица КР?'
    },
];



function B2B() {

    let name = prompt("Please write u`re name")
    let password = prompt('Please write u`re password')

    let user = users_data.find(item => item.name == name || item.password == password)

    if (user) {
        if (user.role == 1) {
            let aksMoment = prompt('1)Subject\n2)Quiz\n3)Stundent\n4)Question\n5)Logout')
            if (aksMoment == 1) {
                let option = 1
                let subjectsText = ""
                subjects.forEach(subjects => {
                    subjectsText += `${option} ${subjects.title} \n`
                    option++
                })

                subjects:
                while (true) {
                    let askQuestionAction = prompt(`${subjectsText}\n(+) Add new subject\n(<)Back`)
                    if (askQuestionAction == "+") {
                        let titleQuestion = prompt ("name Title")
                        let HowMuchQuestion =+ prompt ('How much question')

                        let count = 0

                        subjects.forEach((item)=> {
                            if(item.title == titleQuestion){
                                count++
                            }
                        })
                        if(count == 0){
                            subjects.push({
                                id:subjects.length+1,
                                title:titleQuestion
                            })
                        }
                        

                        for(let i = 0; i < HowMuchQuestion; i ++){
                            let questionss = prompt("Question")
                            i++
                            let conon = 0 
                            questions.forEach((item) => { 
                                if(item.title == questionss){
                                    conon ++ 
                                }

                                if(conon == 0){ 
                                    questions.push({
                                        id: questions.length+1,
                                        subjectId: +1,
                                        title:questionss
                                    })
                                }else{ 
                                    alert('U can have this questions')
                                }
                            })
                        }
                    } else if (askQuestionAction == "<") {
                        break subjects;
                    }
                }
            }else if( aksMoment == 2){ 

            }else if(aksMoment == 3){ 
                let much = 1
                let students = ""
                users_data.forEach((item) => { 
                    if(item.role == 2){ 
                        students =+ `${much}) ${item.name}`
                        much ++ 
                    }
                })
            }
        }
    } else {
        console.log("Eror");
    }
}
B2B()