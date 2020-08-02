const container = document.getElementById("container");
const circleArr = [];

let rows = 15;//15行
let cols = 15;//15列

//创建小球
for(let i = 0 ;i < cols; i++){
    circleArr[i] = [];
    for(let j = 0; j < rows; j++){
        //创建div标签
        const circle = document.createElement("div");
        //给div添加样式
        circle.classList.add("circle");
        //
        container.appendChild(circle);
        circleArr[i].push(circle);
    }
}

//点击监听事件，给小球增加grow样式
//cols：代表列
//i:代表下标
circleArr.forEach((cols,i)=>{  //第一列（cols=15）
    cols.forEach((circle,j)=>{  //第一列的第一个小球（circle=15）
        circle.addEventListener("click",()=>{
            growCircles(i,j);   //i,j锁定小球位置
        })
    })
})

const growCircles = (i,j) => {
    //确认小球位置
    if(circleArr[i] && circleArr[i][j]){
        //确认我们点击的小球没有grow样式
        if(!circleArr[i][j].classList.contains("grow")){
            //给小球添加grow样式
            circleArr[i][j].classList.add("grow");
            //添加定时器，给点击的小球周围的小球添加grow样式
            setTimeout(()=>{
                growCircles(i-1,j);
                growCircles(i+1,j);
                growCircles(i,j-1);
                growCircles(i,j+1);
            },100);
            
            //添加定时器，将所有小球恢复原状
            setTimeout(()=>{
                circleArr[i][j].classList.remove("grow");
            },300);
        }
    }
}