//使用继承得到多态的效果

const googleMap={
    show:()=>console.log('开始渲染googleMap')
}

const baiduMap={
    show:()=>console.log('开始渲染baiduMap')
}

const renderMap=(type)=>{
    if(type==='google') googleMap.show()
    else if (type==='baidu') baiduMap.show()
    
} 

renderMap('google')
renderMap('baidu')