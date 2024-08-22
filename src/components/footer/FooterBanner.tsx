"use client";
import {
  GoTrophy,
  GoVerified,
  GoPackage,
  GoCommentDiscussion,
} from "react-icons/go"; 

export default function FooterBanner() {
  return (
    <div className="bg-[#F9F1E7] py-8">
      <div className="max-w-6xl mx-auto py-8 flex flex-wrap justify-between items-center gap-8">
        <div className="flex items-center">
          <GoTrophy className="h-16 w-16 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">High Quality</h3>
            <p className="text-sm text-gray-600">Crafted from top materials</p>
          </div>
        </div>
        <div className="flex items-center">
          <GoVerified className="h-16 w-16   mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Warranty Protection</h3>
            <p className="text-sm text-gray-600">Over two years</p>
          </div>
        </div>
        <div className="flex items-center">
          <GoPackage className="h-16 w-16   mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Free Shipping</h3>
            <p className="text-sm text-gray-600">Orders over $150</p>
          </div>
        </div>
        <div className="flex items-center">
          <GoCommentDiscussion className="h-16 w-16  mr-4" />
          <div>
            <h3 className="text-lg font-semibold">24/7 Support</h3>
            <p className="text-sm text-gray-600">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
