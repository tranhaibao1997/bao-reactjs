import React from 'react'
import SearchFunctionContainer from '../SearchFunction/Search.container'
import SortFunction from '../SortFunction/SortFunction'
import RecentProductFunction from '../RecentProductFunction/RecentProductFunction'
import Unknow from '../Unknow/Unknow'
import SortFunctionContainer from '../SortFunction/SortFunction.container'

function SideBar()
{


return (
    <div className="col-xl-3 col-lg-4">
        <div className="sidebar-shop">
         <SearchFunctionContainer></SearchFunctionContainer>
         <SortFunctionContainer></SortFunctionContainer>
         {/* <RecentProductFunction></RecentProductFunction> */}
         <Unknow></Unknow>
        </div>
      </div>
)
}

export default SideBar