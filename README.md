<img src="http://assets.angular.schule/logo-angular-workshop-ng6.png">

#### **von Ferdinand Malcher**

<hr>

**Schön, dass Du dabei bist!**  
Merke dir schon einmal dieses Repository.  
Hier wird während des Workshops stets der Quelltext unserer Beispielanwendung verfügbar sein.
> **https://github.com/angular-schule/2018-09-angular-workshop-jena**

Damit wir gleich durchstarten können, solltest Du ein paar Vorbereitungen treffen.  
Die gesamte Installation wird rund 30 Minuten dauern. 


## Benötigte Software

1. **Node.js 8.9** oder höher: [https://nodejs.org](https://nodejs.org)
2. **Google Chrome:** [https://www.google.com/chrome/](https://www.google.com/chrome/)
3. **Chrome Extensions:**
    * [Angular Augury](https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd)
    * [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
4. **Visual Studio Code:** [https://code.visualstudio.com](https://code.visualstudio.com)
   * [Angular-Schule: Extension Pack](https://marketplace.visualstudio.com/items?itemName=angular-schule.angular-schule-extension-pack) für Visual Studio Code 
   * Bei Bedarf kann auch eine andere IDE verwendet werden, z.B. IntelliJ oder WebStorm.
5. **Git** (und ggf. ein grafischer Client wie SourceTree oder GitExtensions)


## Pakete installieren

Die Angular CLI ist das offizielle Build-Tool für Angular. Mit folgendem Befehl kannst Du die CLI installieren:

```
npm install -g @angular/cli
```

Überprüfe bitte anschließend die Versionen, damit wir beim Workshop alle auf dem gleichen Stand sind.
```
node -v
> Erwartet: v8.9.x oder höher

npm -v
> Erwartet: 5.x oder höher

ng version
> Erwartet: 6.1.5 oder höher
```



## Startprojekt erzeugen

Bitte lege das Übungsprojekt schon vor Beginn des Workshops an.
Die Angular CLI nimmt uns die meisten Schritte schon ab.
Was die Parameter im Einzelnen bedeuten, besprechen wir natürlich im Workshop!

Führe in Deinem Arbeitsverzeichnis die folgenden Befehle aus:

```
ng new book-rating --routing --style=scss --prefix=br
cd book-rating
ng serve
```

Achtung! Die Installation kann bei langsamer Internetverbindung sehr lange dauern.
Warte beim Schritt `Installing packages for tooling via npm.` mit Geduld ab!


> Auf http://localhost:4200 sollte nun eine Website mit dem Text "Welcome to br" erscheinen!
Wenn bei allen Teilnehmern das Grundgerüst steht, können wir ohne Zeitverlust loslegen.

![Screenshot CLI](http://assets.angular.schule/chrome_cli_welcome.png)



## Test-Umgebung prüfen

Beende den laufenden Webserver mit der Tastenkombination `Strg + C`.  
Prüfe bitte zum Abschluss, ob folgende Befehle ohne Fehlermeldungen ausführen:

```
ng test
ng e2e
```

Sollte es zu einer Fehlermeldung kommen, dann sende uns den Fehlertext einfach per Mail an [team@angular.schule](mailto:team@angular.schule).  
Wir werden schnell eine Lösung finden.



### Wir freuen uns schon! 🙂

Bei Fragen wende dich einfach direkt an das Angular-Schule-Team:  
[team@angular.schule](mailto:team@angular.schule)

<hr>

<img src="http://assets.angular.schule/logo-angular-schule.png" height="60">

### &copy; 2018 https://angular.schule, Stand: 31.08.2018


