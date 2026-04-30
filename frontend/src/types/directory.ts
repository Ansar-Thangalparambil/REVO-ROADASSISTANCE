export type DirectoryCategory =
  | 'FUEL_STATION'
  | 'BODY_SHOP'
  | 'TYRE_SHOP'
  | 'BATTERY_SHOP'
  | 'MULTI_SERVICE'
  | 'OTHER';

export interface DirectoryListing {
  id: string;
  slug: string;
  name: string;
  category: DirectoryCategory;
  distanceKm: number;
  rating: number;
  reviewCount: number;
  isOpen: boolean;
  tags: string[];
  verified: boolean;
}

export interface FuelStationListing extends DirectoryListing {
  fuelTypes: string[];
  amenities: string[];
  is24Hours: boolean;
  hasEvCharger: boolean;
  evChargerCount: number;
  availability: Record<string, boolean>;
}

export interface BodyShopListing extends DirectoryListing {
  serviceTags: string[];
  brandsServiced: string[];
  acceptsInsurance: boolean;
}
