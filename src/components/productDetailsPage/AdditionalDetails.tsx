"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ReviewsCarousel } from "./ReviewsCarousel";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export const AdditionalDetails: React.FC<{
  longDescription: string;
  additionalInfo: { key: string; value: string }[];
  reviews: { user: string; rating: number; review: string }[];
}> = ({ longDescription, additionalInfo, reviews }) => (
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
      <div className="h-full overflow-auto p-4">
        <Table className="w-full text-center">
          <TableHeader>
            <TableRow>
              <TableHead>Feature</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {additionalInfo.map((info, index) => (
              <TableRow key={index}>
                <TableCell>{info.key}</TableCell>
                <TableCell>{info.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </TabsContent>

    <TabsContent value="reviews">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left" >
        {reviews.map((review, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">{review.user}</CardTitle>
              <StarRating rating={review.rating} />
            </CardHeader>
            <CardContent>
              <CardDescription>{review.review}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div> */}
      <ReviewsCarousel reviews={reviews} />
    </TabsContent>
  </Tabs>
);
