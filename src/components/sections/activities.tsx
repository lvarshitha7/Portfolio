'use client';

import Image from 'next/image';
import { InteractiveCard } from '../interactive-card';

const activities = [
  {
    id: 1,
    title: 'BIZ-TECH SUMMIT',
    image: '/activity_1.jpeg',
    link: 'https://www.linkedin.com/posts/lvarshitha7_biztechsummit-datumdecoders-pitching-activity-7310650466973974529-wOpZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE_78zoBtVj-SLRAn7PRM9qG_eSPv1mfFR8',
  },
  {
    id: 2,
    title: 'Smart Interviews',
    image: '/activity_2.jpeg',
    link: 'https://www.linkedin.com/posts/lvarshitha7_return-tle-mle-activity-7427028898544021504--fHe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE_78zoBtVj-SLRAn7PRM9qG_eSPv1mfFR8',
  },
  {
    id: 3,
    title: 'Megathon at IIIT HYD',
    image: '/activity_3.jpeg',
    link: 'https://www.linkedin.com/posts/lvarshitha7_megathon-iiithyderabad-hackathonexperience-activity-7387128918849343489-TXqI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE_78zoBtVj-SLRAn7PRM9qG_eSPv1mfFR8',
  },
  {
    id: 4,
    title: 'NSS Event',
    image: '/activity_4.jpeg',
    link: 'https://www.linkedin.com/in/lvarshitha7/recent-activity/all/',
  },
];

const ActivityCard = ({ activity }: { activity: typeof activities[0] }) => {
  return (
    <a href={activity.link} target="_blank" rel="noopener noreferrer">
      <InteractiveCard className="bg-secondary/30 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg">
        <div className="flex flex-col gap-4">
          {/* Image Section */}
          <div className="relative w-full h-64 overflow-hidden rounded-lg">
            <Image
              src={activity.image}
              alt={activity.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Title Section */}
          <div className="px-4 pb-4">
            <h3 className="text-xl font-bold text-center">{activity.title}</h3>
          </div>
        </div>
      </InteractiveCard>
    </a>
  );
};

export default function ActivitiesSection() {
  return (
    <section id="activities" className="w-full py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Activities</h2>
          <p className="mt-4 text-muted-foreground">
            A glimpse into my professional engagement and community involvement.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
