<?php
namespace Bookster\Engine\Register;

use Bookster\Features\Utils\SingletonTrait;
use Bookster\Features\Scripts\EnqueueLogic;
use Bookster\Features\Scripts\ScriptName;

/**
 * Register Facade.
 *
 * @method static RegisterFacade get_instance()
 */
class RegisterFacade {
    use SingletonTrait;

    /** Hooks Initialization */
    protected function __construct() {
        $is_prod = EnqueueLogic::get_instance()->is_prod();

        add_filter( 'script_loader_tag', [ $this, 'add_entry_as_module' ], 10, 3 );

        add_action( 'init', [ $this, 'register_all_assets' ] );

        if ( $is_prod && class_exists( '\Bookster\Engine\Register\RegisterProd' ) ) {
            \Bookster\Engine\Register\RegisterProd::get_instance();
        } elseif ( ! $is_prod && class_exists( '\Bookster\Engine\Register\RegisterDev' ) ) {
            \Bookster\Engine\Register\RegisterDev::get_instance();
        }
    }

    public function add_entry_as_module( $tag, $handle ) {
        $module_handles = apply_filters( 'bookster_module_handles', [] );

        if ( strpos( $handle, ScriptName::MODULE_PREFIX ) !== false || in_array( $handle, $module_handles, true ) ) {
            if ( strpos( $tag, 'type="' ) !== false ) {
                return preg_replace( '/\stype="\S+\s/', ' type="module" ', $tag, 1 );
            } else {
                return str_replace( ' src=', ' type="module" src=', $tag );
            }
        }
        return $tag;
    }

    public function register_all_assets() {
        wp_register_style( ScriptName::STYLE_BOOKSTER, BOOKSTER_PLUGIN_URL . 'assets/dist/bookster/style.css', [], BOOKSTER_VERSION );
        wp_register_style( ScriptName::STYLE_ADMIN_HIDDEN, BOOKSTER_PLUGIN_URL . 'assets/css/admin-hidden.css', [], BOOKSTER_VERSION );
        wp_register_style( ScriptName::STYLE_RESET_THEME, BOOKSTER_PLUGIN_URL . 'assets/css/reset-theme.css', [], BOOKSTER_VERSION );
        wp_register_style( ScriptName::STYLE_ANIMXYZ, BOOKSTER_PLUGIN_URL . 'assets/css/animxyz.min.css', [], BOOKSTER_VERSION );

        wp_register_script( ScriptName::LIB_CORE, BOOKSTER_PLUGIN_URL . 'assets/dist/libs/core.js', [ 'wp-hooks' ], BOOKSTER_VERSION, false );
        wp_register_script( ScriptName::LIB_ICONS, BOOKSTER_PLUGIN_URL . 'assets/dist/libs/icons.js', [ 'react', 'react-dom', 'wp-hooks' ], BOOKSTER_VERSION, false );
        wp_register_script( ScriptName::LIB_COMPONENTS, BOOKSTER_PLUGIN_URL . 'assets/dist/libs/components.js', [ 'react', 'react-dom', 'wp-hooks' ], BOOKSTER_VERSION, false );
        wp_register_script( ScriptName::LIB_BOOKING, BOOKSTER_PLUGIN_URL . 'assets/dist/libs/booking.js', [ 'react', 'react-dom', 'wp-hooks' ], BOOKSTER_VERSION, false );
    }
}
