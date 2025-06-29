# 📅 GoLendar-Front 📅 

Un composant de calendrier React moderne et responsive pour afficher des événements avec gestion intelligente des chevauchements.

## 🎯 Objectif

Afficher des événements sur un calendrier avec un positionnement précis basé sur l'heure et la durée. La position relative des événements se calcule en fonction de la bordure supérieure de la fenêtre, l'heure et la durée des événements.

Par exemple : si le calendrier va de 00:00 à 24:00 et que l'écran est de 2400px de haut, un événement commençant à 12h00 et durant 1h sera positionné à 1200px du haut de l'écran et aura une hauteur de 100px.

## 🔄 Gestion des Chevauchements

Les événements peuvent recouvrir une même plage horaire. Auquel cas, on parle de _chevauchement_. Le _chevauchement_ de 2 événements ne doit pas empêcher leur visibilité.

L'implémentation respecte les contraintes suivantes:

1. **Si A et B sont deux événements en chevauchement, alors Largeur(A) = Largeur(B).**
2. **LargeurMax = largeur de la fenêtre**
3. **Si sur une plage horaire donnée, deux événements A et B se chevauchent, alors Largeur(A) + Largeur(B) = LargeurMax**

## 📥 Format des Données

L'input est un tableau d'événements ayant lieu le même jour (à des heures différentes) :

```javascript
{
  id: 1,
  start: '15:00', // L'événement commence à 15h00
  duration: 90    // La durée est exprimée en minutes
}
```

## 🚀 Installation et Utilisation

```bash
# Cloner le repository
git clone https://github.com/herradiamine/golendar-front.git

# Installer les dépendances
npm install

# Lancer l'application en mode développement
npm start

# Construire pour la production
npm run build
```

## 🎨 Fonctionnalités

- **Affichage responsive** : Le calendrier s'adapte à la taille de la fenêtre
- **Gestion intelligente des chevauchements** : Les événements qui se chevauchent sont automatiquement redimensionnés
- **Positionnement précis** : Chaque événement est positionné exactement selon son heure de début et sa durée
- **Interface moderne** : Design épuré et agréable à utiliser

## 🛠️ Technologies Utilisées

- **React 18** - Framework principal
- **CSS moderne** - Styles personnalisés sans dépendances externes
- **JavaScript ES6+** - Code moderne et maintenable

## 📱 Responsive Design

Le composant est entièrement responsive et répond aux événements `resize` de la fenêtre pour s'adapter automatiquement aux différentes tailles d'écran.

## 🎯 Spécifications Techniques

- **Plage horaire** : 09h00 à 21h00
- **Format des événements** : `div` avec couleur de fond et bordure de 1px
- **Identifiants** : L'id de l'événement est présent dans le contenu de la div et dans son attribut `id`
- **Compatibilité** : Fonctionne sur tous les navigateurs modernes

## 📝 Auteur

**Amine Herradi** - [GitHub](https://github.com/herradiamine)

---

*Ce projet a été développé dans le cadre d'un exercice technique pour démontrer la maîtrise des concepts front-end bas-niveau et la capacité à construire des composants complexes from-scratch.*

