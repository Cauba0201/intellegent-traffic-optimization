import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdSignalCellular0Bar,
  MdPermPhoneMsg,
  MdPunchClock,
  Md1KPlus,
  MdArrowCircleDown,
  MdMicrowave,
  MdPeopleAlt,
  MdMap,
  MdMapsUgc,
  MdSupport,
  
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import PhoneCall from "views/admin/phoneCall";
import Sample from "views/admin/sample";
import Support from "views/admin/support";
import ThroughtInput from "views/admin/throughtPut";
import MassExport from "views/admin/massExport";
import IntellegentMap from "views/admin/intellegentmaps";
import MapView from "views/admin/mapView";
import Latency from "views/admin/latency";
import SignalQuality from "views/admin/signalQuality";
import DataTables from "views/admin/dataTables";

// Auth Imports
import SignInCentered from "views/auth/signIn";
import DataTraffic from "views/admin/dataTraffic";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Signal & Quality",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={MdSignalCellular0Bar}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Signal Quality",
    layout: "/admin",
    icon: <Icon as={MdSignalCellular0Bar} width="20px" height="20px" color="inherit" />,
    path: "/signal-quality",
    component: SignalQuality,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Phone calls",
    layout: "/admin",
    path: "/phone-call",
    icon: <Icon as={MdPermPhoneMsg} width="20px" height="20px" color="inherit" />,
    component: PhoneCall,
  },
  {
    name: "Data traffic",
    layout: "/admin",
    path: "/data-traffic",
    icon: <Icon as={Md1KPlus} width="20px" height="20px" color="inherit" />,
    component: DataTraffic,
  },
  {
    name: "Latency",
    layout: "/admin",
    path: "/latency",
    icon: <Icon as={MdPunchClock} width="20px" height="20px" color="inherit" />,
    component: Latency,
  },
  {
    name: "Throughtput",
    layout: "/admin",
    path: "/throught-put",
    icon: <Icon as={MdMicrowave} width="20px" height="20px" color="inherit" />,
    component: ThroughtInput,
  },
  {
    name: "Mass Export",
    layout: "/admin",
    path: "/mass-export",
    icon: <Icon as={MdArrowCircleDown} width="20px" height="20px" color="inherit" />,
    component: MassExport,
  },
  {
    name: "Sample",
    layout: "/admin",
    path: "/sample",
    icon: <Icon as={MdPeopleAlt} width="20px" height="20px" color="inherit" />,
    component: Sample,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: Profile,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: SignInCentered,
  },
  {
    name: "Map View",
    layout: "/admin",
    path: "/map-view",
    icon: <Icon as={MdMap} width="20px" height="20px" color="inherit" />,
    component: MapView,
  },
  {
    name: "Intellegent Maps",
    layout: "/admin",
    path: "/intellegent-map",
    icon: <Icon as={MdMapsUgc} width="20px" height="20px" color="inherit" />,
    component: IntellegentMap,
  },
  {
    name: "Support",
    layout: "/admin",
    path: "/support",
    icon: <Icon as={MdSupport} width="20px" height="20px" color="inherit" />,
    component: Support,
  },
];

export default routes;
