export default function Container({children}: {children: React.ReactNode}) {
	return (
		<div className="container mx-auto flex items-center m-12">
			{children}
		</div>
	);
}