function startPlugin() {
  if (Utils.isDebug3()) return;
  logApp();
  initStorage();
  initLang();
  initMain();
  initFilmix();
  initSettings();
}

startPlugin();
