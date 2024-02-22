import Link from "next/link";

export default function Header() {
  return (
	<header 
	  className="w-full h-64 bg-header">
		<div className="flex flex-col justify-center items-center h-full w-full bg-black bg-opacity-50">
			<div>
				<p className="text-white text-7xl mt-16">Sorrisos</p>
				<p className="text-white text-9xl rotate-90 mt-20">:)</p>
			</div>
		
		</div>
	</header>
  )
}