import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export const AdditionalDetails: React.FC<{ longDescription: string; additionalInfo: string; reviews: string }> = ({
  longDescription,
  additionalInfo,
  reviews,
}) => (
  <Tabs defaultValue="description">
    <TabsList>
      <TabsTrigger value="description">Description</TabsTrigger>
      <TabsTrigger value="info">Additional Info</TabsTrigger>
      <TabsTrigger value="reviews">Reviews</TabsTrigger>
    </TabsList>
    <TabsContent value="description">
      <p>{longDescription}</p>
    </TabsContent>
    <TabsContent value="info">
      <p>{additionalInfo}</p>
    </TabsContent>
    <TabsContent value="reviews">
      <p>{reviews}</p>
    </TabsContent>
  </Tabs>
);
