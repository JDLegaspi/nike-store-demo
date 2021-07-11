import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchResults from './index';
import ExampleImageNike from 'assets/images/ExampleProductNike.png';
import { Product } from 'utils/types/Product';
import Hero from 'components/Hero';
import Button from 'components/Button';
import Flex from 'components/Flex';

export default {
  title: 'Search Results',
  component: SearchResults,
} as ComponentMeta<typeof SearchResults>;

const Template: ComponentStory<typeof SearchResults> = (args) => (
  <SearchResults {...args} />
);

const TemplateWithHero: ComponentStory<typeof SearchResults> = (args) => (
  <div>
    <Hero>
      <div>
        <h1>Nike React Sneakers</h1>
        <h2>Pay in 4 interest-free installments.</h2>
        <Flex style={{ paddingTop: 8 }}>
          <div style={{ paddingRight: 16 }}>
            <Button>Men</Button>
          </div>
          <Button>Women</Button>
        </Flex>
      </div>
    </Hero>
    <SearchResults {...args} />
  </div>
);

let exampleProduct: Product = {
  type: 'product',
  id: 'nke_cu9213_au',
  attributes: {
    availability: 'in-stock',
    color: 'Black/Black',
    converted_currency: '',
    converted_retailer_price: 0,
    converted_sale_price: 0,
    currency: 'AUD',
    e_brand_formatted: 'Nike',
    e_cat_l1: ['clothing'],
    e_cat_l2: ['clothing-activewear'],
    e_categories: ['clothing-bottom-pants-activewear'],
    e_categories_path: [
      'clothing',
      'clothing|clothing-activewear',
      'clothing|clothing-activewear|clothing-activewear-leggings-track-pants',
    ],
    e_color: 'black',
    e_color_parent: 'black',
    e_friendly_id: 'black-black-nike-sportswear-tech-fleece-cu9213-nke',
    e_friendly_ids: ['black-black-nike-sportswear-tech-fleece-cu9213-nke'],
    e_gender_list: ['unisex', 'female', 'male'],
    e_image_urls_detail_jpg: [[ExampleImageNike]],
    e_image_urls_detail_ratio: [0.8],
    e_image_urls_detail_webp: [
      [
        'https://images.theurge.com/nike/YohmlSuL3MhySpoxU574yrB0lMs=/main/1x/276-345/black-black-nike-nike-sportswear-tech-fleece-1.webp',
        'https://images.theurge.com/nike/YohmlSuL3MhySpoxU574yrB0lMs=/main/2x/552-690/black-black-nike-nike-sportswear-tech-fleece-1.webp',
        'https://images.theurge.com/nike/YohmlSuL3MhySpoxU574yrB0lMs=/main/3x/828-1035/black-black-nike-nike-sportswear-tech-fleece-1.webp',
      ],
    ],
    e_image_urls_og:
      'https://images.theurge.com/nike/YohmlSuL3MhySpoxU574yrB0lMs=/size/1200x1200/1200-1200/black-black-nike-nike-sportswear-tech-fleece-1.jpg',
    e_image_urls_search_jpg: [
      [
        'https://images.theurge.com/nike/YohmlSuL3MhySpoxU574yrB0lMs=/thumb/1x/170-272/black-black-nike-nike-sportswear-tech-fleece-1.jpg',
        'https://images.theurge.com/nike/YohmlSuL3MhySpoxU574yrB0lMs=/thumb/2x/340-544/black-black-nike-nike-sportswear-tech-fleece-1.jpg',
        'https://images.theurge.com/nike/YohmlSuL3MhySpoxU574yrB0lMs=/thumb/3x/509-816/black-black-nike-nike-sportswear-tech-fleece-1.jpg',
      ],
    ],
    e_image_urls_search_webp: [
      [
        'https://images.theurge.com/nike/YohmlSuL3MhySpoxU574yrB0lMs=/thumb/1x/170-272/black-black-nike-nike-sportswear-tech-fleece-1.webp',
        'https://images.theurge.com/nike/YohmlSuL3MhySpoxU574yrB0lMs=/thumb/2x/340-544/black-black-nike-nike-sportswear-tech-fleece-1.webp',
        'https://images.theurge.com/nike/YohmlSuL3MhySpoxU574yrB0lMs=/thumb/3x/509-816/black-black-nike-nike-sportswear-tech-fleece-1.webp',
      ],
    ],
    e_is_free_returns: false,
    e_is_free_shipping: false,
    e_item_code: 'cu9213',
    e_material: 'material-cotton',
    e_product_name: 'Sportswear Tech Fleece',
    e_retailer_display_domain: 'nike.com',
    e_retailer_display_name: 'Nike',
    e_retailer_facet_name: 'Nike',
    e_retailer_industry: 'fashion',
    e_retailer_short_id: 'nke',
    e_subcat: ['clothing-activewear-leggings-track-pants'],
    friendly_alternates: {
      'en-au': 'black-black-nike-sportswear-tech-fleece-cu9213-nke',
      'en-gb': 'black-black-nike-sportswear-tech-fleece-cu9213-nke',
      'en-nz': 'black-black-nike-sportswear-tech-fleece-cu9213-nke',
      'en-us': 'black-black-nike-sportswear-tech-fleece-cu9213-nke',
      'en-za': 'black-black-nike-sportswear-tech-fleece-cu9213-nke',
    },
    friendly_canonical: 'black-black-nike-sportswear-tech-fleece-cu9213-nke',
    gender: 'unisex',
    hreflangs: ['en-au'],
    item_code: 'CU9213',
    long_description:
      "<p><strong>STAY WARM, STAY COSY.</strong></p><br><p>Make the most of chilly days with the Nike Sportswear Tech Fleece Trousers. These everyday joggers are all about our innovative premium fleece that's super-soft, lightweight and warm.</p><br><p><strong>Keep Warm</strong></p><p>Nike Tech Fleece is an innovative knit fabric that provides the ultimate in lightweight warmth.</p><br><p><strong>Stay Snug</strong></p><p>An elastic waistband and drawcord help provide a secure fit.</p><br><p><strong>Product Details</strong></p><ul><li>Standard fit for a relaxed, easy feel</li><li>Side pockets</li><li>Ribbed cuffs</li><li>Body: 69% cotton/31% polyester. Pocket bag knuckle side: 100% cotton.</li><li>Machine wash</li><li>Imported</li><li>Colour Shown: Black/Black</li><li>Style: CU9213-010</li><li>Country/Region of Origin: Cambodia,China</li></ul>",
    product_name: 'Nike Pegasus Trail 2 GORE-TEX',
    retailer_code: 'enau-nike',
    retailer_price: 170,
    retailer_url:
      'https://www.nike.com/au/t/sportswear-tech-fleece-older-trousers-LVnqRN',
    sku_code: 'CU9213',
    updated_at: '2020-10-07T04:56:46.674+00:00',
  },
};

export const ThreeItems = Template.bind({});
ThreeItems.args = {
  products: new Array(3).fill(exampleProduct),
  totalNumberProducts: 3,
  totalNumberRetailers: 1,
  onScrollToBottom: () => {},
  onSelectProduct: (product?: Product) => {},
};

export const TwentyItems = Template.bind({});
TwentyItems.args = {
  products: new Array(20).fill(exampleProduct),
  totalNumberProducts: 20,
  totalNumberRetailers: 12,
  onScrollToBottom: () => {},
  onSelectProduct: (product?: Product) => {},
};

export const WithHero = TemplateWithHero.bind({});
WithHero.args = {
  products: new Array(20).fill(exampleProduct),
  totalNumberProducts: 20,
  totalNumberRetailers: 12,
  onScrollToBottom: () => {},
  onSelectProduct: (product?: Product) => {},
};
