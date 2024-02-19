import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue } from '../../lib/data';
import { fetchLatestInvoices } from '../../lib/data';
import { fetchCardData } from '../../lib/data';
import { RevenueChartSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { CardSkeleton } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';

export default async function Page() {
  // const revenue = await fetchRevenue();
  // const latestInvoices = await fetchLatestInvoices();
  // const cardData = await fetchCardData();
  // const totalPaidInvoices = cardData.totalPaidInvoices;
  // const totalPendingInvoices = cardData.totalPendingInvoices;
  // const numberOfCustomers = cardData.numberOfCustomers;
  // const numberOfInvoices = cardData.numberOfInvoices;
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardWrapper/>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton/>}>
          <RevenueChart/>
        </Suspense>
        <Suspense>
          <LatestInvoices/>
        </Suspense>

      </div>
    </main>
  );
}