import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/Home';
import PerfilScreen from '../screens/Perfil';
import FormularioScreen from '../screens/Formulario';
import DeudasScreen from '../screens/Deudas';
import FacturasScreen from '../screens/Facturas';
import DetallesFacturaScreen from '../screens/DetallesFactura';
import PropiedadPropietarioScreen from '../screens/PropiedadPropietario';
import DetallesPropiedadScreen from '../screens/DetallesPropiedad';
import DetallesPropietarioScreen from '../screens/DetallesPropietario';
import CuentasCobrarScreen from '../screens/CuentasCobrar';
import PagosScreen from '../screens/CuentasCobrar';
import DetallesPagosScreen from '../screens/CuentasCobrar';

import NavigationDrawerStructure from './NavigationDrawerStructure'
import SideBarMenu from '../components/SideBarMenu'
import Modal from '../components/Modal';

const StackHome = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'mediumseagreen',
      },
      headerTintColor: '#fff',
    }),
  },
});

const StackPerfil = createStackNavigator({
  Perfil: {
    screen: PerfilScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Perfil',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'mediumseagreen',
      },
      headerTintColor: '#fff',
    }),
  },
});

const StackFormulario = createStackNavigator({
  Formulario: {
    screen: FormularioScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Formulario de Pagos',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'mediumseagreen',
      },
      headerTintColor: '#fff',
    }),
  },
});

const StackDeudas = createStackNavigator({
  Deudas: {
    screen: DeudasScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Deudas',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'mediumseagreen',
      },
      headerTintColor: '#fff',
    }),
  },
});

const StackFacturas = createStackNavigator({
  Facturas: {
    screen: FacturasScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Facturas',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'mediumseagreen',
      },
      headerTintColor: '#fff',
    }),
  },
});

const StackDetallesFactura = createStackNavigator({
  DetallesFactura: {
    screen: DetallesFacturaScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Detalles de Factura',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'mediumseagreen',
      },
      headerTintColor: '#fff',
    }),
  },
});

const StackPropiedadPropietario = createStackNavigator({
  PropiedadPropietario: {
    screen: PropiedadPropietarioScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Propiedad/Propietario',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'mediumseagreen',
      },
      headerTintColor: '#fff',
    }),
  },
});

const StackDetallesPropiedad = createStackNavigator({
  DetallesPropiedad: {
    screen: DetallesPropiedadScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Detalles de Propiedad',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'mediumseagreen',
      },
      headerTintColor: '#fff',
    }),
  },
});

const StackDetallesPropietario = createStackNavigator({
  DetallesPropietario: {
    screen: DetallesPropietarioScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Detalles de Propietario',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'mediumseagreen',
      },
      headerTintColor: '#fff',
    }),
  },
});

//Administrador

const StackCuentasCobrar = createStackNavigator({
  CuentasCobrar: {
    screen: CuentasCobrarScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Cuentas por Cobrar',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'mediumseagreen',
      },
      headerTintColor: '#fff',
    }),
  },
});

const StackPagos = createStackNavigator({
  Pagos: {
    screen: PagosScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Pagos',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'mediumseagreen',
      },
      headerTintColor: '#fff',
    }),
  },
});

const StackDetallesPagos = createStackNavigator({
   DetallesPagos: {
    screen: DetallesPagosScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Detalles de Pago',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'mediumseagreen',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigator = createDrawerNavigator(
  {
    NavHome: {
      screen: StackHome,
      navigationOptions: {
        drawerLabel: 'Home',
      },
    },
    NavPerfil: {
      screen: StackPerfil,
      navigationOptions: {
        drawerLabel: 'Perfil',
      },
    },
    NavFormulario: {
      screen: StackFormulario,
      navigationOptions: {
        drawerLabel: 'Formulario de Pagos',
      },
    },
    NavDeudas: {
      screen: StackDeudas,
      navigationOptions: {
        drawerLabel: 'Deudas',
      },
    },
    NavFacturas: {
      screen: StackFacturas,
      navigationOptions: {
        drawerLabel: 'Facturas',
      },
    },
    NavDetallesFactura: {
      screen: StackDetallesFactura,
      navigationOptions: {
        drawerLabel: 'Detalles de Factura',
      },
    },
    //Administrador
    NavPropiedadPropietario: {
      screen: StackPropiedadPropietario,
      navigationOptions: {
        drawerLabel: 'Propiedad/Propietario',
      },
    },
    NavDetallesPropiedad: {
      screen: StackDetallesPropiedad,
      navigationOptions: {
        drawerLabel: 'Detalles de Propiedad',
      },
    },
    NavDetallesPropietario: {
      screen: StackDetallesPropietario,
      navigationOptions: {
        drawerLabel: 'Detalles de Propietario',
      },
    },
    NavCuentasCobrar: {
      screen: StackCuentasCobrar,
      navigationOptions: {
        drawerLabel: 'Cuentas por Cobrar',
      },
    },
    NavPagos: {
      screen: StackFacturas,
      navigationOptions: {
        drawerLabel: 'Pagos',
      },
    },
    NavDetallesPagos: {
      screen: StackDetallesFactura,
      navigationOptions: {
        drawerLabel: 'Detalles de Pagos',
      },
    },
  },
  {
    contentComponent: SideBarMenu,
    drawerWidth: Dimensions.get('window').width - 130,
  }
);

export default createAppContainer(DrawerNavigator);