'use client';

import { Users } from 'lucide-react';
import ComingSoon from '@/components/ui/ComingSoon';

export default function HRMSPage() {
    return (
        <ComingSoon
            productName="HRMS"
            description="Agentic talent management meets predictive team analytics. We're building the first HR platform that actually understands your culture and team needs."
            Icon={Users}
            color="indigo"
        />
    );
}
