import { NewAppScreen } from '@react-native/new-app-screen';
import { Image, Linking, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import TopBar from './TopBar';

function App() {
  function openwebsite(url:string){
    Linking.openURL(url)
  }

  return (
    <ScrollView>
    <><View>
      <TopBar />
      <View style={styles.container}>
      <Image
      source={{uri:'https://imgcdn.stablediffusionweb.com/2024/4/7/76683d35-d0e9-4bf4-a630-99a6cc7da8c2.jpg'}}
      style = {styles.profileImage}
      />
      <Text style = {styles.nameText}>Gourav Amolekar</Text>
      <Text style = {styles.emaiText}>gouravamolekar@gmail.com</Text>
      <Text style = {styles.aboutText}>About Me</Text>
      <Text>Hi, I'm Gourav Amolekar, 
        a passionate developer focused on building clean 
        and functional mobile apps using React Native and Android (Jetpack Compose). 
        I enjoy exploring new technologies, creating user-friendly interfaces, 
        and turning ideas into real, working products. 
        I'm constantly learning and love taking on new challenges that help me grow as a developer.
        </Text>
        <Text style = {styles.linkText}>How to reach me ?</Text>
        <View style = {styles.footerContainer}>
      <TouchableOpacity onPress={()=> openwebsite('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox')}>
      <Image
      source={{uri:'https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2021/09/Gmail_logo_1200.png'}}
      style = {styles.iconImage}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openwebsite('https://www.linkedin.com/in/gourav-amolekar/?originalSubdomain=in')}>
        <Image
      source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s'}}
      style = {styles.iconImage}
      />
      </TouchableOpacity>
      </View>
      <View style = {styles.footerContainer}>
        <TouchableOpacity onPress={() => openwebsite('https://github.com/Gourav124')}>
        <Image
      source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4pQ3fsX8IMz2LRj0Rf72Hlx-ULgzOaL6DGA&s'}}
      style = {styles.iconImage}
      />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openwebsite('https://drive.google.com/file/d/1NDrdUkT8AOYgsplzCBVBolPHVEsrMNOQ/view?usp=drive_link')}>
        <Image
      source={{uri:'https://sdmntprwestcentralus.oaiusercontent.com/files/00000000-89ec-61fb-8b58-4e814324080a/raw?se=2025-07-08T09%3A59%3A21Z&sp=r&sv=2024-08-04&sr=b&scid=da9ca928-3fd7-5ac7-9776-25e8599a3168&skoid=864daabb-d06a-46b3-a747-d35075313a83&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-07T22%3A08%3A29Z&ske=2025-07-08T22%3A08%3A29Z&sks=b&skv=2024-08-04&sig=z1Fo2K1fZKvDTck8n1SiZpt0iG8vphr6ylpZuqaTsiY%3D'}}
      style = {styles.iconImage}
      />
        </TouchableOpacity>
      </View>
    </View>
      </View></>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent:'center',
    margin:20
  },
  nameText:{
    fontSize:20,
    fontWeight:'bold'
  },
  emaiText:{
    fontSize:15,
    fontWeight:'normal',
    paddingTop:10
  },
  profileImage:{
    width:200,
    height:200,
    marginBottom:20,
    borderRadius:100
  },
  aboutText:{
    fontSize:18,
    fontWeight:'semibold',
    paddingTop:20,
    paddingBottom:10
  },
  aboutContent:{
    fontSize:10,
    fontWeight:'normal',
  },
  linkText:{
    fontSize:18,
    fontWeight:'semibold',
    paddingTop:20,
    paddingEnd:220,
    marginBottom:10
  },
  iconImage:{
    width:180,
    height:120,
    marginBottom:10,
    borderRadius:20,
    marginEnd:10
  },

  footerContainer:{
    padding:8,
    flexDirection:'row',
}
});

export default App;
