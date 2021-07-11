export interface ProductAttributes {
  availability: string;
  converted_currency: string;
  converted_retailer_price: number;
  converted_sale_price: number;
  color: string;
  currency: string;
  e_affiliate_url?: string;
  e_brand_formatted: string;
  e_cat_l1: string[];
  e_cat_l2: string[];
  e_categories: string[];
  e_categories_path: string[];
  e_color: string;
  e_color_parent: string;
  e_friendly_id: string;
  e_friendly_ids: string[];
  e_gender_list: string[];
  e_image_urls_detail_jpg: string[][];
  e_image_urls_detail_ratio?: number[];
  e_image_urls_detail_webp: string[][];
  e_image_urls_og: string;
  e_image_urls_search_jpg: string[][];
  e_image_urls_search_webp: string[][];
  e_is_free_returns: false;
  e_is_free_shipping: false;
  e_is_on_sale?: true;
  e_item_code: string;
  e_material?: string;
  e_payment_options?: string[];
  e_product_name: string;
  e_retailer_display_domain: string;
  e_retailer_display_name: string;
  e_retailer_facet_name: string;
  e_retailer_industry: string;
  e_retailer_short_id: string;
  e_retailer_type?: string;
  e_returns_link?: string;
  e_sales?: string[];
  e_shipping_link?: string;
  e_subcat: string[];
  friendly_alternates: { [key: string]: string };
  friendly_canonical: string;
  gender: string;
  hreflangs: string[];
  item_code: string;
  long_description: string;
  product_name: string;
  retailer_code: string;
  retailer_price: number;
  retailer_url: string;
  sale_price?: number;
  sku_code: string;
  updated_at: string;
}

export interface Product {
  type: string;
  id: string;
  attributes: ProductAttributes;
}

// Response interface from api.theurge.com.au/search-results
export interface SearchResultsAPIResponse {
  data: Product[];
  meta: {
    meta: {
      pageSize: number;
      response_type: string;
      total: number;
    };
  };
}
