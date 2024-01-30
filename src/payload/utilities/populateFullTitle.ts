import { FieldHook } from "payload/types";

export const populateFullTitle: FieldHook = async ({ data }) => {
	return data?.meta.title;
};
