import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

const Usuario = 1;

export default class SideBarMenu extends Component {
  constructor() {
    super();
    if (Usuario == 0) {
      this.items = [
        {
          navOptionThumb: 'home',
          navOptionName: 'Home',
          screenToNavigate: 'NavHome',
        },
        {
          navOptionThumb: 'face',
          navOptionName: 'Perfil',
          screenToNavigate: 'NavPerfil',
        },
        {
          navOptionThumb: 'assessment',
          navOptionName: 'Formulario de Pagos',
          screenToNavigate: 'NavFormulario',
        },
        {
          navOptionThumb: 'build',
          navOptionName: 'Deudas',
          screenToNavigate: 'NavDeudas',
        },
        {
          navOptionThumb: 'class',
          navOptionName: 'Facturas',
          screenToNavigate: 'NavFacturas',
        },
        /*{
          navOptionThumb: 'code',
          navOptionName: 'Detalles de Factura',
          screenToNavigate: 'NavDetallesFactura',
        },*/
      ];
    } else {
      this.items = [
        {
          navOptionThumb: 'home',
          navOptionName: 'Home',
          screenToNavigate: 'NavHome',
        },
        {
          navOptionThumb: 'face',
          navOptionName: 'Perfil',
          screenToNavigate: 'NavPerfil',
        },
        {
          navOptionThumb: 'home',
          navOptionName: 'Propiedad/Propietario',
          screenToNavigate: 'NavPropiedadPropietario',
        },
        /*{
          navOptionThumb: 'face',
          navOptionName: 'Detalles de Propiedad',
          screenToNavigate: 'NavDetallesPropiedad',
        },
        {
          navOptionThumb: 'assessment',
          navOptionName: 'Detalles de Propietario',
          screenToNavigate: 'NavDetallesPropietario',
        },*/
        {
          navOptionThumb: 'assessment',
          navOptionName: 'Cuentas por Cobrar',
          screenToNavigate: 'NavCuentasCobrar',
        },      
        {
          navOptionThumb: 'build',
          navOptionName: 'Deudas',
          screenToNavigate: 'NavDeudas',
        },
        {
          navOptionThumb: 'class',
          navOptionName: 'Facturas',
          screenToNavigate: 'NavFacturas',
        },
        /*{
          navOptionThumb: 'code',
          navOptionName: 'Detalles de Factura',
          screenToNavigate: 'NavDetallesFactura',
        },*/
        {
          navOptionThumb: 'class',
          navOptionName: 'Pagos',
          screenToNavigate: 'NavPagos',
        },
        /*{
          navOptionThumb: 'code',
          navOptionName: 'Detalles de Pagos',
          screenToNavigate: 'NavDetallesPagos',
        },*/
      ];
    }
  }

  render() {
    return (
      <ScrollView style={styles.sideMenuContainer}>
        {/*Top Large Image */}
        <Image
          source={require('../assets/images/sample_img.png')}
          style={styles.sideMenuProfileIcon}
        />
        {/*Divider between Top Image and Sidebar Option*/}
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
            marginTop: 15,
          }}
        />
        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{ width: '100%' }}>
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor:
                  global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
              }}>
              <View style={{ marginRight: 10, marginLeft: 20 }}>
                <Icon name={item.navOptionThumb} size={25} color="#808080" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  color:
                    global.currentScreenIndex === key ? 'red' : 'slateblue',
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  this.props.navigation.navigate(item.screenToNavigate);
                }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 150 / 2,
  },
});
