// "use client";
import {
  GoTrophy,
  GoVerified,
  GoPackage,
  GoCommentDiscussion,
} from "react-icons/go"; 

export default function FooterBanner() {
  return (
    <div className="bg-[#F9F1E7] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-8">
          <div className="flex items-center text-center sm:text-left">
            <GoTrophy className="h-12 w-12 sm:h-16 sm:w-16 mb-4 sm:mb-0 mx-auto sm:mx-0" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold">High Quality</h3>
              <p className="text-xs sm:text-sm text-gray-600">Crafted from top materials</p>
            </div>
          </div>
          <div className="flex items-center text-center sm:text-left">
            <GoVerified className="h-12 w-12 sm:h-16 sm:w-16 mb-4 sm:mb-0 mx-auto sm:mx-0" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold">Warranty Protection</h3>
              <p className="text-xs sm:text-sm text-gray-600">Over two years</p>
            </div>
          </div>
          <div className="flex items-center text-center sm:text-left">
            <GoPackage className="h-12 w-12 sm:h-16 sm:w-16 mb-4 sm:mb-0 mx-auto sm:mx-0" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold">Free Shipping</h3>
              <p className="text-xs sm:text-sm text-gray-600">Orders over $150</p>
            </div>
          </div>
          <div className="flex items-center text-center sm:text-left">
            <GoCommentDiscussion className="h-12 w-12 sm:h-16 sm:w-16 mb-4 sm:mb-0 mx-auto sm:mx-0" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold">24/7 Support</h3>
              <p className="text-xs sm:text-sm text-gray-600">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
