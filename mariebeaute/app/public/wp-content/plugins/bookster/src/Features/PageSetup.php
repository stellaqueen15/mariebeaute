<?php
namespace Bookster\Features;

use Bookster\Services\SettingsService;
use Bookster\Features\Utils\SingletonTrait;

/**
 * Page Setup Logic
 */
class PageSetup {
    use SingletonTrait;

    /** @var SettingsService */
    private $settings_service;

    protected function __construct() {
        $this->settings_service = SettingsService::get_instance();
    }

    public function maybe_create_pages() {
        $this->maybe_create_customer_dashboard();
    }

    public function maybe_create_customer_dashboard() {
        global $wpdb;

        // Check if option exist
        $permissions_settings       = $this->settings_service->get_permissions_settings();
        $customer_dashboard_page_id = $permissions_settings['customer_dashboard_page_id'];
        if ( null !== $customer_dashboard_page_id ) {
            $page_object = get_post( $customer_dashboard_page_id );

            if ( $page_object && 'page' === $page_object->post_type && ! in_array( $page_object->post_status, [ 'pending', 'trash', 'future', 'auto-draft' ], true ) ) {
                return $page_object->ID;
            }
        }

        // Check if exist page content like
        $customer_dashboard_shortcode = 'bookster_customer_dashboard';
        $valid_page_found             = $wpdb->get_var( $wpdb->prepare( "SELECT ID FROM $wpdb->posts WHERE post_type='page' AND post_status NOT IN ( 'pending', 'trash', 'future', 'auto-draft' ) AND post_content LIKE %s LIMIT 1;", "%{$customer_dashboard_shortcode}%" ) );// phpcs:ignore WordPress.DB
        if ( $valid_page_found ) {
            $permissions_settings['customer_dashboard_page_id'] = absint( $valid_page_found );

            $this->settings_service->update_permissions_settings(
                $this->settings_service->get_permissions_settings() + $permissions_settings
            );

            return $valid_page_found;
        }

        // create new page
        $page_data = [
            'post_status'    => 'publish',
            'post_type'      => 'page',
            'post_author'    => 1,
            'post_title'     => 'Customer Dashboard',
            'post_content'   => '<!-- wp:shortcode -->[' . $customer_dashboard_shortcode . ']<!-- /wp:shortcode -->',
            'comment_status' => 'closed',
        ];
        $page_id   = wp_insert_post( $page_data );
        $permissions_settings['customer_dashboard_page_id'] = $page_id;

        $this->settings_service->update_permissions_settings( $permissions_settings );

        return $page_id;
    }
}
