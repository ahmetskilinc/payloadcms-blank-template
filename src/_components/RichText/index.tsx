import React from "react";
import { Page } from "../../payload/payload-types";
import classes from "./index.module.scss";
import { CustomSerializedLexicalNode, Serialize } from "./serialize";

const RichText: React.FC<{ className?: string; content: Page["content"] }> = ({ className, content }) => {
	if (!content) {
		return null;
	}

	return (
		<div className={[classes.richText, className].filter(Boolean).join(" ")}>
			<Serialize nodes={content.layout.root.children as CustomSerializedLexicalNode[]} />
		</div>
	);
};

export default RichText;
