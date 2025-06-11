const fs = require('fs');
const path = require('path');

console.log('🔍 Vérification des assets...');

// Vérifier les fonts
const fontsDir = path.join(__dirname, '../public/fonts');
if (fs.existsSync(fontsDir)) {
  const fonts = fs.readdirSync(fontsDir);
  console.log('✅ Fonts trouvées:', fonts);
} else {
  console.error('❌ Dossier fonts manquant');
  process.exit(1);
}

// Vérifier les images principales
const imgDir = path.join(__dirname, '../public/img');
if (fs.existsSync(imgDir)) {
  const images = fs.readdirSync(imgDir);
  console.log('✅ Images principales trouvées:', images.length, 'fichiers');
} else {
  console.error('❌ Dossier img manquant');
  process.exit(1);
}

console.log('✅ Tous les assets sont prêts pour le déploiement!'); 