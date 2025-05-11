var arr=[
    {dp:"https://thafd.bing.com/th/id/OIP.S2X4t845u7y8FUdWRkrjlAHaE8?w=294&h=196&c=7&r=0&o=5&dpr=2&pid=1.7",
        story:"https://thafd.bing.com/th/id/OIP.puyKcN34Zp-Qf7Ih5z3QGgHaE8?w=260&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {dp:"https://thafd.bing.com/th/id/OIP.S2X4t845u7y8FUdWRkrjlAHaE8?w=294&h=196&c=7&r=0&o=5&dpr=2&pid=1.7",
        story:"https://thafd.bing.com/th/id/OIP.puyKcN34Zp-Qf7Ih5z3QGgHaE8?w=260&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {dp:"https://thafd.bing.com/th/id/OIP.S2X4t845u7y8FUdWRkrjlAHaE8?w=294&h=196&c=7&r=0&o=5&dpr=2&pid=1.7",
        story:"https://thafd.bing.com/th/id/OIP.puyKcN34Zp-Qf7Ih5z3QGgHaE8?w=260&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {dp:"https://thafd.bing.com/th/id/OIP.S2X4t845u7y8FUdWRkrjlAHaE8?w=294&h=196&c=7&r=0&o=5&dpr=2&pid=1.7",
        story:"https://thafd.bing.com/th/id/OIP.puyKcN34Zp-Qf7Ih5z3QGgHaE8?w=260&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {dp:"https://thafd.bing.com/th/id/OIP.S2X4t845u7y8FUdWRkrjlAHaE8?w=294&h=196&c=7&r=0&o=5&dpr=2&pid=1.7",
        story:"https://thafd.bing.com/th/id/OIP.puyKcN34Zp-Qf7Ih5z3QGgHaE8?w=260&h=180&c=7&r=0&o=5&pid=1.7"
    },
]

var clutter =" "

arr.forEach(function(elem,idx){
    clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
})

var storiyan = document.querySelector('#storiyan')
storiyan.innerHTML=clutter

storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display='block'
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display='none'
    },3000)

    // console.log(arr[dets.target.id].story)
});