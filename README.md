# titouandup.github.io

Portfolio personnel de Titouan Dupouy, étudiant ingénieur informatique au CESI Pau.

Site : https://titouandup.github.io

## Contenu

- **École** : formation au CESI
- **À propos** : présentation
- **Projets** : homelab Proxmox, thermostat ESP32, station météo STM32
- **Compétences** : langages, embarqué, système
- **Contact** : email, GitHub, LinkedIn

## Technologies

Site statique en HTML, CSS et JavaScript, sans framework ni dépendance. Hébergé avec GitHub Pages.

## Structure

```
index.html   Structure de la page
style.css    Mise en forme
script.js    Données des projets et compétences, génération des cartes
```

## Modifier le contenu

Les projets et les compétences sont des tableaux (`projets` et `competences`) en haut de `script.js`. Pour en ajouter un, il suffit d'ajouter un objet au tableau : les cartes sont générées automatiquement.

## Lancer en local

Ouvrir `index.html` dans un navigateur, ou lancer un petit serveur :

```
python3 -m http.server
```

puis aller sur http://localhost:8000.
