import React from "react";
import {Feature} from '../types/Space';

// @ts-ignore
import CommunityIcon from '../icons/community.svg';
// @ts-ignore
import AffordableIcon from '../icons/affordable.svg';
// @ts-ignore
import GymIcon from '../icons/gym.svg';
// @ts-ignore
import WifiIcon from '../icons/wifi.svg';
// @ts-ignore
import ComfortIcon from '../icons/lounges.svg';
// @ts-ignore
import BookingIcon from '../icons/booking.svg';
// @ts-ignore
import CafeIcon from '../icons/cafe.svg';
// @ts-ignore
import SportsIcon from '../icons/sports-area.svg';

const features: Feature [] = [
    {icon: CommunityIcon, title: 'Community Events', bb: true, br: true},
    {icon: GymIcon, title: 'Gym Facilities', bb: true, br: true},
    {icon: WifiIcon, title: 'High-Speed WiFi', bb: true, br: true},
    {icon: CafeIcon, title: 'Cafe & Tea Bar', bb: true},
    {icon: AffordableIcon, title: 'Affordable', br: true},
    {icon: ComfortIcon, title: 'Comfort Lounges', br: true},
    {icon: BookingIcon, title: 'Quick Booking', br: true},
    {icon: SportsIcon, title: 'Sports Area'},
];
const FeaturesSection: React.FC = () => {
    return (
        <div className="w-full py-10 ">
            <div className="md:px-12 xl:mx-20 px-8 xl:p-0 ">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us?</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 ">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            index={index}
                            icon={feature.icon}
                            title={feature.title}
                            bb={feature.bb}
                            br={feature.br}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const FeatureCard: React.FC<Feature> = ({index, icon, title, bb, br}) => {
    return (
        <div key={index} className={`flex items-center border-gray-300 px-6 py-8 ${
            br ? 'border-r' : ''} 
      ${bb ? 'border-b' : ''}`}>
            <img
                src={icon}
                alt={title}
                className="w-8 h-8 mr-4"
            />
            <p className="text-lg font-medium text-gray-900">{title}</p>
        </div>
    );
};


export default FeaturesSection;