const ctx = document.getElementById("myBar");

let bar = new Chart(ctx , {

    type: 'bar',
    data:{
        labels:["january","february","march","april","may","june","july"],
        datasets:[{
            
            label:"Monthly Sales 2023",
            lineTension:0.5,
            backgroundColor:"#e74c3c",
            borderColor:"#f1c40f",
            data:[50,20,60,10,50,70,50,40],
            
        }]
    }
})
