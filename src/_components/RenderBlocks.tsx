"use client";

import { components } from "../_lib/blocks";

// TODO
// fix this
export type Fields = {
	blockType: string;
	id: string;
};

type Props = {
	fields: Fields;
};

const Block: React.FC<Props> = ({ fields }) => {
	const Block: React.FC<any> = components[fields.blockType!];

	if (Block) {
		return <Block key={fields.id} {...fields} />;
	}

	return null;
};

export default Block;
