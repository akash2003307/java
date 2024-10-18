// mark1=parseInt(prompt("enter physics mark"));
// mark2=parseInt(prompt("enter chemistry mark"));
// mark2=parseInt(prompt("enter maths mark"));
// total=240
// sum=mark1+mark2+mark3;
// per=(sum/total)*100;

// if(per>=70){
   
//     alert(per+"%"+" "+"eligible for entrence");

// }
// else{
    
// alert(per+"%"+" "+"not eligible");

// }



// day=10
// if(day==1){
//     console.log("sunday");
// }
// else if(day==2){
//     console.log("monday");
// }
// else if(day==3){
//     console.log("tuesday");
// }
// else if(day==4){
//     console.log("wednesday");
// }
// else if(day==5){
//     console.log("thursday");
// }
// else if(day==6){
//     console.log("friday");
// }
// else if(day==7){
//     console.log("saturday");
// }
// else {
//     console.log("invalid day");
// }


// day=3
// switch(day){
//     case 1:console.log("sunday");
//     break;
//     case 2:console.log("monday");
//     break;
//     case 3:console.log("tuesday");
//     break;
//     case 4:console.log("wednesday");
//     break;
//     case 5:console.log("thursday");
//     break;
//     case 6:console.log("friday");
//     break;
//     case 7:console.log("saturday");
//     break;
//     default:console.log("invalid day");
// }


// for(i=4;i<=1;i--){
//     str='';
//     g=''
//     s='*'
//     for(j=1;j<=5-i;j++){
//         str+=g

//     }
//     for(h=1;h<=i;h++){
//         str+=s
//     }
    
//     console.log(str);
    
// }

// for(i=4;i<=1;i--){
    //     str='';
    //     g=''
    //     s='*'
    //     for(j=1;j<=5-i;j++){
    //         str+=g
    
    //     }
    //     for(h=1;h<=i;h++){
    //         str+=s
    //     }
        
    //     console.log(str);
        
    // }


    // for(i=1;i<=10;i++){
    //     if(i==5){
    //         continue
    //     }
    //     console.log(i)
    // }


    // function buyEggs(money){
    //     return "bay" +money+ "egg at" +money+ "ruppes"
    // }

    // x=buyEggs(120)
    // console.log(x+ "for make cake")


    // a=parseInt(prompt("enter first number"))
    // b=parseInt(prompt("enter second number"))
    // x=(a,b)
    // alert(`sum of${a} and ${b},and`)









    // x=function(name){
    //     console.log("hello"+name);

    // }
    // x("akash")



// i=1

// function asd(){
//     console.log("hai"+i);
//     if(i<=4)
//     {
//         i++
//         asd()
//     }
// }


// asd()



// x=parseInt(prompt("enter for find factorial"))

// function fact(x){
//     if(x==0){
//         return 1
//     }
//     else{
//         return x*fact(x-1)
//     }
// }
// y=fact(x)
// alert(y)


// let a=[10,20,30,40,50]
// console.log(a);

// console.log(a[3]);

// a[2]=80
// console.log(a);

// x=a.join("&")
// console.log(x);


// console.log(a.indexOf(40));

// a[a.indexOf(40)]=90
// console.log(a);


// console.log(a);
// a.splice(a.indexOf(50),1)
// console.log(a);

// console.log(a.length);
// //  console.log(a);


// let a=[]
// for(i=0;i<100;i+=2){
//     a.push(i)
// }
// console.log(a);

// let a=[]
// for(i=0;i<100;i+=2){
//     if(i%3==0&&i%5==0){
//         a.push("fizzbuzz");
//     }else if(i%3==0){
//         a.push("fizz");
//     }else if(i%5==0){
//         a.push("buzz");
//     }else{
//         a.push(i);
//     }
// }
// console.log(a);




Todos=[];

while (true) {
    const choice=prompt("[1] Add Todo \n [2] Display Todo \n [3] Edit Todo \n [4] Delet Todo \n [5] Exit");

    if 
    (choice==1){
    const Todo=prompt("Add Todo")
    Todos.push(Todo)
    }
    else if(choice==2){
        str=``
        for(i=0;i<Todos.length;i++){
            str+=`[${i+1}] ${Todos[i]} \n `
            
        }
        alert(str);

    }
    else if (choice==3){
        str=``
        for(i=0;i<Todos.length;i++){
            str+=`[${i+1}] ${Todos[i]} \n`
        }
        const index=prompt(`${str} \n Enter choice`);
        const updateTodos=prompt("enter data for update");
        Todos[index-1]=updateTodos
        alert("succesfully updated")
        
    }
    else if (choice==4){
        str=``
        for(i=0;i<Todos.length;i++){
            str+=`[${i+1}] ${Todos[i]} \n`

        }
        const index=prompt(`${str} \n select the choice for delet`);
        Todos.splice(-1,1);
        alert("succesfully deleted")

    }
    else if(choice==5){
        break;
    }else{
        alert("invalid choice");
    }
    
}
