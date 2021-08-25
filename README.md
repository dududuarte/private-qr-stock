# private-scan-stock
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- ABOUT THE PROJECT -->
## About The Project

If you have a label printer and you want to identify your products with custom labels, you can use make use of this app to support your infrastructure in a way that the information from those items can be displayed on a simple device such as smartphone, there's also way to import your own items and display your own labels. **The Scanner works for most barcodes** for the full list, refer to [Documentation](https://docs.expo.dev/versions/latest/sdk/bar-code-scanner/#supported-formats)

![screenshots](https://i.imgur.com/7rgGxNY.png)
### Built With
* [Expo](https://expo.dev/)

<!-- GETTING STARTED -->
## Getting Started

If you are a beginner at using git or expo, the section below should help you with any problems you might have.

### Prerequisites
As it's a react/expo app, you should download [Node.js](https://nodejs.org/en/)

After that is done, we need to create a [Firebase](https://firebase.google.com/) 
application to host our database, which will be suported with Firestore Database.

The only requirement is that the database should have a collection named "codigos" which will be the "table" where you will persist your qrcode/barcode values
![codigos](https://i.imgur.com/rNjfkLO.png)

Then create a API Key which will you need for later 

![API Key](https://i.imgur.com/D6mpXV6.png)


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/dududuarte/private-scan-stock.git
   ```
2. Install NPM packages
   ```
   ```sh
   npm install
3. Enter your API in `src/constants/ApiKeys.js`

   ```JS
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
   ```

<!-- USAGE EXAMPLES -->
## Usage

Since this app was tailored for my specific cause, you should change somethings if you want it to work for you:

### Data to Import

In my case i was using a old excell sheet, so i only needed to insert a column with the "ID" that is used for the query, then i converted it to CSV and then to JSON. Once it's in JSON you can copy and paste it to `src/constants/json.js`

### Change Labels

Since i wasn't just dumping the whole data from the database, i did a little formatting and selecting of fields, whatever is your case, you need to change the labels names the ones on the JSON/CSV/Excell file, in both `Scanner.js` and `Manual.js`:

```JS
 if(doc.exists){
          descricao = doc.data().descricao;
          tipo = doc.data().tipo;
          marca = doc.data().marca;
          modelo = doc.data().modelo;
          dataCompra = doc.data().dataCompra;
          Alert.alert('Found', `Codigo Lido: ${data} \n\nTipo: ${tipo} \nMarca: ${marca}\nModelo: ${modelo}\nDescricao: ${descricao}\nData de Compra: ${dataCompra}`, [{ text: 'OK', onPress: this.reDo }]);
        }
```

<!-- LICENSE -->
## License

Distributed under the GPL-3.0 License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact
In case of any doubt or anything feel free to enter in contact:

[Email](mailto:duartemcg@gmail.com)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/dududuarte/private-scan-stock.svg?style=for-the-badge
[contributors-url]: https://github.com/dududuarte/private-scan-stock/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dududuarte/private-scan-stock.svg?style=for-the-badge
[forks-url]: https://github.com/dududuarte/private-scan-stock/network/members
[stars-shield]: https://img.shields.io/github/stars/dududuarte/private-scan-stock.svg?style=for-the-badge
[stars-url]: https://github.com/dududuarte/private-scan-stock/stargazers
[license-shield]: https://img.shields.io/github/license/dududuarte/private-scan-stock.svg?style=for-the-badge
[license-url]: https://github.com/dududuarte/private-scan-stock/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/duartemcg/
