# Role Mapping - Revō Platform

This document defines role responsibilities and boundaries for the Revō platform.

## Primary Roles

### CUSTOMER
- Request roadside assistance (breakdown, towing, emergency support)
- Search and use directory listings (fuel, water, body shops, specialty services)
- Order spare parts from vendors
- Track requests and orders
- Leave ratings/reviews after service completion

### PROVIDER
- Offer and manage service jobs (mechanic, tow, body-work, on-site support)
- Set availability and operational status
- Receive, accept, and complete service bookings
- Update job progress and service completion
- Manage provider profile and service catalog

### VENDOR
- Manage spare parts catalog, pricing, and stock
- Receive and fulfill parts orders
- Update order states (processing, shipped, delivered/cancelled)
- Maintain inventory health (low stock, out of stock, restock)
- Operate as parts-supply side of the marketplace

### ADMIN
- Verify and moderate users, listings, and content
- Seed and maintain static directory data (fuel stations, body shops)
- Handle escalations and operational oversight
- Manage system-level controls and platform quality
- View platform analytics and governance metrics

## Dashboard Route Mapping

- `CUSTOMER` -> `/dashboard/customer`
- `PROVIDER` -> `/dashboard/provider`
- `VENDOR` -> `/dashboard/vendor`
- `ADMIN` -> `/dashboard/admin`

## Signup and Authentication Mapping

- Registration role options: `CUSTOMER`, `PROVIDER`, `VENDOR`
- Admin accounts are created through privileged flow (not public signup)
- On successful login/register, user is redirected by `user.role`

## Responsibility Boundaries

- **Service labor work** belongs to `PROVIDER`
- **Parts selling/fulfillment** belongs to `VENDOR`
- **Discovery and booking/order consumption** belongs to `CUSTOMER`
- **Moderation and governance** belongs to `ADMIN`

## Notes for Future Expansion

- Current model uses one primary role per user.
- If a business needs both service and parts capabilities, prefer:
  - Primary role + capability flags (recommended), or
  - Multi-role model in a future version.

## Suggested Capability Flags (Optional)

- `can_take_service_jobs`
- `can_sell_parts`
- `can_manage_directory_listing`
- `can_update_fuel_availability`
- `can_manage_portfolio`
