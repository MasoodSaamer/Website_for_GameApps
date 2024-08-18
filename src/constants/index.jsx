import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

import { Link } from 'react-router-dom';

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Published Games", href: "/published-games" },
  { label: "Privacy Policy", href: "#" },
  { label: "Contact Us", href: "#" },
];

export const testimonials = [
  {
    user: "Phekan Phekan hazarika",
    company: "Indian car simulator game: July 16, 2024",
    image: user1,
    text: "This game is very good but add some indian truck By the way game is fantastic",
  },
  {
    user: "Jyoti Dalal",
    company: "Indian car simulator game: May 31, 2024",
    image: user2,
    text: "This is my favorite game 🥰🤓🤓",
  },
  {
    user: "Betty Nibot",
    company: "Toyota Drift Simulator 2021: April 10, 2024",
    image: user3,
    text: "Hey protocol simulation this game is pretty fun, but I have one favor and that is can you add all the variations of the hiace and grandia and the alphard? If you do I would gladly be happy for adding it😊🙏👍!.",
  },
  {
    user: "Ncamisile Mazibuko",
    company: "Toyota Drift Simulator 2021: July 27, 2024",
    image: user4,
    text: "This game is the cooler game in my life and I want to see all games in the play store",
  },
  {
    user: "Chandralekha Patil",
    company: "Toyota Drift Simulator 2021: March 10, 2024",
    image: user5,
    text: "BEST GAME EVER NOT GONNA LIE! PLAYING THIS FOR 2 YEARS STILL FUN!",
  },
  {
    user: "Raheel Ziauddin",
    company: "Pakistan Car Simulator Game: May 13, 2024",
    image: user6,
    text: "This is very good game because in this game the cars are free and colours of cars and wheels are also free.So i rate this 5/5",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Game Engine",
    description:
      "Unity 2021.3.21f1 LTS & Unity 2019.4.34f1 LTS",
  },
  {
    icon: <Fingerprint />,
    text: "Multiplayer",
    description:
      "Photon Cloud Network",
  },
  {
    icon: <ShieldHalf />,
    text: "Programming Languages",
    description:
      "C#, Java",
  },
  {
    icon: <BatteryCharging />,
    text: "3D Editing & Rendering software",
    description:
      "Blender",
  },
  {
    icon: <PlugZap />,
    text: "Photo Editing Software",
    description:
      "Adobe Photoshop, paint.net",
  },
  {
    icon: <GlobeLock />,
    text: "Ad networks",
    description:
      "Unity Ads SDK & Ironsource SDK",
  },
  {
    icon: <BotMessageSquare />,
    text: "Analytics",
    description:
      "Google Play console analytics, Unity analytics",
  },
  {
    icon: <Fingerprint />,
    text: "Sound and Video editing",
    description:
      "Wondershare filmora",
  },
  {
    icon: <ShieldHalf />,
    text: "Car Physics Package",
    description:
      "Realistic Car Controller 3.82",
  },
  {
    icon: <BatteryCharging />,
    text: "Publishing Store",
    description:
      "Google Play Store",
  },
  {
    icon: <PlugZap />,
    text: "Development Platform",
    description:
      "Android devices",
  },
  {
    icon: <GlobeLock />,
    text: "Social Media",
    description:
      "Youtube, Instagram",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "1 million+ installs & 4000+ reviews",
  },
  {
    title: "Review code without worry",
    description:
      "Multiplayer mode allowing users from around the world to connect",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Featuring freeroam mode where player can get out of the car and roam the open world",
  },
  {
    title: "Share work in minutes",
    description:
      "Multiple high-definition maps including cities, drift tracks, highways and more",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  
];

export const resourcesLinks = [
  { href: "https://play.google.com/store/apps/dev?id=6892059516122641709", text: "Official Store Page" },
  { href: "https://www.youtube.com/channel/UCvAhLOZzsV9O-Co8DbJJ8Cg", text: "Youtube" },
  { href: "https://www.instagram.com/car_game_developers/", text: "Instagram" },
  
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
