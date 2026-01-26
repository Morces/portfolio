import React from "react";
import clsx from "clsx";

const Section = ({ id, children, className }) => {
	return (
		<section
			id={id}
			className={clsx(
				"relative w-full min-h-screen py-20 px-4 sm:px-8 lg:px-16 flex flex-col justify-center",
				className,
			)}
		>
			<div className="max-w-7xl mx-auto w-full relative z-10">{children}</div>
		</section>
	);
};

export default Section;
