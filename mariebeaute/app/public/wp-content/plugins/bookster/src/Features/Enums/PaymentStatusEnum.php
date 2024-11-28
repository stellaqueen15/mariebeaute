<?php
namespace Bookster\Features\Enums;

/**
 * Appointment Payment Status Enum
 */
class PaymentStatusEnum {

    const INCOMPLETE = 'incomplete';
    const COMPLETE   = 'complete';
    const REFUNDED   = 'refunded';
    const VOIDED     = 'voided';
}
