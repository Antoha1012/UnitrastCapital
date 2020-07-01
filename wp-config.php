<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'q213123_if');

/** Имя пользователя MySQL */
define('DB_USER', 'q213123_if');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', 'asd32ecfsDd4');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8mb4');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'xwSB:KTfgp#H)C4h<`YvZF$4/m(um5Iis=T?~#?bJ_H] K&Fe^;lE$T=ne8$`*N ');
define('SECURE_AUTH_KEY',  'T)26aT2oYneI*E(k/=U*nz]0~)+$PVFC@wfOT1|lBm>*m</)0J76y>Fo&X.9]<<h');
define('LOGGED_IN_KEY',    '6AAawh`uu|;r4=lWqh]%)1:;$k?%NZ]jO<+A}:q7-#xZGpV-Kk2C -06Ih3zcn-w');
define('NONCE_KEY',        'aSAUdFqaSsq:r/xnszc_YpbnQ]l;h|$sG-NZkjP5fyxH/1Yb=.[9R]YP>)TV7f?x');
define('AUTH_SALT',        'a{K)a3z-{1C2RizrxUy{OIrG*/_o&Zu1w8Wb@*6]C<qk(d]Cs1+9i[aOE1n]8TnX');
define('SECURE_AUTH_SALT', ',p WG? lm |0lxwq;!/6v @|5r@iaruWr/jALg>cB~u+Now 9x[k-Htpo]L90d:t');
define('LOGGED_IN_SALT',   'uzJ-N6:{`t|G=DpOZfn*$lyXw%E#32|MFK5|GL<Vwtt,7!ZWeFjY)xSN4~[(8Dtl');
define('NONCE_SALT',       'kD/VQ?#n]IuM>6&>Q7}:fo.CYKa|h0(&BlZ+!naH{{Y/fPzQ3v*J<bc_KX4$.;^-');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
