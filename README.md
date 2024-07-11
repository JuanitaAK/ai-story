# AI Story 🚀

Bienvenue sur le projet **AI Story**, une plateforme interactive permettant aux utilisateurs de créer des histoires captivantes et personnalisées à l'aide de l'intelligence artificielle. Ce projet vise à offrir une expérience unique où la créativité et l'imagination n'ont pas de limites.

## Fonctionnalités

- **Création d'Histoires**: Les utilisateurs peuvent créer leurs propres histoires personnalisées, en fournissant des informations telles que le nom, l'âge et les préférences des personnages.
- **Personnalisation**: Personnalisez le titre vos histoires.

## Technologies Utilisées

- **Frontend**: Next.js, React, TypeScript et Tailwind CSS pour le style.
- **Backend**: Node.js avec Express pour le serveur et PostgreSQL pour la base de données.
- **Déploiement**: Docker pour la conteneurisation et déploiement sur un serveur OVH avec docker-compose.

## Commencer

Pour démarrer avec le projet, suivez ces étapes:

**1. Clonez le dépôt**: 
   ```bash
   git clone https://github.com/JuanitaAK/ai-story.git
   ```
   
**2. Installez les dépendances**:
   - Frontend:
     ```bash
       cd frontend && npm install
       ```
   - Backend:
     ```bash
       cd backend && npm install
      ```
     
**3. Configurez les variables d'environnement**:
  - Créez un fichier .env dans les dossiers frontend et backend avec les variables nécessaires (consultez .env.example pour les détails).

**4. Lancez le projet**:
   - Frontend: `npm start` dans le dossier frontend.
   - Backend: `npm run dev` dans le dossier backend.

**5. Dockerisation**:

Assurez-vous d'avoir Docker et Docker Compose installés.
Construisez et lancez les conteneurs:
```bash
docker-compose up --build
```
Accédez à l'application:

Frontend: http://localhost:3000

Backend: http://localhost:5000
