<?php
namespace Bookster\Services;

use Bookster\Features\Utils\SingletonTrait;

/**
 * AnalyticsService Service
 *
 * @method static AnalyticsService get_instance()
 */
class AnalyticsService extends BaseService {
    use SingletonTrait;

    /** @var AppointmentsService */
    private $appointments_service;
    /** @var CustomersService */
    private $customers_service;

    protected function __construct() {
        $this->appointments_service = AppointmentsService::get_instance();
        $this->customers_service    = CustomersService::get_instance();
    }

    public function query_overview( array $args ): array {
        $data  = $this->create_query_overview_data(
            strtotime( $args['datetime_start']['min'] ),
            strtotime( $args['datetime_start']['max'] )
        );
        $total = [
            'revenue'     => 0,
            'apptCount'   => 0,
            'cancelCase'  => 0,
            'newCustomer' => 0,
        ];

        $appointments = $this->appointments_service->query_where_with_info( $args );
        foreach ( $appointments as $appointment ) {
            $date_key = gmdate( 'Y-m-d', strtotime( $appointment->datetime_start ) );

            if ( 'canceled' === $appointment->book_status ) {
                $total['cancelCase'] += 1;

            } else {
                $revenue = 0;
                foreach ( $appointment->bookings as $booking ) {
                    $revenue += floatval( $booking->total_amount );
                }

                $total['revenue']             += $revenue;
                $data[ $date_key ]['revenue'] += $revenue;

                $total['apptCount']             += 1;
                $data[ $date_key ]['apptCount'] += 1;
            }
        }

        $total['newCustomer'] = $this->customers_service->count_where(
            [
                'created_at' => [
                    'operator' => 'BETWEEN',
                    'min'      => $args['datetime_start']['min'],
                    'max'      => $args['datetime_start']['max'],
                ],
            ]
        );

        return [
            'data'  => array_values( $data ),
            'total' => $total,
        ];
    }

    /**
     * Create empty data from date range with 1 day interval
     *
     * @param  int $from_stamp
     * @param  int $to_stamp
     * @return array
     */
    private function create_query_overview_data( int $from_stamp, int $to_stamp ): array {
        $data          = [];
        $current_stamp = $from_stamp;

        while ( $current_stamp <= $to_stamp ) {
            $date_key   = gmdate( 'Y-m-d', $current_stamp );
            $date_info  = getdate( $current_stamp );
            $next_stamp = strtotime( '+1 day', $current_stamp );

            if ( 1 === $date_info['mday'] || 2 === $date_info['mday'] || $current_stamp === $from_stamp || $next_stamp > $to_stamp ) {
                $label_format = 'm-d';
            } else {
                $label_format = 'd';
            }

            $data[ $date_key ] = [
                'date'      => $date_key,
                'label'     => gmdate( $label_format, $current_stamp ),
                'revenue'   => 0,
                'apptCount' => 0,
            ];

            $current_stamp = $next_stamp;
        }

        return $data;
    }
}
