<?php
namespace Bookster\Controllers;

use Bookster\Services\AnalyticsService;
use Bookster\Features\Auth\RestAuth;
use Bookster\Features\Errors\InvalidArgumentException;
use Bookster\Features\Utils\SingletonTrait;


/**
 * AnalyticsController Controller
 *
 * @method static AnalyticsController get_instance()
 */
class AnalyticsController extends BaseRestController {
    use SingletonTrait;

    /** @var AnalyticsService */
    private $analytics_service;

    protected function __construct() {
        $this->analytics_service = AnalyticsService::get_instance();
        $this->init_hooks();
    }

    protected function init_hooks() {
        register_rest_route(
            self::REST_NAMESPACE,
            'analytics/overview/query',
            [
                [
                    'methods'             => 'PATCH',
                    'callback'            => [ $this, 'exec_query_overview' ],
                    'permission_callback' => [ RestAuth::class, 'require_manage_shop_records_cap' ],
                ],
            ]
        );

        register_rest_route(
            self::REST_NAMESPACE,
            'analytics/overview/query/as-agent/(?P<agent_id>\d+)',
            [
                [
                    'methods'             => 'PATCH',
                    'callback'            => [ $this, 'exec_query_overview_by_agent' ],
                    'permission_callback' => [ RestAuth::class, 'require_manage_agent_records_cap' ],
                ],
            ]
        );
    }

    public function query_overview( \WP_REST_Request $request ) {
        $args = $request->get_json_params();

        if ( ! empty( $args['forceRecalculate'] ) ) {
            delete_transient( 'bookster_today_analytics_overview' );
        }

        if ( empty( $args['apptFilter'] ) ) {
            $is_today = true;
            $cached   = get_transient( 'bookster_today_analytics_overview' );
            if ( false !== $cached ) {
                return $cached;
            }

            $args = [
                'datetime_start' => [
                    'operator' => 'BETWEEN',
                    'min'      => gmdate( 'Y-m-d 00:00:00', strtotime( '-29 day' ) ),
                    'max'      => gmdate( 'Y-m-d 23:59:59', time() ),
                ],
            ];
        }

        if ( ! isset( $args['datetime_start'] ) ) {
            throw new InvalidArgumentException( 'Required Date Range Arguments!' );
        }

        $results = $this->analytics_service->query_overview( $args );
        if ( $is_today ) {
            set_transient( 'bookster_today_analytics_overview', $results, MINUTE_IN_SECONDS * 10 );
        }

        return $results;
    }

    public function query_overview_by_agent( \WP_REST_Request $request ) {

        $agent_id      = $request->get_param( 'agent_id' );
        $transient_key = 'today_analytics_overview_agent_' . $agent_id;
        $args          = $request->get_json_params();

        if ( ! empty( $args['forceRecalculate'] ) ) {
            delete_transient( $transient_key );
        }

        if ( empty( $args['apptFilter'] ) ) {
            $is_today = true;
            $cached   = get_transient( $transient_key );
            if ( false !== $cached ) {
                return $cached;
            }

            $args = [
                'assignment.agent_id' => $agent_id,
                'datetime_start'      => [
                    'operator' => 'BETWEEN',
                    'min'      => gmdate( 'Y-m-d 00:00:00', strtotime( '-29 day' ) ),
                    'max'      => gmdate( 'Y-m-d 23:59:59', time() ),
                ],
            ];
        }

        if ( ! isset( $args['datetime_start'] ) ) {
            throw new InvalidArgumentException( 'Required Date Range Arguments!' );
        }

        $results = $this->analytics_service->query_overview( $args );

        if ( $is_today ) {
            set_transient( $transient_key, $results, MINUTE_IN_SECONDS * 10 );
        }

        return $results;
    }


    public function exec_query_overview( $request ) {
        return $this->exec_read( [ $this, 'query_overview' ], $request );
    }

    public function exec_query_overview_by_agent( $request ) {
        return $this->exec_read( [ $this, 'query_overview_by_agent' ], $request );
    }
}
