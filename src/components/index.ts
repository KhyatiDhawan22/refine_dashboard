import { LatestActivities } from '@/components/home';
import { DashboardTotalCountCard } from '@/components/home';
import { AccordionHeaderSkeleton } from '@/components/skeleton/accordion-header';

import { DealsChart, UpcomingEventsSkeleton, KanbanColumnSkeleton, ProjectCardSkeleton, LatestActivitiesSkeleton } from '@/components/home';
import { UpcomingEvents } from '@/components/home';

export {
    UpcomingEvents,
    DealsChart,
    UpcomingEventsSkeleton,
    AccordionHeaderSkeleton,
    KanbanColumnSkeleton,
    ProjectCardSkeleton,
    LatestActivitiesSkeleton,
    DashboardTotalCountCard,
    LatestActivities

};
export * from './tags/user-tag';
export * from './text';
export * from "./accordion";
export * from "./tasks/form/description";
export * from "./tasks/form/due-date";
export * from "./tasks/form/stage";
export * from "./tasks/form/title";
export * from "./tasks/form/users";
export * from "./tasks/form/header";
