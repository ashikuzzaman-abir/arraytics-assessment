import type { Metadata } from 'next';
import './globals.css';
import ReduxProvider from '@/component/providers/ReduxProvider';

export const metadata: Metadata = {
	title: 'Arraytics Assessment',
	description: 'author: @ashikuzzaman_abir',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	);
}
