export default function Card({children}: {children: React.ReactNode}) {
	return (
		<div 
		  className="bg-white w-full shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 ">
			{children}
		</div>
	);
}