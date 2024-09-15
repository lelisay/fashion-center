import React from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

const ProductDetailTabsView = () => {
  return (
    <div className="flex w-full ">
      <Tabs defaultValue="product_detail" className="w-full">
        <TabsList className="flex w-full justify-between">
          <TabsTrigger
            value="product_detail"
            className="border-b-4 border-transparent text-xl w-full rounded-none data-[state=active]:border-slate-600 data-[state=inactive]:border-slate-300  py-2 text-black"
          >
            Product Details
          </TabsTrigger>
          <TabsTrigger
            value="rating_reviews"
            className="border-b-4 w-full text-xl border-transparent rounded-none data-[state=active]:border-slate-600 data-[state=inactive]:border-slate-300 px-4 py-2 text-black"
          >
            Rating & Reviews
          </TabsTrigger>
          <TabsTrigger
            value="faqs"
            className="border-b-4  text-xl w-full border-transparent rounded-none data-[state=active]:border-slate-600 data-[state=inactive]:border-slate-300 px-4 py-2 text-black"
          >
            FAQs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="product_detail">
          <div className="bg-green-700">Product Details Content</div>
        </TabsContent>

        <TabsContent value="rating_reviews">
          <div className="bg-red-500">Rating & Reviews Content</div>
        </TabsContent>

        <TabsContent value="faqs">
          <div className="bg-green-500">FAQs Content</div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductDetailTabsView;
