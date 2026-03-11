'use client';

import { CreditCard } from 'lucide-react';
import ComingSoon from '@/components/ui/ComingSoon';

export default function PayrollPage() {
    return (
        <ComingSoon
            productName="Payroll"
            description="Global payroll automation with zero-error taxation. We're removing the complexity of international compliance so you can pay your team anywhere, instantly."
            Icon={CreditCard}
            color="emerald"
        />
    );
}
