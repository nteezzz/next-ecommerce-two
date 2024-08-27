"use client";
import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import StarRating from "@/components/productDetailsPage/StarRating"; // Assuming you have this component

export const ReviewsCarousel: React.FC<{
  reviews: { user: string; rating: number; review: string }[];
}> = ({ reviews }) => {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full " 
    >
      <CarouselContent>
        {reviews.map((review, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-0 md:p-2">
              <Card className="h-full  shadow-lg text-left">
                <CardHeader>
                  <CardTitle className="text-lg">{review.user}</CardTitle>
                  <StarRating rating={review.rating} />
                </CardHeader>
                <CardContent>
                  <CardDescription>{review.review}</CardDescription>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
