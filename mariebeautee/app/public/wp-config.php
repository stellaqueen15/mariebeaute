<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'oy4i.qlfaL|8)<a$D=E770]P,zo_qWa,h:Cy=U{cIe(B-7MYgsK)`t;O4zkow:8:' );
define( 'SECURE_AUTH_KEY',   'mQkfGVe!Bjf}Vkg`A6!mbfnKHlu&8J) E#JxT)HP1fj3Z$:%aRM=Je5g.S{)O2}f' );
define( 'LOGGED_IN_KEY',     'e?5CK|ghn/%,) DaZY&.PkhYOaH=B:I0Ve&F rWT_wM!z]y#q1_/X<N>2MtdD:U)' );
define( 'NONCE_KEY',         'nDG^  Dr`i{#Xx2S,DMb[d[?XHS6IrjX~sOcz%/{W1tDeV5lspD9aVe{6D:IXhRX' );
define( 'AUTH_SALT',         'x8+LyVm?.W~iupsydiRlO(?yF{I0]JEH>Z]FQFBpl_pBuKQ%nzD,2&s3y*>l$W(i' );
define( 'SECURE_AUTH_SALT',  'I`(aCq.(8FkXDR*OGH)~_TRd,xz*pm[f>)bi?!1~Y>DFAg4lE$^w0i^2^NIPvnfq' );
define( 'LOGGED_IN_SALT',    'BFa{A06e|n9P4D,#qc5</49CowaN3yqBbR?(rT,>Zy{ZR(;nE~[BJ<c8:GT][bhR' );
define( 'NONCE_SALT',        '8agcu:hj!w>PA9[8A{De]2wECE.AFTYDPRU<y#S_&`xZTW2`51f;t!e} H!|jcj!' );
define( 'WP_CACHE_KEY_SALT', '$tsC}$ynTswVz%m?!+dmu[?^[d$-DZK0=p~XPc8r]W[Fxx`}RQI}3@1([7u0}K/;' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
