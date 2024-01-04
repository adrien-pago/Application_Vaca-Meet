import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profilePicContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 30,
  },
  profilePic: {
    width: '100%',
    height: '100%',
  },
  userName: {
    fontSize: 24,  
    fontWeight: 'bold',  
    marginBottom: 20,
    color: '#000',
  },
 
  frameContainer: { // Style du cadre
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,  // Augmenter le rayon pour un look plus moderne
    padding: 15,
    width: '100%',  // Utiliser toute la largeur disponible
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Réduire la transparence
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20, // Ajouter un peu d'espace en bas
  },

  label: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: 'sans-serif-medium',
  },
 
  picker: { // Style de la combo (Picker)
    width: '100%',
    height: 44,
    backgroundColor: 'white', // Fond blanc pour la combo
    color: 'black',  // Texte en noir pour la visibilité
    marginBottom: 30,
  },

  input: { // Style siasie (mdp)
    width: '100%',
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#8a2be2',
    padding: 15,
    borderRadius: 5,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
