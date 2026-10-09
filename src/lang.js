function initLang() {
  if (!Lampa.Lang) {
    var lang_data = {};
    Lampa.Lang = {
      add: function add(data) {
        lang_data = data;
      },
      translate: function translate(key) {
        return lang_data[key] ? lang_data[key].ru : key;
      }
    };
  }

  Lampa.Lang.add({
    online_mod_watch: {
      ru: 'Смотреть онлайн',
      uk: 'Дивитися онлайн',
      be: 'Глядзець анлайн',
      en: 'Watch online',
      zh: '在线观看'
    },
    online_mod_nolink: {
      ru: 'Не удалось извлечь ссылку',
      uk: 'Неможливо отримати посилання',
      be: 'Не ўдалося атрымаць спасылку',
      en: 'Failed to fetch link',
      zh: '获取链接失败'
    },
    online_mod_blockedlink: {
      ru: 'К сожалению, это видео не доступно в вашем регионе',
      uk: 'На жаль, це відео не доступне у вашому регіоні',
      be: 'Нажаль, гэта відэа не даступна ў вашым рэгіёне',
      en: 'Sorry, this video is not available in your region',
      zh: '抱歉，您所在的地区无法观看该视频'
    },
    online_mod_blockedlink_copyright: {
      ru: 'К сожалению, это видео не доступно по запросу правообладателей',
      uk: 'На жаль, це відео не доступне за запитом правовласників',
      be: 'Нажаль, гэта відэа не даступна па запыце праваўладальнікаў',
      en: 'Sorry, this video is not available due to copyright holder request',
      zh: '抱歉，由于版权所有者的要求，该视频无法播放。'
    },
    online_mod_waitlink: {
      ru: 'Работаем над извлечением ссылки, подождите...',
      uk: 'Працюємо над отриманням посилання, зачекайте...',
      be: 'Працуем над выманнем спасылкі, пачакайце...',
      en: 'Working on extracting the link, please wait...',
      zh: '正在提取链接，请稍候...'
    },
    online_mod_captcha_address: {
      ru: 'Требуется пройти капчу по адресу: ',
      uk: 'Потрібно пройти капчу за адресою: ',
      be: 'Патрабуецца прайсці капчу па адрасе: ',
      en: 'It is required to pass the captcha at: ',
      zh: '您需要完成验证码： '
    },
    online_mod_captcha_proxy: {
      ru: 'Требуется пройти капчу. Попробуйте использовать зеркало вместо прокси',
      uk: 'Потрібно пройти капчу. Спробуйте використовувати дзеркало замість проксі',
      be: 'Патрабуецца прайсці капчу. Паспрабуйце выкарыстоўваць люстэрка замест проксі',
      en: 'It is required to pass the captcha. Try to use a mirror instead of a proxy',
      zh: '您需要通过验证码。 尝试使用镜子而不是代理'
    },
    online_mod_balanser: {
      ru: 'Балансер',
      uk: 'Балансер',
      be: 'Балансер',
      en: 'Balancer',
      zh: '平衡器'
    },
    online_mod_file_helper: {
      ru: 'Удерживайте клавишу "ОК" для вызова контекстного меню',
      uk: 'Утримуйте клавішу "ОК" для виклику контекстного меню',
      be: 'Утрымлівайце клавішу "ОК" для выкліку кантэкстнага меню',
      en: 'Hold the "OK" key to bring up the context menu',
      zh: '按住“确定”键调出上下文菜单'
    },
    online_mod_clearmark_all: {
      ru: 'Снять отметку у всех',
      uk: 'Зняти позначку у всіх',
      be: 'Зняць адзнаку ва ўсіх',
      en: 'Uncheck all',
      zh: '取消所有'
    },
    online_mod_timeclear_all: {
      ru: 'Сбросить тайм-код у всех',
      uk: 'Скинути тайм-код у всіх',
      be: 'Скінуць тайм-код ва ўсіх',
      en: 'Reset timecode for all',
      zh: '为所有人重置时间码'
    },
    online_mod_query_start: {
      ru: 'По запросу',
      uk: 'На запит',
      be: 'Па запыце',
      en: 'On request',
      zh: '根据要求'
    },
    online_mod_query_end: {
      ru: 'нет результатов',
      uk: 'немає результатів',
      be: 'няма вынікаў',
      en: 'no results',
      zh: '没有结果'
    },
    online_mod_title: {
      ru: 'Онлайн',
      uk: 'Онлайн',
      be: 'Анлайн',
      en: 'Online',
      zh: '在线的'
    },
    online_mod_title_full: {
      ru: 'Онлайн Мод',
      uk: 'Онлайн Мод',
      be: 'Анлайн Мод',
      en: 'Online Mod',
      zh: '在线的 Mod'
    },
    online_mod_use_stream_proxy: {
      ru: 'Проксировать видеопоток (Укр)',
      uk: 'Проксирувати відеопотік (Укр)',
      be: 'Праксіраваць відэаструмень (Укр)',
      en: 'Proxy video stream (Ukr)',
      zh: '代理视频流 （乌克兰）'
    },
    online_mod_proxy_find_ip: {
      ru: 'Передавать свой IP прокси',
      uk: 'Передавати свій IP проксі',
      be: 'Перадаваць свой IP проксі',
      en: 'Send your IP to proxy',
      zh: '将您的 IP 发送给代理'
    },
    online_mod_proxy_other: {
      ru: 'Использовать альтернативный прокси',
      uk: 'Використовувати альтернативний проксі',
      be: 'Выкарыстоўваць альтэрнатыўны проксі',
      en: 'Use an alternative proxy',
      zh: '使用备用代理'
    },
    online_mod_proxy_other_url: {
      ru: 'Альтернативный прокси',
      uk: 'Альтернативний проксі',
      be: 'Альтэрнатыўны проксі',
      en: 'Alternative proxy',
      zh: '备用代理'
    },
    online_mod_proxy_balanser: {
      ru: 'Проксировать',
      uk: 'Проксирувати',
      be: 'Праксіраваць',
      en: 'Proxy',
      zh: '代理'
    },
    online_mod_proxy_kp: {
      ru: 'Проксировать КиноПоиск',
      uk: 'Проксирувати КиноПоиск',
      be: 'Праксіраваць КиноПоиск',
      en: 'Proxy KinoPoisk',
      zh: '代理 KinoPoisk'
    },
    online_mod_skip_kp_search: {
      ru: 'Не искать в КиноПоиск',
      uk: 'Не шукати у КиноПоиск',
      be: 'Не шукаць у КиноПоиск',
      en: 'Skip search in KinoPoisk',
      zh: '在 KinoPoisk 中跳过搜索'
    },
    online_mod_iframe_proxy: {
      ru: 'Использовать iframe-прокси',
      uk: 'Використовувати iframe-проксі',
      be: 'Выкарыстоўваць iframe-проксі',
      en: 'Use iframe proxy',
      zh: '使用 iframe 代理'
    },
    online_mod_prefer_http: {
      ru: 'Предпочитать поток по HTTP',
      uk: 'Віддавати перевагу потіку по HTTP',
      be: 'Аддаваць перавагу патоку па HTTP',
      en: 'Prefer stream over HTTP',
      zh: '优先于 HTTP 流式传输'
    },
    online_mod_prefer_mp4: {
      ru: 'Предпочитать поток MP4',
      uk: 'Віддавати перевагу потіку MP4',
      be: 'Аддаваць перавагу патоку MP4',
      en: 'Prefer MP4 stream',
      zh: '更喜欢 MP4 流'
    },
    online_mod_prefer_dash: {
      ru: 'Предпочитать DASH вместо HLS',
      uk: 'Віддавати перевагу DASH замість HLS',
      be: 'Аддаваць перавагу DASH замест HLS',
      en: 'Prefer DASH over HLS',
      zh: '更喜欢 DASH 而不是 HLS'
    },
    online_mod_collaps_lampa_player: {
      ru: 'Collaps: Встроенный плеер',
      uk: 'Collaps: Вбудований плеєр',
      be: 'Collaps: Убудаваны плэер',
      en: 'Collaps: Lampa player',
      zh: 'Collaps： Lampa播放器'
    },
    online_mod_full_episode_title: {
      ru: 'Полный формат названия серии',
      uk: 'Повний формат назви серії',
      be: 'Поўны фармат назвы серыі',
      en: 'Full episode title format',
      zh: '完整剧集标题格式'
    },
    online_mod_av1_support: {
      ru: 'AV1 поддерживается',
      uk: 'AV1 підтримується',
      be: 'AV1 падтрымліваецца',
      en: 'AV1 supported',
      zh: 'AV1 支持'
    },
    online_mod_save_last_balanser: {
      ru: 'Сохранять историю балансеров',
      uk: 'Зберігати історію балансерів',
      be: 'Захоўваць гісторыю балансараў',
      en: 'Save history of balancers',
      zh: '保存平衡器的历史记录'
    },
    online_mod_clear_last_balanser: {
      ru: 'Очистить историю балансеров',
      uk: 'Очистити історію балансерів',
      be: 'Ачысціць гісторыю балансараў',
      en: 'Clear history of balancers',
      zh: '清除平衡器的历史记录'
    },
    online_mod_kinobase_mirror: {
      ru: 'Зеркало для Kinobase',
      uk: 'Дзеркало для Kinobase',
      be: 'Люстэрка для Kinobase',
      en: 'Mirror for Kinobase',
      zh: 'Kinobase的镜子'
    },
    online_mod_kinobase_cookie: {
      ru: 'Куки для Kinobase',
      uk: 'Кукі для Kinobase',
      be: 'Кукі для Kinobase',
      en: 'Cookie for Kinobase',
      zh: 'Kinobase 的 Cookie'
    },
    online_mod_rezka2_mirror: {
      ru: 'Зеркало для HDrezka',
      uk: 'Дзеркало для HDrezka',
      be: 'Люстэрка для HDrezka',
      en: 'Mirror for HDrezka',
      zh: 'HDrezka的镜子'
    },
    online_mod_proxy_rezka2_mirror: {
      ru: 'Проксировать зеркало HDrezka',
      uk: 'Проксирувати дзеркало HDrezka',
      be: 'Праксіраваць люстэрка HDrezka',
      en: 'Proxy HDrezka mirror',
      zh: '代理HDrezka镜子'
    },
    online_mod_rezka2_name: {
      ru: 'Логин или email для HDrezka',
      uk: 'Логін чи email для HDrezka',
      be: 'Лагін ці email для HDrezka',
      en: 'Login or email for HDrezka',
      zh: 'HDrezka的登录名或电子邮件'
    },
    online_mod_rezka2_password: {
      ru: 'Пароль для HDrezka',
      uk: 'Пароль для HDrezka',
      be: 'Пароль для HDrezka',
      en: 'Password for HDrezka',
      zh: 'HDrezka的密码'
    },
    online_mod_rezka2_login: {
      ru: 'Войти в HDrezka',
      uk: 'Увійти до HDrezka',
      be: 'Увайсці ў HDrezka',
      en: 'Log in to HDrezka',
      zh: '登录HDrezka'
    },
    online_mod_rezka2_logout: {
      ru: 'Выйти из HDrezka',
      uk: 'Вийти з HDrezka',
      be: 'Выйсці з HDrezka',
      en: 'Log out of HDrezka',
      zh: '注销HDrezka'
    },
    online_mod_rezka2_cookie: {
      ru: 'Куки для HDrezka',
      uk: 'Кукі для HDrezka',
      be: 'Кукі для HDrezka',
      en: 'Cookie for HDrezka',
      zh: 'HDrezka 的 Cookie'
    },
    online_mod_rezka2_fill_cookie: {
      ru: 'Заполнить куки для HDrezka',
      uk: 'Заповнити кукі для HDrezka',
      be: 'Запоўніць кукі для HDrezka',
      en: 'Fill cookie for HDrezka',
      zh: '为HDrezka填充Cookie'
    },
    online_mod_rezka2_fix_stream: {
      ru: 'Фикс видеопотока для HDrezka',
      uk: 'Фікс відеопотоку для HDrezka',
      be: 'Фікс відэаструменю для HDrezka',
      en: 'Fix video stream for HDrezka',
      zh: '修复 HDrezka 的视频流'
    },
    online_mod_rezka2_prx_ukr: {
      ru: 'Прокси-сервер для HDrezka (Укр)',
      uk: 'Проксі-сервер для HDrezka (Укр)',
      be: 'Проксі-сервер для HDrezka (Укр)',
      en: 'Proxy server for HDrezka (Ukr)',
      zh: 'HDrezka 的代理服务器 （乌克兰）'
    },
    online_mod_fancdn_name: {
      ru: 'Логин для FanSerials',
      uk: 'Логін для FanSerials',
      be: 'Лагін для FanSerials',
      en: 'Login for FanSerials',
      zh: 'FanSerials的登录名'
    },
    online_mod_fancdn_password: {
      ru: 'Пароль для FanSerials',
      uk: 'Пароль для FanSerials',
      be: 'Пароль для FanSerials',
      en: 'Password for FanSerials',
      zh: 'FanSerials的密码'
    },
    online_mod_fancdn_cookie: {
      ru: 'Куки для FanSerials',
      uk: 'Кукі для FanSerials',
      be: 'Кукі для FanSerials',
      en: 'Cookie for FanSerials',
      zh: 'FanSerials 的 Cookie'
    },
    online_mod_fancdn_fill_cookie: {
      ru: 'Заполнить куки для FanSerials',
      uk: 'Заповнити кукі для FanSerials',
      be: 'Запоўніць кукі для FanSerials',
      en: 'Fill cookie for FanSerials',
      zh: '为FanSerials填充Cookie'
    },
    online_mod_fancdn_token: {
      ru: 'Токен для FanCDN',
      uk: 'Токен для FanCDN',
      be: 'Токен для FanCDN',
      en: 'Token for FanCDN',
      zh: 'FanCDN 代币'
    },
    online_mod_authorization_required: {
      ru: 'Требуется авторизация',
      uk: 'Потрібна авторизація',
      be: 'Патрабуецца аўтарызацыя',
      en: 'Authorization required',
      zh: '需要授权'
    },
    online_mod_unsupported_mirror: {
      ru: 'Неподдерживаемое зеркало',
      uk: 'Непідтримуване дзеркало',
      be: 'Непадтрымоўванае люстэрка',
      en: 'Unsupported mirror',
      zh: '不支持的镜子'
    },
    online_mod_secret_password: {
      ru: 'Секретный пароль',
      uk: 'Секретний пароль',
      be: 'Сакрэтны пароль',
      en: 'Secret password',
      zh: '秘密密码'
    },
    online_mod_seasons_count: {
      ru: 'Сезонов',
      uk: 'Сезонів',
      be: 'Сезонаў',
      en: 'Seasons',
      zh: '季'
    },
    online_mod_episodes_count: {
      ru: 'Эпизодов',
      uk: 'Епізодів',
      be: 'Эпізодаў',
      en: 'Episodes',
      zh: '集'
    },
    online_mod_show_more: {
      ru: 'Показать ещё',
      uk: 'Показати ще',
      be: 'Паказаць яшчэ',
      en: 'Show more',
      zh: '展示更多'
    },
    online_mod_server: {
      ru: 'Сервер',
      uk: 'Сервер',
      be: 'Сервер',
      en: 'Server',
      zh: '服务器'
    },
    online_mod_filmix_param_add_title: {
      ru: 'Добавить ТОКЕН от Filmix',
      uk: 'Додати ТОКЕН від Filmix',
      be: 'Дадаць ТОКЕН ад Filmix',
      en: 'Add TOKEN from Filmix',
      zh: '从 Filmix 添加 TOKEN'
    },
    online_mod_filmix_param_add_descr: {
      ru: 'Добавьте ТОКЕН для подключения подписки',
      uk: 'Додайте ТОКЕН для підключення передплати',
      be: 'Дадайце ТОКЕН для падлучэння падпіскі',
      en: 'Add a TOKEN to connect a subscription',
      zh: '添加 TOKEN 以连接订阅'
    },
    online_mod_filmix_param_placeholder: {
      ru: 'Например: nxjekeb57385b..',
      uk: 'Наприклад: nxjekeb57385b..',
      be: 'Напрыклад: nxjekeb57385b..',
      en: 'For example: nxjekeb57385b..',
      zh: '例如： nxjekeb57385b..'
    },
    online_mod_filmix_param_add_device: {
      ru: 'Добавить устройство на Filmix',
      uk: 'Додати пристрій на Filmix',
      be: 'Дадаць прыладу на Filmix',
      en: 'Add Device to Filmix',
      zh: '将设备添加到 Filmix'
    },
    online_mod_filmix_modal_text: {
      ru: 'Введите его на странице ' + filmixHost + '/consoles в вашем авторизованном аккаунте!',
      uk: 'Введіть його на сторінці ' + filmixHost + '/consoles у вашому авторизованому обліковому записі!',
      be: 'Увядзіце яго на старонцы ' + filmixHost + '/consoles у вашым аўтарызаваным акаўнце!',
      en: 'Enter it at ' + filmixHost + '/consoles in your authorized account!',
      zh: '在您的授权帐户中的 ' + filmixHost + '/consoles 中输入！'
    },
    online_mod_filmix_modal_wait: {
      ru: 'Ожидаем код',
      uk: 'Очікуємо код',
      be: 'Чакаем код',
      en: 'Waiting for the code',
      zh: '等待代码'
    },
    online_mod_filmix_copy_secuses: {
      ru: 'Код скопирован в буфер обмена',
      uk: 'Код скопійовано в буфер обміну',
      be: 'Код скапіяваны ў буфер абмену',
      en: 'Code copied to clipboard',
      zh: '代码复制到剪贴板'
    },
    online_mod_filmix_copy_fail: {
      ru: 'Ошибка при копировании',
      uk: 'Помилка при копіюванні',
      be: 'Памылка пры капіяванні',
      en: 'Copy error',
      zh: '复制错误'
    },
    online_mod_filmix_nodevice: {
      ru: 'Устройство не авторизовано',
      uk: 'Пристрій не авторизований',
      be: 'Прылада не аўтарызавана',
      en: 'Device not authorized',
      zh: '设备未授权'
    },
    online_mod_filmix_status: {
      ru: 'Статус',
      uk: 'Статус',
      be: 'Статус',
      en: 'Status',
      zh: '状态'
    },
    online_mod_voice_subscribe: {
      ru: 'Подписаться на перевод',
      uk: 'Підписатися на переклад',
      be: 'Падпісацца на пераклад',
      en: 'Subscribe to translation',
      zh: '订阅翻译'
    },
    online_mod_voice_success: {
      ru: 'Вы успешно подписались',
      uk: 'Ви успішно підписалися',
      be: 'Вы паспяхова падпісаліся',
      en: 'You have successfully subscribed',
      zh: '您已成功订阅'
    },
    online_mod_voice_error: {
      ru: 'Возникла ошибка',
      uk: 'Виникла помилка',
      be: 'Узнікла памылка',
      en: 'An error has occurred',
      zh: '发生了错误'
    }
  });
}
