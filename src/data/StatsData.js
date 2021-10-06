import React from 'react';
import { GiEarthAmerica } from 'react-icons/gi';
import { MdAirplanemodeActive, MdTimer } from 'react-icons/md';
import { FaMoneyCheck } from 'react-icons/fa';
import styled from 'styled-components';

const Icon1 = styled(GiEarthAmerica)`
  color: #047bf1;
`;

const Icon2 = styled(MdAirplanemodeActive)`
  color: #f3a82e;
`;

const Icon3 = styled(MdTimer)`
  color: #f34f2e;
`;

const Icon4 = styled(FaMoneyCheck)`
  color: #3af576;
`;

export const StatsData = [
    {
        icon: (
            <Icon1/>
        ),
        title: "Over 100 Destinations",
        desc: "Travel to over 100 unique places",
    },
    {
        icon: (
            <Icon2/>
        ),
        title: "1 Million Trips Made",
        desc: "Over 1 million trips completed last year",
    },
    {
        icon: (
            <Icon3/>
        ),
        title: "Fastest Support",
        desc: "Access our support team 24/7",
    },
    {
        icon: (
            <Icon4/>
        ),
        title: "Best Deals",
        desc: "We offer the best prices",
    },
]

