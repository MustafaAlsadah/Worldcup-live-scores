import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { HiOutlineNewspaper } from "react-icons/hi";
import {CgSortZa} from "react-icons/cg";
import StandingsPage from '../pages/StandingsPage';
import News from '../pages/News'
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
    ,elemnt: <StandingsPage/>
  },
  {
    title: 'Standing',
    path: '/StandingsPage',
    icon: <CgSortZa />,
    cName: 'nav-text'
    ,elemnt: <StandingsPage/>

  },
  {
    title: 'News',
    path: '/News',
    icon: <HiOutlineNewspaper />,
    cName: 'nav-text'
    ,elemnt: <News/>

  },
  
];
