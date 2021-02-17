import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { Context } from "./context/settingsContext";
import AppNavigation from "./navigation.js/AppNavigation";

function index() {
  const [settings, setSettings] = useState({ vibration: true });

  return (
    <Context.Provider value={[settings, setSettings]}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </Context.Provider>
  );
}

export default index;
