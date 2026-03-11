'use client';

import { Briefcase } from 'lucide-react';
import ComingSoon from '@/components/ui/ComingSoon';

export default function CRMPage() {
    return (
        <ComingSoon
            productName="CRM"
            description="The only CRM that predicts lead behavior and automates relationship nurturing before you even know they're ready to buy."
            Icon={Briefcase}
            color="purple"
        />
    );
}
