import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
    const store = await cookies();
    const locale = store.get('locale')?.value || 'fa'; // زبان پیش‌فرض en

    return {
        locale,
        messages: (await import(`../messages/${locale}`)).default
    };
});
