import React from 'react'
import SearchFunction from '../SearchFunction/SearchFunction'
import SortFunction from '../SortFunction/SortFunction'
import RecentProductFunction from '../RecentProductFunction/RecentProductFunction'
import Unknow from '../Unknow/Unknow'

function SideBar(props)
{


return (
    <div className="col-xl-3 col-lg-4">
        <div className="sidebar-shop">
         <SearchFunction></SearchFunction>
         <SortFunction products={props.products} takeArrayToMain={props.TakeArrayToMain1} ></SortFunction>
         <RecentProductFunction></RecentProductFunction>
         <Unknow></Unknow>
        </div>
      </div>
)
}

export default SideBar