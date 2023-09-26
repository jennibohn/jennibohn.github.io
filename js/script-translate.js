// Evento de clique para o botão pt-br
document.getElementById('btnLangugePtBr').addEventListener('click', () => {
  currentLanguage = 'pt-br';
  loadTranslations(currentLanguage);
});

// Evento de clique para o botão en
document.getElementById('btnLanguageEn').addEventListener('click', () => {
  currentLanguage = 'en';
  loadTranslations(currentLanguage);
});

loadTranslations('en');
document.getElementById('btnLanguageEn').checked = true;

// Função para carregar as traduções com base no idioma
function loadTranslations(language) {
  console.log("Alterado idioma para: ", language);
  const pathLanguage = `/assets/i18n/translations-${language}.json`
  fetch(pathLanguage)
    .then((response) => response.json())
    .then((translations) => {
      // Aplicar as traduções aos elementos HTML aqui
      translateElements(translations);
    })
    .catch((error) => console.error("Erro ao carregar traduções:", error));
}
c
// Função para traduzir elementos HTML com base nas traduções
function translateElements(translations) {
  // Traduzir elementos do cabeçalho
  document.getElementById('header_home').innerText = translations.header_home;
  document.getElementById('header_about').innerText = translations.header_about;
  document.getElementById('header_treatments').innerText = translations.header_treatments;
  document.getElementById('header_tips').innerText = translations.header_tips;
  document.getElementById('header_contact').innerText = translations.header_contact;

  document.getElementById('description_text').innerText = translations.description_text;

  // // Traduzir elementos da seção "Sobre mim"
  document.getElementById('about_title').innerText = translations.about_title;
  document.getElementById('about_text').innerHTML = translations.about_text;

  // // Traduzir elementos da seção "Tratamentos"
  document.getElementById('treatments_title').innerText = translations.treatments_title;
  const treatmentList = document.getElementById('treatment_list');
  treatmentList.innerHTML = ""; // Limpa a lista atual
  translations.treatment_list.forEach((treatment) => {
    const listItem = document.createElement('li');
    listItem.innerText = treatment;
    treatmentList.appendChild(listItem);
  });

  // // Traduzir elementos da seção "Dicas da físio"
  document.getElementById('tips_title').innerText = translations.tips_title;
  document.getElementById('tips_subtitle').innerText = translations.tips_subtitle;
  for (let i = 1; i <= 6; i++) {
    const tipTitle = document.getElementById(`tip${i}_title`);
    const tipText = document.getElementById(`tip${i}_text`);
    tipTitle.innerText = translations[`tip${i}_title`];
    tipText.innerHTML = translations[`tip${i}_text`];
  }

  // // Traduzir elementos da seção "Contato"
  document.getElementById('contact_title').innerText = translations.contact_title;

  // // Traduzir elementos da seção "Regiões atendidas"
  document.getElementById('regions_title').innerText = translations.regions_title;

  // // Traduzir elementos do footer
  document.getElementById('all_rights_reserved').innerText = translations.all_rights_reserved;
}

// // Chame a função para carregar as traduções com base no idioma atual
// loadTranslations(currentLanguage);
