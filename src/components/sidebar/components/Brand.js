import React from "react";
import logo from "../../../assets/img/logo/logo_no_bg.png"

// Chakra imports
import { Flex } from "@chakra-ui/react";

// Custom components
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode

  return (
    <Flex align='center' direction='column'>
      <img src={logo} alt=" logo_viettel"/>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
