//相同的接口部分抽象出来

const googleMap={
    show:()=>console.log('开始渲染googleMap')
}

const baiduMap={
    show:()=>console.log('开始渲染baiduMap')
}

const renderMap=(map)=>{
    if(map.show instanceof Function){map.show()}
} 

renderMap(googleMap)
renderMap(baiduMap)