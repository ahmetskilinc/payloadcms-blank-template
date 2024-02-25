"use client";

import { motion } from "framer-motion";
import React from "react";

const Template: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<motion.div
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			initial={{ opacity: 0 }}
			transition={{ type: "tween", bounce: "10", duration: 0.8 }}
		>
			{children}
		</motion.div>
	);
};

export default Template;
