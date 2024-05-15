# créer un contexte utilisateur

*Changer l'input type email en text (username) les tests seront plus rapides*

A la soumission du formulaire de connexion :

- mettre à jour le state user (dispatch un type d'action et le nom d'utilisateur)
- rediriger vers la page home

Le header aura accès à ce state user, afin de proposer une navigation personnalisé.
Si l'utilisateur est connecté :

- Le lien "Connexion" n'est plus affiché
- Le lien "Dashboard" est affiché
- Le bouton "Déconnexion" est affiché (ici un bouton ) à l'apparence des <a> qui va dispatch l'action de déconnexion

Mettre en place un reducer dans un nouveau "Context".

State initial :

```jsx
const INITIALE_STATE = {
    isLogged: false,
    username: "invité"
}
```

Dans le dossier store, il y aura un nouveau dossier User avec 2 fichiers: reducer.js et Context.jsx

Fichier reducer.js, aura la tâche de mettre à jour le state en fonction de l'action dispatché ("LOGIN" ou "LOGOUT")

Fichier Context.jsx, va distribuer le state user et la fonction dispatch du hook reducer via le provider.
